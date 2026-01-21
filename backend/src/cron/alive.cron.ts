import cron from "node-cron";
import axios from "axios";
import logger from "../utils/logger.util";

// External URL of the server to keep it awake (Render spins down free instances after 15m of inactivity)

