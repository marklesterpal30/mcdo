import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

interface CreateOrderRequestDto {
	foods?: {
		foodId: number;
	}[];
}

const apiClient = new APIClient<CreateOrderRequestDto>("/order/CreateOrder");
const useCreateOrder = () => {
	return useMutation({
		mutationFn: (data: CreateOrderRequestDto) => apiClient.create(data),
	});
};

export default useCreateOrder;
