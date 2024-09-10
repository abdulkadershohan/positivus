<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Environment Setup](#environment-setup)
- [Database Setup](#database-setup)
- [Installation](#installation)
- [What's inside?](#what's-inside?)
- [Utilities](#utilities)
- [Build](#build)
- [Develop](#develop)
- [Remote Caching](#remote-caching)
- [Apps and Packages](#apps-and-packages)
- [License](#license)
- [Author](#author)

# Environment Setup
* check the env.example file and create a .env file in the root directory of the project

# Database Setup
* You need to create new postgres database and update the .env file with the database credentials

### Installation

You can install the package via pnpm:

Install dependencies
   ```sh
    pnpm install
   ```


## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `frontend`: a [Next.js](https://nextjs.org/) app
- `backend`: a [Strapi Headless CMS](https://strapi.io/)
- `@repo/ui`: a stub React component library shared by both `frontend` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```


<!--Installation -->


### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Author
<img src="https://avatars.githubusercontent.com/u/56482597?v=4" width="100" style="border-radius:5%"/>

 - [MD. Abdul Kader](
    https://www.linkedin.com/in/abdulkadershohan/)

 - Email: abdulkadirshohan@gmail.com

 - Protfolio: https://dev-shohan.netlify.app/

 - https://github.com/abdulkadershohan
