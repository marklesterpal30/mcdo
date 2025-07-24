import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient("/categories");
const useDeleteCategory = () => {
	return useMutation({
		mutationFn: (userId: number) => apiClient.delete(userId),
	});
};

export default useDeleteCategory;
