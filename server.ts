// Configure environment variables from .env when available
import 'dotenv/config';

import path from 'path';
import crypto from 'node:crypto';

import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import * as vite from 'vite';

import * as nmbr from '@nmbrco/sdk/server';
import * as fakers from '@nmbrco/sdk/fakers';

const ENV = process.env.NODE_ENV ?? 'development';
const PORT = parseInt(process.env.PORT ?? '8080');

const VITE_MODE = process.env.VITE_MODE ?? 'development';
const ROOT_DIR = path.dirname(import.meta.url.replace(/^file:\//, '/'));

const NMBR_API_KEY = process.env.NMBR_API_KEY ?? 'invalid-key';
const NMBR_API_SECRET = process.env.NMBR_API_SECRET ?? 'invalid-secret';

const SIGNING_HASH = crypto
  .createHash('sha256')
  .update(NMBR_API_SECRET)
  .digest('hex');

const app = express();
const client = new nmbr.NmbrClient({
  apiKey: NMBR_API_KEY,
  apiHost: 'https://sandbox.nmbr.co',
  apiSecret: NMBR_API_SECRET,
});

app.use(cookieParser(), async (req, res, next) => {
  // if the request has no `cid` cookie, create a new Nmbr company
  // and set the `cid` cookie to the company id
  if (!req.cookies?.cid) {
    try {
      const company = await client.companies
        .create({ name: fakers.businessEntity.name() })

      // ⚠ This cookie is not secure for production! Client-side JS can read or modify it.
      res.cookie('cid', company.id, { maxAge: 1000 * 60 * 60 * 24 * 365 });
    } catch (error) {
      console.error('Failed to create company:', error);
      console.log('Proceeding anyway, the UI will handle this');

      // ⚠ This cookie is not secure for production! Client-side JS can read or modify it.
      res.cookie('cid', 'fake-company-id');
    }
  }

  next();
});

app.post('/sign_nmbr_request', express.json(), async (req, res) => {
  // We only sign the request if the `cid` cookie matches the company id (JWT subject)
  // You may implement more authorization logic here
  if (req.cookies?.cid === req.body.sub) {
    res.status(201).send(jwt.sign(req.body, SIGNING_HASH)).end();
  } else {
    res.status(403).end();
  }
});

if (VITE_MODE === 'development' && ENV === 'development') {
  const v = await vite.createServer({
    root: ROOT_DIR,
    server: {
      middlewareMode: true,
    },
  });

  app.use(v.middlewares);
} else {
  app.use(express.static(path.join(ROOT_DIR, 'dist')));
}

app.listen(PORT, () => {
  console.log(`Hello Payroll is running on http://localhost:${PORT}`);
});
