import { NextFunction, Request, Response } from 'express';
import { AppError } from '../handlers/errors';

export const errorHandler = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = 500;
    let message = 'Internal Server Error';

    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }

    return next(res.status(statusCode).json({
        message
    }));
};