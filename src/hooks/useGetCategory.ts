import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

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
const apiClient = new APIClient<Category>("/categories");

const useGetCategory = (categoryId: number) => {
	return useQuery({
		queryKey: ["category"],
		queryFn: () => apiClient.get<Category>(categoryId),
	});
};

export default useGetCategory;
