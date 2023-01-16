import React from "react"
import { useState } from "react"
import TodoHeader from "./TodoHeader"

const Home = () => {
	const [newTodo, setNewTodo] = useState("")
	const [allTodos, setAllTodos] = useState([])

	const handleChange = (e) => {
		setNewTodo(e.target.value)
	}

	const handleClick = () => {
		// allTodos.push()
		// console.log(newTodo)
		// console.log(allTodos)

		allTodos.push(newTodo)
		setAllTodos(allTodos)

		localStorage.setItem("TodoList", JSON.stringify(allTodos)) // Save items that fulfills all conditions

		setTimeout(() => {
			setNewTodo("")
		}, 1)
	}

	const handleDelete = (id) => {
		console.log(id)
	}

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	setAllTodos(allTodos)
	// 	allTodos.push(newTodo) onSubmit={handleSubmit}
	// }

	return (
		<div>
			<div className="gradient"></div>
			<div className="main-container">
				<div className="solid-color-container">
					<div className="todo-main">
						<TodoHeader />

						<div className="todo-input ">
							<input type="text" placeholder="Write a to-do" className="text-input" value={newTodo} onChange={handleChange} />
							<label className="container" onClick={handleClick}>
								<i class="fa-solid fa-plus"></i>
							</label>
						</div>

						<div className="todos-container">
							{allTodos.map((todo, index) => {
								return (
									<div className="todo-border" key={index + 1}>
										<div className="todos">
											<label className="container">
												<input type="checkbox" />
												<span className="checkmark"></span>
											</label>
											<p className="todo-item">{todo}</p>

											<span className="remove-todo">
												<i className="fa fa-trash-o" aria-hidden="true" onClick={() => handleDelete(index)} />
											</span>
										</div>
									</div>
								)
							})}

							<div className="mini-nav">
								<p>5 items left</p>
								<div className="todo-type">
									<ul>
										<li className="active">All</li>
										<li>Active</li>
										<li>Completed</li>
									</ul>
								</div>
								<p>Clear completed</p>
							</div>
						</div>

						<div className="todo-input mobile">
							<div className="mobile-todo-type">
								<ul>
									<li className="active">All</li>
									<li>Active</li>
									<li>Completed</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
