import 'dotenv/config';

import path from 'path';
import * as vite from 'vite';
// @ts-expect-error - no types available
import handlebars from 'vite-plugin-handlebars';

const ROOT_DIR = path.dirname(import.meta.url.replace(/^file:\//, '/'));

const NMBR_PARTNER_ID = process.env.NMBR_PARTNER_ID;

if (!NMBR_PARTNER_ID) {
  throw new Error('NMBR_PARTNER_ID (env variable) is required to run');
}

export default vite.defineConfig({
  define: {
    'import.meta.env.NMBR_PARTNER_ID': `'${NMBR_PARTNER_ID}'`,
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    handlebars({
      partialDirectory: path.join(ROOT_DIR, 'partials'),
    }),
  ],
});
