import { useMutation, useQueryClient } from "@tanstack/react-query";

import APIClient from "../../services/apiClient";
import { FormData } from "../../components/UserForm";
import useCreateCategory from "../useCreateCategory";

const apiClient = new APIClient("/users");

const useCreateUser = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (user: FormData) => apiClient.create(user),
		onSuccess: () => queryClient.invalidateQueries(["users"]),
	});
};

export default useCreateUser;
