import {
	Box,
	Button,
	FormLabel,
	Heading,
	Input,
	Select,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import useCreateFood from "../hooks/useCreateFood";
import useCategories from "../hooks/useCategories";

interface Food {
	name: string;
	price: number;
	categoryId: number;
}

const CreateFoodForm = () => {
	const createFood = useCreateFood();
	const { data: categories } = useCategories();
	if (!categories) {
		return null;
	}

	const { register, handleSubmit } = useForm<Food>();

	const onsubmit = (data: Food) => {
		createFood.mutate(data);
	};
	return (
		<Box w="444px">
			<Heading>Create New Food</Heading>
			<form onSubmit={handleSubmit(onsubmit)}>
				<FormLabel mt={2}>Category</FormLabel>
				<Select {...register("categoryId", { valueAsNumber: true })}>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</Select>
				<FormLabel>Name</FormLabel>
				<Input {...register("name")} />
				<FormLabel marginTop={2}>Price</FormLabel>
				<Input
					type="number"
					{...register("price", { valueAsNumber: true })}
				/>
				<Button w="full" marginTop={3} type="submit" bg="green.400">
					Add Food
				</Button>
			</form>
		</Box>
	);
};

export default CreateFoodForm;
