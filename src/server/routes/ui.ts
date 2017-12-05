import { Router } from 'express';
import uiRootController from '../controllers/uiControllers';

const router = Router();

router.get('*', uiRootController);

export default router;
