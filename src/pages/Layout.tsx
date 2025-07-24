import UsersTable from "../components/UsersTable";
import SearchInput from "../components/SearchInput";
import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	SimpleGrid,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<SimpleGrid columns={2} gap={4} padding={8}>
			<GridItem>
				<Flex justify="flex-end" mb={4}>
					<Button as={Link} to={"/users/create"} colorScheme="green">
						Add User
					</Button>
				</Flex>

				<SearchInput />
				<UsersTable />
			</GridItem>

			<GridItem>
				{" "}
				<Heading textTransform="uppercase" textAlign="center" size="lg">
					User Information
				</Heading>
				<Box>
					<Outlet />
				</Box>
			</GridItem>
		</SimpleGrid>
	);
};

export default Layout;
