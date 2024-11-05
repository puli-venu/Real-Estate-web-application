import express from 'express'
import test from '../controllers/user.controller.js';
import { updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { deleteUser } from '../controllers/user.controller.js';
import { getUserListings } from '../controllers/user.controller.js';

const userRouter=express.Router();

userRouter.get('/test',test);
userRouter.post('/update/:id',verifyToken,updateUser)
userRouter.delete('/delete/:id',verifyToken,deleteUser)
userRouter.get('/listings/:id',verifyToken,getUserListings)

export default userRouter;