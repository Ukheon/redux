import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { rootStore } from "./store/root";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={rootStore}>
			<RouterProvider router={routers}></RouterProvider>
		</Provider>
	</React.StrictMode>
);
