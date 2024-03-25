import Router from 'express';
import { register, login, getCurrent, refreshAccessToken, logout, forgotPassword, resetPassword } from '../controllers/user';
import verifyAccessToken from '../middlewares/verifyToken';

const routerUser = Router();
routerUser.post("/createUser", register);
routerUser.post("/login", login);
routerUser.get('/current', verifyAccessToken, getCurrent);
routerUser.post('/refreshToken', refreshAccessToken);
routerUser.get('/logout', logout);
routerUser.get('/forgotpassword', forgotPassword);
routerUser.put('/resetpassword', resetPassword);

export default routerUser;
