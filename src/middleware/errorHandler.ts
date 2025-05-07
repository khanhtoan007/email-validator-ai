import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../types';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);

  const errorResponse: ErrorResponse = {
    error: err.name,
    message: err.message || 'Internal server error',
    statusCode: 500
  };

  res.status(errorResponse.statusCode).json(errorResponse);
}; 