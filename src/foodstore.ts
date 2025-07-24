import { create } from "zustand";

interface FoodQuery {
	categoryId?: number;
}

interface FoodQueryStore {
	foodQuery: FoodQuery;
	setCategoryId: (categoryId?: number) => void;
}

const useFoodQueryStore = create<FoodQueryStore>((set) => ({
	foodQuery: { categoryId: 1 },
	setCategoryId: (categoryId) =>
		set((store) => ({ foodQuery: { ...store.foodQuery, categoryId } })),
}));

export default useFoodQueryStore;
