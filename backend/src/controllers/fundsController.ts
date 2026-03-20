import { Request, Response } from 'express';
import Fund from '../models/Fund';

export const getFunds = async (_req: Request, res: Response): Promise<void> => {
  try {
    const funds = await Fund.find({}, { isin: 1, fundName: 1, valorisations: 1 });
    res.json(funds);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
