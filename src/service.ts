import "dotenv/config";
import express from "express";
import sendMail from "./handlers/send-mail";
import { environmentSchema } from "./schemas/environment";
import healthCheck from "./handlers/health-check";
import notFound from "./handlers/not-found";
import { errorHandler } from "./middlewares/error-middleware";
import gracefulShutdown from "./handlers/shutdown";
import {createServer} from "http";

const parsedEnv = environmentSchema.safeParse(process.env);
if (!parsedEnv.success) {
  console.error("Invalid environment variables");
  process.exit(1);
}

const app = express();
const server = createServer(app);

app.use(express.json());

app.get("/health", healthCheck);
app.post("/send-mail", sendMail);
app.all("*", notFound);
app.use(errorHandler);

server.listen(4000, () => {
  console.log("Mailing service is running on port 4000");
});

process.on('SIGTERM', () => gracefulShutdown(server, 'SIGTERM'));
process.on('SIGINT', () => gracefulShutdown(server, 'SIGINT'));