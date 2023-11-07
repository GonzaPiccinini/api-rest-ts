import { Request, Response } from "express";
import { handleHTTPError } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_GET_BLOG')
    }
}

const getBlogs = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_GET_BLOG')
    }
}

const updateBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_UPDATE_BLOG')
    }
}

const createBlog = (req: Request, res: Response) => {
    try {
        res.send(req.body)
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_CREATE_BLOG')
    }
}

const deleteBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_DELETE_BLOG')
    }
}

export {
    getBlog,
    getBlogs,
    updateBlog,
    createBlog,
    deleteBlog
}