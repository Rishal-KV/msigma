# MSigma API

The backend for the MSigma project, providing a robust API and background processing capabilities.

## Tech Stack

- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Queue System**: [BullMQ](https://docs.bullmq.io/) with [Redis](https://redis.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Logging**: [Winston](https://github.com/winstonjs/winston) & [Morgan](https://github.com/expressjs/morgan)
- **Validation**: [Joi](https://joi.dev/)

## Core Features

- **User API**: Endpoints for user management and status tracking.
- **Background Jobs**: Scheduled external API calls and retry mechanisms using BullMQ.
- **Batched Processing**: Process records in batches for optimized performance.
- **Error Handling**: Centralized error management and comprehensive logging.

## Installation

```bash
npm install
```

## Available Scripts

- `npm run dev`: Starts the application in development mode with `ts-node-dev`.
- `npm run build`: Compiles the TypeScript code to JavaScript in the `dist` folder.
- `npm start`: Runs the compiled application from `dist/app.js`.
- `npm run type-check`: Performs a TypeScript type check without emitting output.

## Environment Variables

Ensure you have a `.env` file in this directory with the following (example):

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/msigma
REDIS_HOST=localhost
REDIS_PORT=6379
```
