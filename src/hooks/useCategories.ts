import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Categories from "../entities/Categories";
import useFoodQueryStore from "../foodstore";

const apiClient = new APIClient<Categories>("/categories");

const useCategories = () => {
	return useQuery({
		queryKey: ["categories"],
		queryFn: () => apiClient.getAll(),
		select: (data) => (Array.isArray(data) ? data : [data]),
	});
};

export default useCategories;
