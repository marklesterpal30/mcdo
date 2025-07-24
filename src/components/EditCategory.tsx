import {
	Box,
	Button,
	FormLabel,
	Heading,
	HStack,
	Input,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import useGetCategory from "../hooks/useGetCategory";
const EditCategory = () => {
	const navigate = useNavigate();
	const { categoryId } = useParams();
	const parsedCategoryId = parseInt(categoryId!);
	const { data: category } = useGetCategory(parsedCategoryId!);
	if (!category) {
		return null;
	}
	return (
		<Box w="333px">
			<form>
				<Heading mb={3}>Edit Category</Heading>
				<FormLabel fontSize="lg">Category Name</FormLabel>
				<Input value={category.name} variant="ghost" />
				<HStack marginTop={3}>
					<Button onClick={() => navigate(-1)}>Cancel</Button>
					<Button bg="green.500">Save Changes</Button>
				</HStack>
			</form>
		</Box>
	);
};

export default EditCategory;
