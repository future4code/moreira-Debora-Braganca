import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

type authenticationData = {id: string}

export class Authenticator {
   public generateToken = (
      input: authenticationData
   ): string => {
      return jwt.sign(
         input,
         process.env.JWT_KEY as string,
         {
            expiresIn: "30min"
         }
      )
   }

   public getTokenData = (
      token: string
   ): authenticationData => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as authenticationData
   }
}