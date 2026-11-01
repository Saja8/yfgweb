# IFToMM YFG Events

Umbrella website for IFToMM Young Faculty Group activities, including symposia,
HMDS, summer school, winter school, and meetings.

## Stack

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS

## Local Development

```bash
yarn install --immutable
yarn dev
```

Open `http://localhost:3000`.

## Checks

```bash
yarn tsc --noEmit
yarn next build
```

## Deployment

Recommended deployment path:

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Add the production domain in Vercel.
4. Configure DNS and email forwarding on the chosen domain provider.

## Contact

The site uses a single shared public contact address configured in:

- `app/data/siteContact.ts`

## Maintenance and checks

Use Node.js 22 for automated checks and the committed Yarn 3.3.0 release. Pull requests run an immutable dependency installation, TypeScript validation, and a production build. These do not require production credentials.

Production Vercel deployments also receive an HTTP smoke check of the public event routes at https://yfgweb.vercel.app/. Protected preview URLs are not probed automatically, and their access controls are not bypassed. This is a reachability check, not a browser-based interaction test. The original template's Netlify workflow and demo-specific E2E trigger have been removed; this checkout has no `yarn e2e` script or browser test suite.

Dependabot groups compatible Wix updates and tooling updates to reduce separate pull requests. Review and test updates before merging, especially framework major versions. A passing build does not establish that older framework dependencies are free of security advisories.
