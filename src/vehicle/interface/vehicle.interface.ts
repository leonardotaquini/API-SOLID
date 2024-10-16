

export interface IVehicleRepository {
    create(vehicle: IVehicle): Promise<IVehicle>;
    findAll(): Promise<IVehicle[]>;
    findById(id: string): Promise<IVehicle | null>;
    update(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null>;
    delete(id: string): Promise<void>;
}

export interface IVehicle {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
}