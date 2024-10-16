import { IClient, IClientRepository } from "../client/interfaces/client.interface";


const MongoClients: IClient[] = [
    {
        id: "1",
        name: "John",
        email: "Jhon@jhon.com",
        phone: "123456789",
    },
    {
        id: "2",
        name: "Doe",
        email: "doe@doe.com",
        phone: "987654321",
    },
    {
        id: "3",
        name: "Jane",
        email: "jane@jane.com",
        phone: "123456789",
    },
];


export class MongoClient implements IClientRepository {
    async create(client: IClient): Promise<IClient> {
        const newClient = {
            ...client,
            id: String(MongoClients.length + 1),
        };
        MongoClients.push(newClient);
        return newClient;
    };

    async findAll(): Promise<IClient[]> {
        return MongoClients;
    };

    async findById(id: string): Promise<IClient | null> {
        const client = MongoClients.find((client) => client.id === id);
        return client || null;
    };

    async update(id: string, client: IClient): Promise<IClient | null> {
        const index = MongoClients.findIndex((client) => client.id === id);
        if (index < 0) {
            return null;
        }
        const updatedClient = {
            ...client,
            id,
        };
        MongoClients[index] = updatedClient;
        return updatedClient;
    };

    async delete(id: string): Promise<void> {
        const index = MongoClients.findIndex((client) => client.id === id);
        if (index < 0) {
            return;
        }
        MongoClients.splice(index, 1);
    };

};