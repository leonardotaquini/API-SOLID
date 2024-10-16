import { Router } from "express";
import { VehiclesController } from "../controller/vehicles.controller";
import { DiscountVehicleService } from "../services/discountVehicle.service";



export class VehicleRoutes {


    static get routes(): Router {

        const router = Router();
        const vehicleController = new VehiclesController(new DiscountVehicleService());

        router.post('/', vehicleController.createVehicle);
        router.get('/', vehicleController.findAllVehicles);
        router.get('/:id', vehicleController.getVehicleById);
        router.put('/:id', vehicleController.updateVehicle);
        router.delete('/:id', vehicleController.deleteVehicle);
        router.get('/discount/:id', vehicleController.discountVehicle);


        return router;
    };


};