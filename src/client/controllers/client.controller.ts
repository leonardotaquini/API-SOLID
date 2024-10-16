import { Request, Response } from 'express';
import { ClientService } from '../services/client.service';



export class ClientController {
    constructor(private readonly clientService: ClientService) { };

    handleErrors(error: any, res: Response) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: "Unknown error occurred" });
        };
    };

    create = async (req: Request, res: Response) => {
        try {
            const client = await this.clientService.create(req.body);
            res.status(201).json(client);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    findAll = async (req: Request, res: Response) => {
        try {
            const clients = await this.clientService.findAll();
            res.status(200).json(clients);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    findById = async (req: Request, res: Response) => {
        try {
            const client = await this.clientService.findById(req.params.id);
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({ error: "Client not found" });
            };
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    update = async (req: Request, res: Response) => {
        try {
            const client = await this.clientService.update(req.params.id, req.body);
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({ error: "Client not found" });
            }
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    delete = async (req: Request, res: Response) => {
        try {
            await this.clientService.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

};
