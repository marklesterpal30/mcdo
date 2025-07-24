import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Button,
} from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import useDeleteCategory from "../hooks/useDeleteCategory";
import { Link } from "react-router-dom";

const AllCategories = () => {
	const { data: categories } = useCategories();
	const deleteCategory = useDeleteCategory();

	const handeDeleteCategory = (id: number) => {
		deleteCategory.mutate(id);
	};

	return (
		<TableContainer>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					{categories?.map((category) => (
						<Tr key={category.id}>
							<Td>{category.name}</Td>
							<Td>
								<Button
									onClick={() => handeDeleteCategory(category.id)}
									colorScheme="red"
									size="sm"
									marginRight={3}
								>
									Delete
								</Button>
								<Button
									as={Link}
									to={`/admin/category/edit/${category.id}`}
									colorScheme="orange"
									size="sm"
								>
									Edit
								</Button>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default AllCategories;
