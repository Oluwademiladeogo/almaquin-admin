import { Request, Response, NextFunction } from 'express';
import logger from '../logger.js';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, err);
  res.status(500).json({ message: 'Internal Server Error' });
};
