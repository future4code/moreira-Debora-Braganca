import { Request, Response } from "express";
import { getAddressInfo } from "../services/getAddresInfo"


export const createAddress = async (req: Request, res: Response) => {
    try {
        const {zipcode, email, password} = req.body
        const address = await getAddressInfo(zipcode)
        if(!address){
            throw new Error ("Error on getAddress")
        }
        res.send(address)
    } catch (error) {
        res.send({message: "unexpected error"})
    }
}