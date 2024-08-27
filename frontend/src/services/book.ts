import { book } from "../types/bookTypes";
import axios from "axios";

interface ApiResponse<T> {
    data: T;
    message?: string;
    status?: number;
}

const url = "http://localhost:5000/api/bookStore"

const BookApi = {
    getAll: async (): Promise<ApiResponse<book[]>> => {
        try {
            const response = await axios.get("http://localhost:5000/api/bookStore/getAll")
            return {
                data: response.data
            }
        } catch (err) {
            throw err
        }
    },
    create: async (title: string, author: string): Promise<ApiResponse<book>> => {
        try {
            const response = await axios.post("http://localhost:5000/api/bookStore/create", {
                title: title,
                author: author
            })
            return {
                data: response.data
            }
        } catch (err) {
            throw err
        }
    },
    delete: async (id: string): Promise<ApiResponse<book>> => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/bookStore/delete/${id}`)
            return {
                data: response.data
            }
        }catch (err) {
            throw err
        }
    },
    getOne: async (id: string): Promise<ApiResponse<book>> => {
        try {
            const response = await axios.get(`http://localhost:5000/api/bookStore/getOne/${id}`)
            return {
                data: response.data?.bookFound
            }
        }
        catch (err){
            throw err;
        }
    },
    update: async (id: string, title: string, author: string): Promise<ApiResponse<book>> => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/bookStore/update/${id}`, {
                title, author
            })
            return {
                data: response.data
            }
        }catch (err) {
            throw err;
        }
    }
}

export default BookApi;