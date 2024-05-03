# Hello Payroll

## Quickstart [![Run on Replit](https://replit.com/badge/github/nmbrco/hello-payroll)](https://replit.com/github/nmbrco/hello-payroll)

Once you've opened this package in Replit:

- Make sure to select the "Blank REPL" template when importing:
  <img width="695" alt="image" src="https://github.com/nmbrco/hello-payroll/assets/721128/70b4a1a0-5ecb-4168-9d49-35da8bfa4a21">

- Set the following environment variables in "Secrets" (bottom-left corner)
    - `NMBR_API_KEY`
    - `NMBR_API_SECRET`
    - `NMBR_PARTNER_ID`
  <img width="968" alt="image" src="https://github.com/nmbrco/hello-payroll/assets/721128/5c0f8332-ddb1-4aed-8c75-e79f2ec46a90">

- Run the Repl (big button in the top middle of the screen)
  <img width="1563" alt="image" src="https://github.com/nmbrco/hello-payroll/assets/721128/772c14ed-4276-4d58-8c14-e7980dc54f1d">

- Open the Webview in a new tab

Then make any edits you'd like in the files, and refresh the tab to see the changes

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
