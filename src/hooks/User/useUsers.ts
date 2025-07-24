import APIClient from "../../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import useUserQueryStore from "../../store";
import Users from "../../entities/Users";

const apiClient = new APIClient<Users>("/users");
const useUsers = () => {
	const userQuery = useUserQueryStore((s) => s.userQuery);

	return useQuery({
		queryKey: ["users", userQuery],
		queryFn: () =>
			apiClient.getAll({
				params: {
					userId: userQuery.userId,
				},
			}),
		select: (data) => (Array.isArray(data) ? data : [data]),
	});
};

export default useUsers;
