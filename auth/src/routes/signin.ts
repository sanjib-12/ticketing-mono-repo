import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt  from "jsonwebtoken";

import { Password } from "../services/password";
import { User } from "../models/user";
import { validateRequest, BadRequestError } from "@sbmytickets/common";

const router = express.Router();

router.post(
   "/api/users/signin",
   [
      // this it the auth middleware which handles the
      body("email") // incoming request and check whether is contains
         .isEmail() // desire fields.
         .withMessage("Email must be valid"),
      body("password")
         .trim()
         .notEmpty()
         .withMessage("You must supply a password"),
   ],
   validateRequest,
   async (req: Request, res: Response) => {
      // here we are annotating req and res with their respective annotation
      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (!existingUser) {
         throw new BadRequestError("Invalid Credentials");
      }

      const passwordsMatch = await Password.compare(
         existingUser.password,
         password
      );

      if (!passwordsMatch) {
         throw new BadRequestError("Invalid Credentials");
      }

      //Generate JWT
      const userJwt = jwt.sign(
         {
            id: existingUser.id,
            email: existingUser.email,
         },
         process.env.JWT_KEY! // the ! will tell typescript that everything is ok in this code.
      );

      // store it on session object
      req.session = {
         jwt: userJwt,
      };

      res.status(200).send(existingUser);
   }
);

export { router as signinRouter };
