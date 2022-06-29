import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { authenticationData } from '../types';

export class Authenticator {
    generateToken = (payload: authenticationData) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {expiresIn: "5min"}
        )
    }

    getTokenData = (token: string) => {
        try {
            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as authenticationData
            return tokenData
        } catch (error) {
            console.log(error)
            return null
        }
    }
}