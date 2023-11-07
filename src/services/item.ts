import { Car } from "../interfaces/car"
import { ItemModel } from "../models/item"

const insertCar = async (car: Car) => {  
    const responseCar = await ItemModel.create(car)   
    return responseCar
}

const getCars = async () => {
    const responseCars = await ItemModel.find({})
    return responseCars
}

const getCar = async (id: string) => {
    const responseCar = await ItemModel.findOne({"_id": id})
    return responseCar
}

const updateCar = async (id: string, car: Car) => {
    const responseCar = await ItemModel.findOneAndUpdate(
        {"_id": id}, 
        car,
        {new: true}
    )
    return responseCar
}

const deleteCar = async (id: string) => {
    const responseCar = await ItemModel.findOneAndDelete({"_id": id})
    return responseCar
}

export { insertCar, getCars, getCar, updateCar, deleteCar }