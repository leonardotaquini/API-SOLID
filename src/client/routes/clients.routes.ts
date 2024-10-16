import { Router } from "express";
import { ClientService } from "../services/client.service";
import { ClientController } from "../controllers/client.controller";

export class ClientRoutes {


    static get routes(): Router {

        const router = Router();

        const clientController = new ClientController(new ClientService());


        router.post('/', clientController.create);
        router.get('/', clientController.findAll);
        router.get('/:id', clientController.findById);
        router.put('/:id', clientController.update);
        router.delete('/:id', clientController.delete);


        return router;
    };


};