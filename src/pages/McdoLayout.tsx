import { Box, Grid, GridItem } from "@chakra-ui/react";
import MenuNavbar from "../components/MenuNavbar";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";

const McdoLayout = () => {
	return (
		<Grid
			maxH="100vh" // ensures the grid takes the full viewport height
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }}
			gridTemplateRows={{ base: "auto 1fr", lg: "auto 1fr" }} // defines row heights
		>
			<GridItem area="nav">
				<MenuNavbar />
			</GridItem>
			<GridItem
				area="aside"
				overflowY="auto"
				sx={{
					scrollbarWidth: "none",
					"&::-webkit-scrollbar": {
						display: "none",
					},
				}}
			>
				<Categories />
			</GridItem>

			<GridItem
				area="main"
				overflowY="auto"
				sx={{
					scrollbarWidth: "none",
					"&::-webkit-scrollbar": {
						display: "none",
					},
				}}
			>
				<ProductGrid />
			</GridItem>
		</Grid>
	);
};

export default McdoLayout;
