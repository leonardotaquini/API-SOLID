import { Request, Response } from "express";
import { DiscountVehicleService } from "../services/discountVehicle.service";



export class VehiclesController {
    constructor(private readonly vehicleService: DiscountVehicleService) { };

    handleErrors(error: any, res: Response) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: "Unknown error occurred" });
        };
    };


    createVehicle = async (req: Request, res: Response) => {
        try {
            const vehicle = await this.vehicleService.create(req.body);
            res.status(201).json(vehicle);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    findAllVehicles = async (req: Request, res: Response) => {
        try {
            const vehicles = await this.vehicleService.findAll();
            res.status(200).json(vehicles);
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    getVehicleById = async (req: Request, res: Response) => {
        try {
            const vehicle = await this.vehicleService.findById(req.params.id);
            if (vehicle) {
                res.status(200).json(vehicle);
            } else {
                res.status(404).json({ error: "Vehicle not found" });
            };
        } catch (error) {
            this.handleErrors(error, res);
        };
    };


    updateVehicle = async (req: Request, res: Response) => {
        try {
            const vehicle = await this.vehicleService.update(req.params.id, req.body);
            if (vehicle) {
                res.status(200).json(vehicle);
            } else {
                res.status(404).json({ error: "Vehicle not found" });
            }
        } catch (error) {
            this.handleErrors(error, res);
        };
    };


    deleteVehicle = async (req: Request, res: Response) => {
        try {
            await this.vehicleService.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            this.handleErrors(error, res);
        };
    };

    discountVehicle = async (req: Request, res: Response) => {
        try {
            const vehicle = await this.vehicleService.aplyDiscount(req.params.id);
            if (vehicle) {
                res.status(200).json(vehicle);
            } else {
                res.status(404).json({ error: "Vehicle not found" });
            }
        } catch (error) {
            this.handleErrors(error, res);
        };
    };


};