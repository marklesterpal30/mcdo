import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider theme={theme}>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</ChakraProvider>
);
