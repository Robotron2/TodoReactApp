import React from "react"

import { Route, Routes } from "react-router-dom"
import All from "./All"
import Active from "./Active"
import Completed from "./Completed"

const Pages = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<All />} />
				<Route path="/active" element={<Active />} />
				<Route path="/completed" element={<Completed />} />
			</Routes>
		</div>
	)
}

export default Pages
