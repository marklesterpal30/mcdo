import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
const apiClient = new APIClient("/cart/create");

const useCreateCart = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: any) => apiClient.create(data),
		onSuccess: () => {
			// Invalidate the cache to refetch updated carts
			queryClient.invalidateQueries({ queryKey: ["carts"] });
		},
	});
};

export default useCreateCart;
