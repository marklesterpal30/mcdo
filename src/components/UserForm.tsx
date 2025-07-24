import { useForm } from "react-hook-form";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Stack,
} from "@chakra-ui/react";
import useCreateUser from "../hooks/User/useCreateUser";

export type FormData = {
	name: string;
	email: string;
	phone: string;
};

const UserForm = () => {
	const { register, handleSubmit } = useForm<FormData>();
	const createUser = useCreateUser();

	const onSubmit = (data: FormData) => {
		console.log("Form Submitted:", data);
		createUser.mutate(data);
	};

	return (
		<Box maxW="md" mx="auto" mt={6}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={4}>
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input placeholder="Enter name" {...register("name")} />
					</FormControl>

					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							placeholder="Enter email"
							{...register("email")}
						/>
					</FormControl>

					<FormControl>
						<FormLabel>Phone</FormLabel>
						<Input
							type="tel"
							placeholder="Enter phone number"
							{...register("phone")}
						/>
					</FormControl>

					<Button type="submit" colorScheme="blue" width="full">
						Submit
					</Button>
				</Stack>
			</form>
		</Box>
	);
};

export default UserForm;
