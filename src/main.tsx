import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./common.scss"
import "virtual:windi.css";
import "./lang";
import router from "./router/index";
import { Provider } from 'react-redux';
import { RouterProvider as Router } from 'react-router-dom'
import store from './store';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router router={router}>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
);
