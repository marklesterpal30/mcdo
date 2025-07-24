import {
	Badge,
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	useDisclosure,
	VStack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";
import useCreateOrder from "../hooks/useCreateOrder";
import useCarts from "../hooks/useCarts";
import useDeleteFoodInCart from "../hooks/useDeleteFoodInCart";

const CartModal = () => {
	const createOrder = useCreateOrder();
	const { data: carts } = useCarts();
	const deleteFoodInCart = useDeleteFoodInCart();

	const {
		isOpen: isFirstOpen,
		onOpen: onFirstOpen,
		onClose: onFirstClose,
	} = useDisclosure();

	const handleCompleteOrder = () => {
		createOrder.mutate(
			{
				foods: carts?.map((item) => ({
					foodId: item.food.id,
					quantity: item.quantity,
					totalPrice: item.totalPrice,
				})),
			},
			{
				onSuccess: () => {
					toast.success("Order Submit Completed!");
					onFirstClose(); // ✅ close the modal
				},
				onError: () => {
					toast.error("Failed to submit order.");
				},
			}
		);
	};

	const handleDeleteFoodInCart = (id: number) => {
		deleteFoodInCart.mutate(id);
	};

	return (
		<div>
			<HStack justifyContent="flex-end">
				<Button bg="yellow.500" onClick={onFirstOpen} mr={4}>
					View Order
				</Button>{" "}
			</HStack>
			<Modal isOpen={isFirstOpen} onClose={onFirstClose} size="lg">
				<ModalOverlay />
				<ModalContent borderRadius="xl" p={2}>
					<ModalHeader>🛒 Your Cart</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						<Stack spacing={4}>
							{carts?.map((item) => (
								<Box
									key={item.id}
									p={4}
									borderWidth={1}
									borderRadius="lg"
									boxShadow="sm"
									_hover={{ boxShadow: "md" }}
									transition="0.2s"
									position="relative"
								>
									<Flex justify="space-between" align="center">
										<Box>
											<Text fontSize="lg" fontWeight="semibold">
												{item.food.name}
											</Text>
											<Text fontSize="sm" color="gray.600">
												₱{item.food.price}
											</Text>
										</Box>

										<Badge
											colorScheme="green"
											fontSize="md"
											px={3}
											py={1}
											borderRadius="full"
										>
											Qty:{item.quantity}
										</Badge>
										<IconButton
											icon={<IoClose />}
											size="sm"
											variant="ghost"
											colorScheme="red"
											aria-label="Remove item"
											position="absolute"
											top={0}
											right={0}
											onClick={() => handleDeleteFoodInCart(item.id)}
										/>
									</Flex>
								</Box>
							))}
						</Stack>
					</ModalBody>

					<ModalFooter justifyContent="space-between">
						<VStack w="full">
							<Box w="full">
								<Text fontWeight="medium">
									Total Items: {carts?.length ?? 0}
								</Text>
								<Text fontWeight="medium">
									Total Price: ₱
									{carts?.reduce(
										(acc, item) => acc + item.totalPrice,
										0
									)}
								</Text>
							</Box>
							<Flex w="full" justifyContent="flex-end">
								<Flex columnGap={2}>
									<Button bg="green.600" onClick={handleCompleteOrder}>
										Complete Order
									</Button>
									<Button onClick={onFirstClose} colorScheme="blue">
										Close
									</Button>
								</Flex>
							</Flex>
						</VStack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default CartModal;
