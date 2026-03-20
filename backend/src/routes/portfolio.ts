import { Router } from 'express';
import { getPortfolioSummary, getPortfolioHistory } from '../controllers/portfolioController';

const router = Router();

router.get('/summary', getPortfolioSummary);
router.get('/history', getPortfolioHistory);

export default router;
