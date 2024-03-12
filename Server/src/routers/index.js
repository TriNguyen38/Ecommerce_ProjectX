import { Router } from 'express';
import { notFound, errorHandler } from '../middlewares/errHandler';
import userRouter from './user';

const router = Router();

const initRoutes = (app) => {
    app.use('/api/user', userRouter);

    app.use(notFound);
    app.use(errorHandler);
};

export default initRoutes;
