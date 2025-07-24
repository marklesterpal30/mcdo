import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	VStack,
} from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const CreateCategoryWithFoodForm = () => {
	const { register, handleSubmit, control } = useForm();

	const { fields, append, remove } = useFieldArray({
		control,
		name: "foods",
	});

	const mutation = useMutation({
		mutationFn: (newCategory) =>
			axios.post(
				"http://localhost:5239/api/categories/categorywithfoods",
				newCategory
			),
	});

	const onSubmit = (data) => {
		const formatted = {
			...data,
			foods:
				data.foods?.map((f) => ({
					name: f.name,
					price: parseFloat(f.price),
				})) || [],
		};

		mutation.mutate(formatted);
		console.log(formatted);
	};

	return (
		<Box as="form" onSubmit={handleSubmit(onSubmit)} p={4}>
			<FormControl mb={4}>
				<FormLabel>Category Name</FormLabel>
				<Input {...register("name")} />
			</FormControl>

			{fields.map((field, index) => (
				<VStack key={field.id} mb={4} align="start">
					<FormControl>
						<FormLabel>Food Name</FormLabel>
						<Input {...register(`foods.${index}.name`)} />
					</FormControl>
					<FormControl>
						<FormLabel>Price</FormLabel>
						<Input type="number" {...register(`foods.${index}.price`)} />
					</FormControl>
					<Button
						colorScheme="red"
						size="sm"
						onClick={() => remove(index)}
					>
						Remove
					</Button>
				</VStack>
			))}

			<Button onClick={() => append({})} mb={4}>
				Add Food
			</Button>

			<Button
				type="submit"
				colorScheme="teal"
				isLoading={mutation.isLoading}
			>
				Submit
			</Button>
		</Box>
	);
};

export default CreateCategoryWithFoodForm;
