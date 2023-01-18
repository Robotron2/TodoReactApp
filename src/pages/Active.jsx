import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import TodoHeader from "../components/TodoHeader"

const Active = () => {
	const [isActive, setIsActive] = useState([])
	const [notActive, setNotActive] = useState(false)

	const checkActive = () => {
		let activeTodos = JSON.parse(localStorage.getItem("TodoLists")).filter((todos) => todos.isChecked === false)
		if (activeTodos.length === 0) {
			setNotActive(true)
		} else {
			setIsActive(activeTodos)
		}
	}

	useEffect(() => {
		checkActive()
	}, [])

	return (
		<div>
			{notActive && <div>Hello, there are no active todos currently</div>}
			{!notActive &&
				isActive.map((activeTodo) => {
					return <div key={activeTodo.id}>{activeTodo.todoTitle}</div>
				})}
		</div>
	)

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	setAllTodos(allTodos)
	// 	allTodos.push(newTodo) onSubmit={handleSubmit}
	// }

	// return (
	// 	<div>
	// 		<div className="gradient"></div>
	// 		<div className="main-container">
	// 			<div className="solid-color-container">
	// 				<div className="todo-main">
	// 					<TodoHeader />

	// 					<div className="todo-input ">
	// 						<input type="text" placeholder="Write a to-do" className="text-input" value={newTodo} onChange={handleChange} />
	// 						<label className="container" onClick={handleClick}>
	// 							<i className="fa-solid fa-plus"></i>
	// 						</label>
	// 					</div>

	// 					<div className="todos-container">
	// 						{isEmpty && (
	// 							<div className="todo-empty">
	// 								<p>Empty Todo...</p>
	// 							</div>
	// 						)}
	// 						{!isEmpty &&
	// 							allTodos.map((todo, index) => {
	// 								return (
	// 									<div className="todo-border" key={index + 1}>
	// 										<div className="todos">
	// 											<label className="container">
	// 												<input type="checkbox" />
	// 												<span className="checkmark"></span>
	// 											</label>
	// 											<p className="todo-item">{todo}</p>

	// 											<span className="remove-todo">
	// 												<i className="fa fa-trash-o" aria-hidden="true" onClick={() => handleDelete(index)} />
	// 											</span>
	// 										</div>
	// 									</div>
	// 								)
	// 							})}

	// 						{!isEmpty && (
	// 							<div className="mini-nav">
	// 								<p>5 items left</p>
	// 								<div className="todo-type">
	// 									<ul>
	// 										<li className="active">All</li>
	// 										<li>Active</li>
	// 										<li>Completed</li>
	// 									</ul>
	// 								</div>
	// 								<p>Clear completed</p>
	// 							</div>
	// 						)}
	// 					</div>

	// 					{!isEmpty && (
	// 						<div className="todo-input mobile">
	// 							<div className="mobile-todo-type">
	// 								<ul>
	// 									<li className="active">All</li>
	// 									<li>Active</li>
	// 									<li>Completed</li>
	// 								</ul>
	// 							</div>
	// 						</div>
	// 					)}
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// )
}

export default Active
