import express from 'express';
import  signup, { google }  from '../controllers/auth.controller.js';
import { signin } from '../controllers/auth.controller.js';
import { signOut } from '../controllers/auth.controller.js';

const authRouter=express.Router();

authRouter.post("/signup",signup);
authRouter.post("/signin",signin);
authRouter.post("/google",google);
authRouter.get('/signout',signOut);

export default authRouter;