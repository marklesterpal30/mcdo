import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient("/foods");
const useCreateFood = () => {
	return useMutation({
		mutationFn: (data: any) => apiClient.create(data),
	});
};

export default useCreateFood;
