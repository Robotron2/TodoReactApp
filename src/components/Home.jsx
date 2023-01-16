import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import TodoHeader from "./TodoHeader"

const Home = () => {
	const [newTodo, setNewTodo] = useState("")
	const [todoAvailable, setTodoAvailable] = useState(false)
	const [allTodos, setAllTodos] = useState([])

	const checkTodo = () => {
		let checkTodo = JSON.parse(localStorage.getItem("TodoList"))
		console.log(checkTodo)
		if (checkTodo.length > 0) {
			setAllTodos(checkTodo)
			setTodoAvailable(true)
		}
	}

	const handleChange = (e) => {
		setNewTodo(e.target.value)
	}

	const handleClick = () => {
		// allTodos.push()
		// console.log(newTodo)
		// console.log(allTodos)

		let matchFound = allTodos.filter((todo) => {
			return todo === newTodo
		})
		if (matchFound.length > 0) {
			setNewTodo("")
		} else {
			allTodos.push(newTodo)
			setAllTodos(allTodos)
			localStorage.setItem("TodoList", JSON.stringify(allTodos)) // Save items that fulfills all conditions
			setTimeout(() => {
				setNewTodo("")
			}, 1)
		}
	}

	const handleDelete = (id) => {
		console.log(id)
	}

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	setAllTodos(allTodos)
	// 	allTodos.push(newTodo) onSubmit={handleSubmit}
	// }

	useEffect(() => {
		checkTodo()
	}, [])

	return (
		<div>
			{todoAvailable && (
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
			)}
		</div>
	)
}

export default Home
