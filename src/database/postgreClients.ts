import { IClient, IClientRepository } from "../client/interfaces/client.interface";

const PostgresClients: IClient[] = [
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

export class PostgresClient implements IClientRepository {
    async create(client: IClient): Promise<IClient> {
        const newClient = {
            ...client,
            id: String(PostgresClients.length + 1),
        };
        PostgresClients.push(newClient);
        return newClient;
    };

    async findAll(): Promise<IClient[]> {
        return PostgresClients;
    };

    async findById(id: string): Promise<IClient | null> {
        const client = PostgresClients.find((client) => client.id === id);
        return client || null;
    };

    async update(id: string, client: IClient): Promise<IClient | null> {
        const index = PostgresClients.findIndex((client) => client.id === id);
        if (index < 0) {
            return null;
        }
        const updatedClient = {
            ...client,
            id,
        };
        PostgresClients[index] = updatedClient;
        return updatedClient;
    };

    async delete(id: string): Promise<void> {
        const index = PostgresClients.findIndex((client) => client.id === id);
        if (index < 0) {
            return;
        };
        PostgresClients.splice(index, 1);
    };
};
