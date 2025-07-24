import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

interface Category {
	name: string;
}

const apiClient = new APIClient("/categories");
const useCreateCategory = () => {
	return useMutation({
		mutationFn: (data: Category) => apiClient.create(data),
	});
};

export default useCreateCategory;
