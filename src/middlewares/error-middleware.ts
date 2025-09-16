import { Request, Response, NextFunction } from 'express';
import { AppError } from '../handlers/errors';

export const errorHandler = (
    err: Error | AppError,
    _: Request,
    res: Response,
) => {

    let statusCode = 500;
    let message = 'Internal Server Error';

    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }

    res.status(statusCode).json({
        error: message,
    });
};