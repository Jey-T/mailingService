import "dotenv/config";
import express from "express";
import sendMail from "./handlers/send-mail";
import { environmentSchema } from "./schemas/environment";
import healthCheck from "./handlers/health-check";
import { errorHandler } from "./middlewares/error-middleware";
import gracefulShutdown from "./handlers/shutdown";
import { createServer } from "http";
import cors from "cors";

const parsedEnv = environmentSchema.safeParse(process.env);
if (!parsedEnv.success) {
  console.error("Invalid environment variables");
  process.exit(1);
}

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.get("/health", healthCheck);
app.post("/send-mail", sendMail);

server.listen(4000, () => {
  console.log("Mailing service is running on port 4000");
});

process.on('SIGTERM', () => gracefulShutdown(server, 'SIGTERM'));
process.on('SIGINT', () => gracefulShutdown(server, 'SIGINT'));