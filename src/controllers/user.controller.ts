import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
    
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }
   
    public async getAllUsers(req: Request, res: Response) {
        try {
        const users = await this.userService.getUsers();
        res.json(users);
        } catch (error) {
        res.status(500).json({ error: "Failed to retrieve users" });
        }
    }

    public async getUserById(req: Request, res: Response) {
        try {
        const userId = Number(req.params.id);
        const user = await this.userService.getUser(userId);
        res.json(user);
        } catch (error) {
        res.status(500).json({ error: "Failed to retrieve user" });
        }
    }

    public async createUser(req: Request, res: Response) {
        try {
        const newUser = await this.userService.createUser(req.body);
        res.status(201).json(newUser);
        } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
        }
    }

    public async updateUser(req: Request, res: Response) {
        try {
        const user = req.body;
        const updatedUser = await this.userService.updateUser(user);
        res.json(updatedUser);
        } catch (error) {
        res.status(500).json({ error: "Failed to update user" });
        }
    }

    public async deleteUser(req: Request, res: Response) {
        try {
        const userId = Number(req.params.id);
        await this.userService.deleteUser(userId);
        res.json({ message: "User deleted" });
        } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
        }
    }
}
