import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import useViweUser from "../hooks/User/useViewuser";
import useDeleteUser from "../hooks/User/useDeleteUser";

const UserDetails = () => {
	const { userId } = useParams();

	const user = useViweUser(parseInt(userId!));

	const delelteUser = useDeleteUser();

	const handleDelete = (userId: number | undefined) => {
		delelteUser.mutate(userId!);
	};

	return (
		<Box>
			<Text fontWeight="semibold" fontSize={32}>
				<Text as="span" fontWeight="extrabold">
					Name:
				</Text>{" "}
				<Text as="span" fontWeight="medium">
					{user?.name}
				</Text>
			</Text>

			<Flex columnGap={2}>
				<Text>
					<Text as="span" fontWeight="extrabold">
						Email:
					</Text>{" "}
					<Text as="span" fontWeight="medium">
						{user?.email}
					</Text>
				</Text>
				<Text>|</Text>
				<Text>
					<Text as="span" fontWeight="extrabold">
						Phone:
					</Text>{" "}
					<Text as="span" fontWeight="medium">
						{user?.phone}
					</Text>
				</Text>
			</Flex>

			<Flex mt={20} columnGap={2} justify="flex-end">
				<Button as={Link} to={`/users/edit/${user?.id}`} bg="orange.500">
					Edit
				</Button>
				<Button onClick={() => handleDelete(user?.id)} bg="red.500">
					Delete
				</Button>
			</Flex>
		</Box>
	);
};

export default UserDetails;
