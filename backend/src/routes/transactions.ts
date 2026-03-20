import { Router } from 'express';
import { getTransactions, createTransaction } from '../controllers/transactionsController';
import { validateTransaction } from '../middleware/validate';

const router = Router();

router.get('/', getTransactions);
router.post('/', validateTransaction, createTransaction);

export default router;
