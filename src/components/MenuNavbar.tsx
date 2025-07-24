import { Button, Flex, Heading, HStack, Text, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom"; // ⬅️ import useNavigate
import mcdologo from "../assets/mcdologo.png";
import { GiMeal } from "react-icons/gi";

const MenuNavbar = () => {
	const navigate = useNavigate(); // ⬅️ initialize hook
	const location = useLocation();
	const shouldShowButton =
		location.pathname.startsWith("/menu") ||
		location.pathname.startsWith("/admin");

	return (
		<HStack
			padding={3}
			px={8}
			shadow="lg"
			justifyContent="space-between"
			alignItems="center"
		>
			<Image boxSize={14} src={mcdologo} />
			<Flex alignItems="center" columnGap={5}>
				<Button
					variant="ghost"
					onClick={() => navigate("/menu")}
					leftIcon={<GiMeal />}
				>
					Menu
				</Button>
				<Button variant="ghost" as={Link} to={"/homelayout"}>
					Home
				</Button>
				{!shouldShowButton && (
					<Button variant="ghost" as={Link} to={"mcdelivery"}>
						McDelivery
					</Button>
				)}
				{shouldShowButton && (
					<Button as={Link} to="/admin">
						Admin
					</Button>
				)}
			</Flex>
		</HStack>
	);
};

export default MenuNavbar;
