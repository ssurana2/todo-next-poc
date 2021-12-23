# Sample Todo Application

The sample todo application is developed on next.js.

## Goal

The goal of this sample is divided into following parts

- [ ] Develop a project based todo application
- [x] Add storybook
- [ ] Host storybook on github pages
- [ ] Add continuous deployment on main branch using AWS amplify
- [ ] Add flow/steps to deploy staging and branch specific code using AWS amplify

## Optional Goals

- [ ] Trigger slack messages on build failure / success
- [ ] Trigger slack message when the build is deployed to production
- [ ] Enable mechanism to rollback via slack

## Tech stack:

```
"next": "12.0.7",
"react": "17.0.2",
"typescript": "4.5.4",
"@storybook/react": "^6.4.9",
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
