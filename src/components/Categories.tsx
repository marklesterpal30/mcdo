import { Box, Heading, Stack, Image, HStack, Text } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import useFoodQueryStore from "../foodstore";
import HappyMeal from "../assets/Happymeal.png";
import Burgers from "../assets/Burgers.png";
import SweetTreats from "../assets/Sweets & Treats.png";
import FriesAndSides from "../assets/friesandsides.png";
import { useState } from "react";

const Categories = () => {
	const { data: categories } = useCategories();
	const setCategoryId = useFoodQueryStore((s) => s.setCategoryId);
	const [selectedCategory, setSelectedCategory] = useState(1);
	if (!categories) return null;

	const categoryImages: Record<string, string> = {
		"happy meal": HappyMeal,
		burgers: Burgers,
		"sweet & treats": SweetTreats,
		"fries & sides": FriesAndSides,
	};

	return (
		<Box p={4}>
			<Heading size="lg" mb={4}>
				Main Menu
			</Heading>
			<Stack spacing="16px">
				{categories.map((category) => (
					<HStack
						key={category.id}
						textTransform="capitalize"
						justifyContent="flex-start"
						onClick={() => {
							setCategoryId(category.id);
							setSelectedCategory(category.id);
						}}
						fontWeight="medium"
						border="2px"
						borderColor={
							selectedCategory === category.id ? "gray.300" : "gray.600"
						}
						borderRadius={5}
						p={3}
						_hover={{
							borderColor: "gray.500",
						}}
						alignItems="center"
					>
						<Image
							src={categoryImages[category.name.toLowerCase()]}
							boxSize="88px"
							alt={category.name}
						/>

						<Text fontWeight="normal">{category.name}</Text>
					</HStack>
				))}
			</Stack>
		</Box>
	);
};

export default Categories;
