# Scalable Chat App

A real-time chat application built with **Next.js**, **Socket.IO**, and **Redis** for scalable messaging services.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Socket Service](#socket-service)
- [Usage](#usage)
- [License](#license)

## Features

- Real-time messaging using WebSockets.
- Redis Pub/Sub support.
- Frontend powered by React & Next.js.

## Prerequisites

- Node.js (v16+)
- Redis
- Git

## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/Scalable-Chat-APP.git
   cd Scalable-Chat-APP

## socket-service
Backend (Node.js with Socket.IO)
The Socket service establishes a server with a Redis-backed pub/sub system. It subscribes to the MESSAGES Redis channel and listens for incoming WebSocket messages:
```bash
socket.on('event:message', async ({ message }: { message: String }) => {
  await pub.publish('MESSAGES', JSON.stringify({ message }));
});
```
Frontend (Next.js with React)
The frontend client is set up to listen to WebSocket messages using the socket.io-client library.
```bash
const { sendMessage, messages } = useSocket();
```
Context API
The app uses a SocketProvider to provide WebSocket functionality throughout the component tree.

## Usage
Once installed and running, open your browser and go to http://localhost:8000.
Enter messages, and watch them appear in real-time for all connected users.

## License
This project is licensed under the MIT License.
```bash
git clone https://github.com/KevinJugal/Scalable-Chat-APP.git
```

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
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
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

