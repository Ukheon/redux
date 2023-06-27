import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Count } from "./pages/Count";

export const routers = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/count",
		element: <Count />,
	},
]);
