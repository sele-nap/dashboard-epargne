import { Request, Response, NextFunction } from 'express';
import { transactionSchema } from '../validators/transactionValidator';

export const validateTransaction = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = transactionSchema.validate(req.body, { abortEarly: false });
  if (error) {
    res.status(400).json({
      message: 'Validation error',
      details: error.details.map((d) => d.message),
    });
    return;
  }
  next();
};
