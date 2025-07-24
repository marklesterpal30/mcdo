import useUsers from "./useUsers";

const useViewUser = (userId: number) => {
	const { data: users } = useUsers();
	return users?.find((user) => user.id === userId);
};

export default useViewUser;
