# Hello Payroll

## Quickstart [![Run on Replit](https://replit.com/badge/github/nmbrco/hello-payroll)](https://replit.com/@aidan-at-nmbr/hello-payroll)

Once you've opened this package in Replit, you can "Run" the project once you set the following environment variables in "Secrets":

    - `NMBR_API_KEY`
    - `NMBR_API_SECRET`
    - `NMBR_PARTNER_ID`

Here's how to find or generate these values from the Nmbr Partner Portal:

[![Loom Demo - Getting Started with Nmbr Components' Hello Payroll on Replit](https://www.loom.com/share/3c70c7c36748456ea94d231cf3ef23b2)](https://www.loom.com/share/3c70c7c36748456ea94d231cf3ef23b2)

Then make any edits you'd like in the files, and refresh the tab to see the changes.

For more about Nmbr Components, see [our documentation](https://docs.nmbr.co/docs/payroll-quickstart).

## Prerequisites

-   [Node.js](https://nodejs.org/en) _(version specified in `.node-version`; recommend using [nodenv](https://github.com/nodenv/nodenv) or [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md))_
-   [pnpm](https://pnpm.io/) _(fast, space-efficient package manager; recommend installing via Corepack)_

## Development

### Cheat Sheet

```bash
pnpm run dev # start dev server
pnpm run build # build static output
pnpm run start # start api + static server
```

### Environment

Please set these up in your environment or in a `.env` file in the root of the repo.

```bash
# Required to run the repl && embedder
NMBR_API_KEY="your-api-key"
NMBR_API_SECRET="your-api-secret"
NMBR_PARTNER_ID="your-partner-id"
