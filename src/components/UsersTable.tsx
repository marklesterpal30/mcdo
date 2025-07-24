import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Skeleton,
	Button,
} from "@chakra-ui/react";
import useUsers from "../hooks/User/useUsers";
import { Link } from "react-router-dom";

const UsersTable = () => {
	const { data: users = [], isLoading } = useUsers();
	console.log(users);

	return (
		<TableContainer boxShadow="md" borderRadius="md" border="1px" padding={2}>
			<Table variant="striped" size="sm">
				<Thead>
					<Tr>
						<Th>ID</Th>
						<Th>Name</Th>
						<Th>Phone</Th>
						<Th>Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					{isLoading ? (
						[...Array(5)].map((_, rowIndex) => (
							<Tr key={rowIndex}>
								{[...Array(4)].map((__, colIndex) => (
									<Td key={colIndex}>
										<Skeleton height="10px" />
									</Td>
								))}
							</Tr>
						))
					) : users.length > 0 ? (
						users.map((user) => (
							<Tr key={user.id}>
								<Td>{user.id}</Td>
								<Td>{user.name}</Td>
								<Td>{user.phone}</Td>
								<Td>
									<Button
										bg="blue.400"
										size="sm"
										as={Link}
										to={`users/${user.id}`}
									>
										View
									</Button>
								</Td>
							</Tr>
						))
					) : (
						<Tr>
							<Td colSpan={4} align="center">
								No users found.
							</Td>
						</Tr>
					)}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default UsersTable;
