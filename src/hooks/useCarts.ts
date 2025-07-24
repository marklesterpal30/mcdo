import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

export interface Food {
	id: number;
	name: string;
	price: number;
}

export interface Cart {
	id: number;
	foodId: number;
	food: Food;
	quantity: number;
	totalPrice: number;
}
const apiClient = new APIClient<Cart>("/cart/getCart");
const useCarts = () => {
	return useQuery({
		queryKey: ["carts"],
		queryFn: () => apiClient.getAll(),
	});
};

export default useCarts;
