import { NextFunction, Request ,Response} from "express";
import { NotFoundError } from "./errors";

export default function notFound(req: Request, res: Response, next: NextFunction) {
    next(new NotFoundError(`Route ${req.originalUrl} not found`));
}