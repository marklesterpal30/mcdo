import { Link, useParams } from "react-router-dom";
import {
	Button,
	Flex,
	Input,
	InputGroup,
	InputLeftAddon,
	Stack,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useUpdateUser from "../hooks/User/useUpdateUser";
import { useForm } from "react-hook-form";
import Users from "../entities/Users";
import useViewUser from "../hooks/User/useViewuser";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
	const { userId } = useParams();
	const user = useViewUser(parseInt(userId!)); // Make sure userId is not null
	const updateUser = useUpdateUser();

	const { register, handleSubmit } = useForm<Users>();

	const navigate = useNavigate();
	const onSubmit = (data: Users) => {
		if (!user) return;
		updateUser.mutate(
			{ ...data, id: user.id },
			{
				onSuccess: () => {
					navigate(`/users/${user.id}`);
				},
			}
		);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={4} paddingTop={4}>
				<InputGroup>
					<InputLeftAddon>Name</InputLeftAddon>
					<Input defaultValue={user?.name} {...register("name")} />
				</InputGroup>

				<InputGroup>
					<InputLeftAddon>Phone</InputLeftAddon>
					<Input defaultValue={user?.phone} {...register("phone")} />
				</InputGroup>

				<InputGroup>
					<InputLeftAddon>Email</InputLeftAddon>
					<Input defaultValue={user?.email} {...register("email")} />
				</InputGroup>

				<Flex columnGap={2} justify="flex-end">
					<Button as={Link} to={`/users/${user?.id}`} colorScheme="gray">
						Cancel
					</Button>
					<Button
						type="submit"
						bg="green.500"
						_hover={{ bg: "green.600" }}
						color="white"
						isLoading={updateUser.isLoading}
					>
						Save Changes
					</Button>
				</Flex>
			</Stack>
		</form>
	);
};

export default EditUser;
