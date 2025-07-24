import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../../services/apiClient";
import Users from "../../entities/Users";

const apiClient = new APIClient("/users");

const useUpdateUser = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (user: Users) => apiClient.update(user),
		onSuccess: () => queryClient.invalidateQueries(["users"]),
	});
};
export default useUpdateUser;
