
import { Request, Response, Router } from 'express';
import { ClientRoutes } from './client/routes/clients.routes';
import { VehicleRoutes } from './vehicle/routes/vehicle.routes';


export class AppRouter {
     static get routes(): Router {
          const router = Router();

          router.get('/', (req: Request, res: Response) => {
               res.send('Welcome to the SOLID-API');
          });
          router.use('/client', ClientRoutes.routes);
          router.use('/vehicle', VehicleRoutes.routes);

          return router;
     };

};