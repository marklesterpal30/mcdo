import {
	Box,
	Image,
	Text,
	SimpleGrid,
	Card,
	CardBody,
	Heading,
	Skeleton,
	useDisclosure,
} from "@chakra-ui/react";
import { Toaster } from "sonner";

import mcdocard from "../assets/mcdocard.jpg";
import useFoods from "../hooks/useFoods";
import FoodModal from "./FoodModal";
import { useState } from "react";

import CartModal from "./CartModal";

const ProductGrid = () => {
	const { data: category, isLoading } = useFoods();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [selectedFood, setSelectedFood] = useState({});

	const cardcount = [1, 2, 3, 4, 5, 6];
	return (
		<Box p={4}>
			<Toaster position="top-right" />
			<CartModal />
			{category && (
				<SimpleGrid columns={{ base: 2, md: 3 }} spacing={6} px={8} py={4}>
					{isLoading ? (
						cardcount.map((_, index) => (
							<Card
								key={index}
								boxShadow="md"
								borderRadius="xl"
								overflow="hidden"
							>
								<Skeleton height="300px" />
								<CardBody>
									<Skeleton height="28px" mb="4" />
									<Skeleton height="17px" width="60%" />
								</CardBody>
							</Card>
						))
					) : category && category.foods ? (
						category.foods.map((food, index) => (
							<Card
								onClick={() => {
									onOpen(); // ✅ CALL the function
									setSelectedFood(food);
								}}
								key={index}
								boxShadow="md"
								borderRadius="xl"
								overflow="hidden"
								_hover={{
									transform: "scale(1.02)",
									transition: "0.2s",
								}}
							>
								<Image src={mcdocard} h="258px" alt={food.name} />
								<CardBody>
									<Heading fontSize="22px">{food.name}</Heading>
									<Text fontWeight="normal" fontSize="17px">
										PHP {food.price}
									</Text>
								</CardBody>
							</Card>
						))
					) : (
						<Heading>No foods available.</Heading>
					)}

					{/* ADDING TO CART MODAL */}
					<FoodModal
						isOpen={isOpen}
						onClose={onClose}
						food={selectedFood}
					/>
				</SimpleGrid>
			)}
		</Box>
	);
};

export default ProductGrid;
