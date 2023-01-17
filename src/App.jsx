import React from "react"
import { BrowserRouter } from "react-router-dom"

import "./App.css"
// import Home from "./components/Home"
import Pages from "./pages/Pages"

function App() {
	return (
		<div>
			<BrowserRouter>
				<Pages />
			</BrowserRouter>
		</div>
	)
}

export default App
