import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
dotenv.config();
// we give limits  here as 10 requ for 20sec it acts as a broker
 const reatelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 m"),     // Number of requests, time window 
});

export default reatelimit;