import { Router } from 'express';
import { getFunds } from '../controllers/fundsController';

const router = Router();

router.get('/', getFunds);

export default router;
