export interface IClientRepository {
    create(client: IClient): Promise<IClient>;
    findAll(): Promise<IClient[]>;
    findById(id: string): Promise<IClient | null>;
    update(id: string, client: Partial<IClient>): Promise<IClient | null>;
    delete(id: string): Promise<void>;
}

export interface IClient {
    id: string;
    name: string;
    email: string;
    phone: string;
}