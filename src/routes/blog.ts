import { Router } from 'express';
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from '../controllers/blog';

const router = Router()

router.get('/:id', getBlog)

router.get('/', getBlogs)

router.patch('/:id', updateBlog)

router.post('/', createBlog)

router.delete('/:id', deleteBlog)

export { router }