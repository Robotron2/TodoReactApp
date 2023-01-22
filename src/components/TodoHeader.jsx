import React from "react"
import DarkMode from "./DarkMode"

const TodoHeader = () => {
	return (
		<div className="todo-header">
			<div>
				<h4>TODO</h4>
			</div>
			<div className="theme-btn">
				<DarkMode />
			</div>
		</div>
	)
}

export default TodoHeader
