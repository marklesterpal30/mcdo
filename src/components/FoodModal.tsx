import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Image,
	HStack,
	Text,
	Flex,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa"; // add this import

import mcdocard from "../assets/mcdocard.jpg";
import { useState } from "react";
import useCreateCart from "../hooks/UseCreateCart";

const FoodModal = ({ isOpen, onOpen, onClose, food }: any) => {
	const [foodCount, setFoodCount] = useState(0);

	const createCart = useCreateCart();

	const handleAddOrder = () => {
		createCart.mutate({
			foodId: food.id,
			quantity: foodCount,
		});
		onClose();
		setFoodCount(0);
	};

	const handleClose = () => {
		onClose();
		setFoodCount(0);
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={handleClose}>
				<ModalOverlay />
				<ModalContent>
					<HStack justifyContent="center" w="full" mt="12">
						<Image p={2} boxSize="217px" src={mcdocard} />
					</HStack>

					<ModalCloseButton />
					<ModalBody
						textAlign="center"
						fontSize="2xl"
						fontWeight="semibold"
						textTransform="capitalize"
					>
						<Text>{food.name}</Text>
						<Text fontSize="xl" mt={10} mb={2}>
							Quantity
						</Text>
						<Flex justifyContent="center">
							<HStack
								border="2px"
								borderColor="red.600"
								w="fit-content"
								borderRadius={8}
							>
								<Button
									disabled={foodCount == 0}
									bg="red.600"
									_hover={{
										bg: "red.600",
									}}
									onClick={() => setFoodCount((prev) => prev - 1)}
									fontWeight="bold"
								>
									<FaMinus />
								</Button>
								<Text px={4}>{foodCount}</Text>
								<Button
									bg="red.600"
									_hover={{
										bg: "red.600",
									}}
									fontWeight="bold"
									onClick={() => setFoodCount((prev) => prev + 1)}
								>
									<FaPlus />
								</Button>
							</HStack>
						</Flex>
					</ModalBody>
					<Flex justifyContent="center" py={4} columnGap={2}>
						<Button
							bg="red.500"
							_hover={{
								bg: "red.600",
							}}
							onClick={() => {
								onClose();
								setFoodCount(0);
							}}
							fontWeight="semibold"
						>
							Cancel
						</Button>
						<Button
							bg="green.500"
							_hover={{
								bg: "green.600",
							}}
							mr={3}
							onClick={() => handleAddOrder()}
							fontWeight="semibold"
						>
							Add to Order
						</Button>
					</Flex>
				</ModalContent>
			</Modal>
		</>
	);
};

export default FoodModal;
