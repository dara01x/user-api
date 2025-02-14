import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

export const apiClient = axios.create({
    baseURL: process.env.EXTERNAL_API_URL, 
    headers:{
        "Content-Type": "application/json"
    },
});