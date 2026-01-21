import { RedisOptions } from "bullmq";

export const redisConnection: RedisOptions = {
  connectionName: "user-sync-redis",
  url: process.env.REDIS_URL!,
};
