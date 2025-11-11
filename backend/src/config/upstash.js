import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import dotenv from "dotenv"

dotenv.config

// limit users to 100 requests per 10 seconds
const ratelimit = new Ratelimit(
    {
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(100, "10s")
    }
);

export default ratelimit;