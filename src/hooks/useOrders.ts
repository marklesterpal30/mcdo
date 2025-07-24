import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
export interface Food {
	id: number;
	name: string;
}

export interface FoodOrder {
	orderId: number;
	foodId: number;
	food: Food;
}

export interface Order {
	id: number;
	orderPrice: number;
	foodOrders: FoodOrder[];
}

export interface User {
	id: number;
	name: string;
	orders: Order[];
}
const apiClient = new APIClient<User>("/order/GetOrders");
const useOrders = () => {
	return useQuery({
		queryKey: ["orders"],
		queryFn: () => apiClient.get(),
	});
};

export default useOrders;
