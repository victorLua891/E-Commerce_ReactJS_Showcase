import express from 'express';
import { loginUser, registerUser, adminLogin, loginVendor, registerVendor} from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.post('/registeruser', registerUser);
userRouter.post('/loginuser', loginUser);
userRouter.post('/registervendor', registerVendor);
userRouter.post('/loginvendor', loginVendor);
userRouter.post('/admin', adminLogin);

export default userRouter;
