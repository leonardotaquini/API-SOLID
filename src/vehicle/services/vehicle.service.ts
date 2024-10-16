import { MongoVehicles } from "../../database/mongoVehicles";
import { IVehicle, IVehicleRepository } from "../interface/vehicle.interface";
import { VehicleRepository } from "../repository/vehicles.repository";



export class VehicleService {

    constructor(
        private vehicleRepository: IVehicleRepository = new VehicleRepository(new MongoVehicles())
    ) { };

    async create(vehicle: IVehicle): Promise<IVehicle> {
        return this.vehicleRepository.create(vehicle);
    };

    async findAll(): Promise<IVehicle[]> {
        return this.vehicleRepository.findAll();
    };

    async findById(id: string): Promise<IVehicle | null> {
        return this.vehicleRepository.findById(id);

    };

    async update(id: string, vehicle: IVehicle): Promise<IVehicle | null> {
        return this.vehicleRepository.update(id, vehicle);
    };

    async delete(id: string): Promise<void> {
        return this.vehicleRepository.delete(id);
    };

};