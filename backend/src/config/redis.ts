import { ENV } from "./env";

export const redisConnection = {
        host: ENV.redis.host,
        port: ENV.redis.port,
        password: ENV.redis.password,
        // For Render/External Redis, you might need TLS
        tls: ENV.app.nodeEnv === "production" ? {} : undefined
};
