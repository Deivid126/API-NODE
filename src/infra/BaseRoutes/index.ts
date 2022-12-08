import {Router} from 'express';
import UserRoutes from '../../controllers/routes'
const routes =  Router();

routes.use(UserRoutes);

export default routes;