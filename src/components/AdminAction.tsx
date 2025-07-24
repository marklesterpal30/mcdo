import { Box, Heading, Stack, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AdminAction = () => {
	const actions = [
		"Order History",
		"All Categories",
		"Create category",
		"Create Food",
		"Create Category With Food",
	];
	return (
		<Box p={4}>
			<Heading size="md" mb={4}>
				Admin Actions
			</Heading>
			<Stack spacing="16px">
				{actions.map((action, index) => (
					<Button
						as={Link}
						textTransform="capitalize"
						to={action.trim().toLowerCase().replace(/\s+/g, "")} // ⬅️ trim and lowercase
						key={index}
						variant="ghost"
						justifyContent="flex-start"
						fontWeight="medium"
					>
						{action}
					</Button>
				))}
			</Stack>
		</Box>
	);
};

export default AdminAction;
