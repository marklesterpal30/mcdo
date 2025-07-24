import { create } from "zustand";

interface UserQuery {
	userId?: number;
}

interface UserQueryStore {
	userQuery: UserQuery;
	setUserId: (userId?: number) => void;
}

const useUserQueryStore = create<UserQueryStore>((set) => ({
	userQuery: {},
	setUserId: (userId) => set((store) => ({ userQuery: { userId } })),
}));

export default useUserQueryStore;
