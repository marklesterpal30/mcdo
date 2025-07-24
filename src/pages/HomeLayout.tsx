import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import MenuNavbar from "../components/MenuNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<Grid>
			<GridItem>
				<MenuNavbar />
			</GridItem>
			<GridItem>
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default HomeLayout;
