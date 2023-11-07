import { Router } from 'express';
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/item';
import { logMiddleware } from '../middlewares/log';

const router = Router()

router.get('/:id', getItem)

router.get('/', getItems)

router.patch('/:id', updateItem)

router.post('/', logMiddleware, createItem)

router.delete('/:id', deleteItem)

export { router }