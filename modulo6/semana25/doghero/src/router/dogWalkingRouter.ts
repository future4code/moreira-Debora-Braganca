import express from 'express';
import { IdGenerator } from '../services/IdGenerator';
import DogWalkingController from '../controller/DogWalkingController';
import DogWalkingBusiness from '../business/DogWalkingBusiness';
import DogWalkingDatabase from '../data/DogWalkingDatabase';

export const dogWalkingRouter = express.Router();

const dogWalkingBusiness = new DogWalkingBusiness(
    new DogWalkingDatabase(),
    new IdGenerator()
)

const dogWalkingController = new DogWalkingController(dogWalkingBusiness)


dogWalkingRouter.get("/pets", dogWalkingController.getPetId)
dogWalkingRouter.get("/walks", dogWalkingController.getWalks)
dogWalkingRouter.post("/walks/create", dogWalkingController.createDogWalking)