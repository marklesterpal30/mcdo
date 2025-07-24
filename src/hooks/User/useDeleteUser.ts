import { useQueryClient, useMutation } from "@tanstack/react-query";
import APIClient from "../../services/apiClient";
import { useNavigate } from "react-router-dom";

const apiClient = new APIClient("/users");

const useDeleteUser = () => {
	const queryClient = useQueryClient(); // ✅ This gets the app's query client
	const navigate = useNavigate();

	return useMutation({
		mutationFn: (userId: number) => apiClient.delete(userId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			navigate("/");
		},
	});
};

export default useDeleteUser;
