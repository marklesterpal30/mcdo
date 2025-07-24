import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import UserDetails from "./components/UserDetails";
import EditUser from "./components/EditUser";
import UserForm from "./components/UserForm";
import McdoLayout from "./pages/McdoLayout";
import Product from "./components/Product";
import ProductGrid from "./components/ProductGrid";
import AdminLayout from "./pages/AdminLayout";
import CreateCategory from "./components/CreateCategory";
import CreateFoodForm from "./components/CreateFoodForm";
import CreateCategoryWithFoodForm from "./components/CreateCategoryWithFoodForm";
import AllCategories from "./components/AllCategories";
import EditCategory from "./components/EditCategory";
import OrderHistory from "./components/OrderHistory";
import HomeLayout from "./pages/HomeLayout";
import About from "./components/About";
import McDelivery from "./components/McDelivery";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "users/:userId",
				element: <UserDetails />,
			},
			{
				path: "users/edit/:userId",
				element: <EditUser />,
			},
			{
				path: "users/create",
				element: <UserForm />,
			},
		],
	},
	{
		path: "/menu",
		element: <McdoLayout />,
		children: [
			{
				path: "products",
				element: <Product />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{
				path: "createcategory",
				element: <CreateCategory />,
			},
			{
				path: "createfood",
				element: <CreateFoodForm />,
			},
			{
				path: "createcategorywithfood",
				element: <CreateCategoryWithFoodForm />,
			},
			{
				path: "allcategories",
				element: <AllCategories />,
			},
			{
				path: "category/edit/:categoryId",
				element: <EditCategory />,
			},
			{
				path: "orderhistory",
				element: <OrderHistory />,
			},
		],
	},
	{
		path: "/homelayout",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <About />,
			},
			{
				path: "mcdelivery",
				element: <McDelivery />,
			},
		],
	},
]);

export default router;
