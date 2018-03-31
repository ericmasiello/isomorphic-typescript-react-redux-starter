import { Router } from 'express';
import { proxyController } from '../controllers/apiControllers';

const router = Router();

router.get('*', proxyController);

export default router;
