import { Router } from 'express';
import { getOrders } from '../controllers/order';
import { checkJWT } from '../middlewares/session';

const router = Router()

router.get('/', checkJWT, getOrders)

export { router }