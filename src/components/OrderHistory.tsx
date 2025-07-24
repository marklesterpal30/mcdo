import React from "react";
import useOrders from "../hooks/useOrders";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const OrderHistory = () => {
	const { data: user } = useOrders();

	if (!user) {
		return null;
	}
	return (
		<Box p={4}>
			<Heading size="md" mb={4}>
				Order History for {user.name}
			</Heading>

			{user?.orders.map((order) => (
				<Box
					key={order.id}
					borderWidth="1px"
					borderRadius="lg"
					p={4}
					mb={4}
				>
					<Flex justifyContent="space-between">
						<Text>Order #{order.id}</Text>
						<Text>Toal Price: {order.orderPrice}</Text>
					</Flex>

					<Stack spacing={2} mt={2}>
						{order.foodOrders.map((item, index) => (
							<Box key={index} pl={2}>
								<Text>- {item.food.name}</Text>
							</Box>
						))}
					</Stack>
				</Box>
			))}
		</Box>
	);
};

export default OrderHistory;
