import Router from 'express';
import { register, login, getCurrent, refreshAccessToken, logout } from '../controllers/user';
import verifyAccessToken from '../middlewares/verifyToken';

const routerUser = Router();
routerUser.post("/createUser", register);
routerUser.post("/login", login);
routerUser.get('/current', verifyAccessToken, getCurrent);
routerUser.post('/refreshToken', refreshAccessToken);
routerUser.get('/logout', logout);

export default routerUser;
