<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Requirements](#requirements)  
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Database Setup](#database-setup)
- [What's inside?](#whats-inside)
- [Utilities](#utilities)
- [Build](#build)
- [Develop](#develop)
- [Remote Caching](#remote-caching)
- [Apps and Packages](#apps-and-packages)
- [License](#license)
- [Author](#author)
- [Video] (#video)
- [Screenshot] (#screenshot)


### Requirements
- Node JS ( Strapi supported Node JS version )
- Postgresql Setup
- pgAdmin4
- cloudinary account


### Installation

You can install the package via pnpm:

Install dependencies
   ```sh
    pnpm install
   ```


### Environment Setup
- Check the env.example file and create a .env file in the same directory and update the environment variables. [ `apps/frontend/.env.example` and `apps/backend/.env.example` ]

   

### Database Setup 

   - Remote Database
     * Go to `backend/config/database.ts` and uncomment ssl property and update the database credentials in the .env file

   - Local Database
      * You need to Postgresql setup in your local machine and have to install pgAdmin4.
      * You need to create new postgres database.
      * Import the `apps/backend/database/backup/positivusdb` database in your local database and update the .env file with the database credentials.


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

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Author
<img src="https://avatars.githubusercontent.com/u/56482597?v=4" width="100" style="border-radius:5%"/>

 - [MD. Abdul Kader](
    https://www.linkedin.com/in/abdulkadershohan/)

 - Email: abdulkadirshohan@gmail.com

 - Portfolio: https://dev-shohan.netlify.app/

 - https://github.com/abdulkadershohan

### Video

[![Watch the video](https://github.com/user-attachments/assets/95a5a25b-9e5a-4349-84ab-ac0d0fe386bf)](https://www.youtube.com/watch?v=gmtbP7m_Klw)


### Screenshot:

- cover image
![cover](https://github.com/user-attachments/assets/95a5a25b-9e5a-4349-84ab-ac0d0fe386bf)

- Bangla language

![bn](https://github.com/user-attachments/assets/9b669e9a-b429-4cd6-b52d-80023db8b67a)

- Spanish language

![es](https://github.com/user-attachments/assets/58c34c3d-80c2-4e38-a065-416daf4e7e49)

- Light Theme

![lightTheme](https://github.com/user-attachments/assets/fdadfc0c-fc58-405e-a1e8-b027fbfc38fd)

- Dark Theme

![darkTheme](https://github.com/user-attachments/assets/5af359ad-a746-4f41-91e3-9bc4fc0c2b15)



