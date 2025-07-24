import axios, { Axios, AxiosRequestConfig } from "axios";
import Users from "../entities/Users";
import { FormData } from "../components/UserForm";

const axiosInstance = axios.create({
	baseURL: "http://localhost:5239/api",
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig): Promise<T[]> => {
		return axiosInstance
			.get<T[]>(this.endpoint, config)
			.then((res) => res.data);
	};

	get = (id?: number) => {
		const url = id !== undefined ? `${this.endpoint}/${id}` : this.endpoint;
		return axiosInstance.get<T>(url).then((res) => res.data);
	};

	delete = (id: number) => {
		return axiosInstance
			.delete(this.endpoint + "/" + id)
			.then((res) => res.data);
	};

	update = (user: Users) => {
		return axiosInstance
			.put(this.endpoint + "/" + user.id, user)
			.then((res) => res.data);
	};

	create = (data: any) => {
		return axiosInstance.post(this.endpoint, data).then((res) => res.data);
	};
}

export default APIClient;
