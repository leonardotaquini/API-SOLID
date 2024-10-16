import { IVehicle } from "../interface/vehicle.interface";
import { VehicleService } from "./vehicle.service";


export class DiscountVehicleService extends VehicleService {
    constructor() {
        super();
    };

    async aplyDiscount(idVehicle: string): Promise<IVehicle | null> {
        const vehicle = await this.findById(idVehicle);
        if (!vehicle) {
            throw new Error("Vehicle not found");
        }
        vehicle.price = vehicle.price * 0.9;
        return vehicle;

    }

};