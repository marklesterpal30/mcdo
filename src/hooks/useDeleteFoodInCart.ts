import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient("/cart/DeleteFoodInCart");
const useDeleteFoodInCart = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: number) => apiClient.delete(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["carts"] }),
	});
};

export default useDeleteFoodInCart;
