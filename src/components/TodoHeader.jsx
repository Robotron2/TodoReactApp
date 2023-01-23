import React from "react"
import { Link } from "react-router-dom"

const TodoHeader = (props) => {
	let title = props.title
	return (
		<div className="todo-header">
			<div>
				<h4>
					<Link to={"/"}>{title}</Link>
				</h4>
			</div>
			{/* <div className="theme-btn">
				<DarkMode />
			</div> */}
		</div>
	)
}

export default TodoHeader
