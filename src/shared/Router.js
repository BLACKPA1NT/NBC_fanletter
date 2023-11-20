import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import App from "../App";
import HomePage from "pages/HomePage";
import DetailPage from "pages/DetailPage";

const Router = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/detail" element={<DetailPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
