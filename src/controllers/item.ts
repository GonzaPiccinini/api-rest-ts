import { Request, Response } from "express";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";
import { handleHTTPError } from "../utils/error.handle";

const getItem = async (req: Request, res: Response) => {
    try {
        const responseCar = await getCar(req.params.id)
        const response = responseCar ? {data: responseCar, statusCode: 200} : {data: 'CAR NOT FOUND', statusCode: 404}
        res.status(response.statusCode).send(response.data)
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const responseCars = await getCars()
        res.status(200).send({responseCars})
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_GET_ITEM')
    }
}

const updateItem = async (req: Request, res: Response) => {
    try {
        const responseCar = await updateCar(req.params.id, req.body)
        res.status(200).send({responseCar}) 
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_UPDATE_ITEMS')
    }
}

const createItem = async (req: Request, res: Response) => {
    try {   
        const responseCar = await insertCar(req.body)
        res.status(201).send(responseCar)
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_CREATE_ITEM', error)
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const responseCar = await deleteCar(req.params.id)
        res.status(200).send({responseCar})
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_DELETE_ITEM')
    }
}

export {
    getItem,
    getItems,
    updateItem,
    createItem,
    deleteItem
}