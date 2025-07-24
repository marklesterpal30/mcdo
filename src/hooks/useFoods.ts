import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import useFoodQueryStore from "../foodstore";

interface Category {
	id: number;
	name: string;
	foods: Food[];
}

interface Food {
	id: number;
	name: string;
	price: number;
	categoryId: number;
}
const apiClient = new APIClient<Category>("/foods");

const useFoods = () => {
	const foodQuery = useFoodQueryStore((s) => s.foodQuery);

	return useQuery({
		queryKey: ["foods", foodQuery],
		queryFn: () => apiClient.get(foodQuery.categoryId),
	});
};

export default useFoods;
