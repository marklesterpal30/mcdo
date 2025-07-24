import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import MenuNavbar from "../components/MenuNavbar";
import { Outlet } from "react-router-dom";
import AdminAction from "../components/AdminAction";

const AdminLayout = () => {
	return (
		<Grid
			templateAreas={`"nav nav" "aside main"`}
			templateColumns={{
				lg: "250px 1fr",
			}}
		>
			<GridItem area="nav">
				<MenuNavbar />
			</GridItem>
			<GridItem area="aside">
				<AdminAction />
			</GridItem>
			<GridItem area="main" padding={4}>
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default AdminLayout;
