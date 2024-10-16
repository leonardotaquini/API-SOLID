import { IVehicle, IVehicleRepository } from "../vehicle/interface/vehicle.interface";


const dataMongo: IVehicle[] = [
    {
        id: '1',
        model: 'Fusca',
        brand: 'Volkswagen',
        year: 1969,
        price: 5000
    },
    {
        id: '2',
        model: 'Civic',
        brand: 'Honda',
        year: 2008,
        price: 30000
    },
    {
        id: '3',
        model: 'Corolla',
        brand: 'Toyota',
        year: 2019,
        price: 100000
    }
];




export class MongoVehicles implements IVehicleRepository {

    async create(vehicle: IVehicle): Promise<IVehicle> {
        const newVehicle = {
            ...vehicle,
            id: String(dataMongo.length + 1)
        };
        dataMongo.push(newVehicle);
        return newVehicle;
    };

    async findAll(): Promise<IVehicle[]> {
        return dataMongo;
    };

    async findById(id: string): Promise<IVehicle | null> {
        const vehicle = dataMongo.find(vehicle => vehicle.id === id);
        return vehicle || null;
    };

    async update(id: string, vehicle: IVehicle): Promise<IVehicle | null> {
        const index = dataMongo.findIndex(vehicle => vehicle.id === id);
        if (index < 0) {
            return null;
        }
        const updatedVehicle = {
            ...vehicle,
            id
        };
        dataMongo[index] = updatedVehicle;
        return updatedVehicle;
    };

    async delete(id: string): Promise<void> {
        const index = dataMongo.findIndex(vehicle => vehicle.id === id);
        if (index < 0) {
            return;
        }
        dataMongo.splice(index, 1);
    };
}