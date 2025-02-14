import { apiClient } from "../config/apiConfig";
import { User } from "../models";

export class UserService {
    public async getUsers(): Promise<User[]> {
        const response = await apiClient.get<User[]>('/users/all');
        return response.data;
    }

    public async createUser(user: User): Promise<User> {
        const response = await apiClient.post<User>('/users', user);
        return response.data;
    }

    public async getUser(id: number): Promise<User> {
        const response = await apiClient.get<User>(`/users/${id}`);
        return response.data;
    }

  
    public async updateUser(user: Partial<User> ): Promise<User> {
        const response = await apiClient.put<User>(`/users/${user.id}`, user);
        return response.data;
    }


    public async deleteUser(id: number): Promise<void> {
        await apiClient.delete(`/users/${id}`);
    }
}