import {
	Box,
	Button,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React from "react";
import useCreateCategory from "../hooks/useCreateCategory";
import useOrders from "../hooks/useOrders";

interface Category {
	name: string;
}
const CreateCategory = () => {
	const { register, handleSubmit } = useForm<Category>();
	const createCategory = useCreateCategory();

	const onSubmit = (data: Category) => {
		createCategory.mutate(data);
		console.log(data);
	};

	return (
		<Box>
			<Box w="444px">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading marginBottom={4}>Create Category</Heading>
					<FormLabel fontSize="lg">Category Name</FormLabel>
					<Input variant="filled" {...register("name")} />
					<Button type="submit" marginTop={2} bg="yellow.300" width="full">
						Submit
					</Button>
				</form>
			</Box>
		</Box>
	);
};

export default CreateCategory;
