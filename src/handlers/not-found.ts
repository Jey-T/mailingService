import { Request } from "express";
import { NotFoundError } from "./errors";

export default function notFound(req: Request) {
    throw new NotFoundError(`Route ${req.originalUrl} not found`);
}