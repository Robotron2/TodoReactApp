import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import TodoHeader from "../components/TodoHeader"

const Active = () => {
	const [isActive, setIsActive] = useState([])
	const [notActive, setNotActive] = useState(false)

	// let activeTodos = JSON.parse(localStorage.getItem("TodoLists"))

	const checkActive = () => {
		if (JSON.parse(localStorage.getItem("TodoLists")) !== null) {
			let activeTodos = JSON.parse(localStorage.getItem("TodoLists")).filter((todos) => todos.isChecked === false)

			if (activeTodos.length === 0) {
				setNotActive(true)
			} else {
				setIsActive(activeTodos)
			}
		}
	}

	// const handleCheck = (todo) => {
	// 	// console.log(todo)
	// 	todo.isChecked = true
	// 	localStorage.setItem("TodoLists", JSON.stringify(allTodos))
	// 	todoCounter()
	// 	navigate("/")
	// }

	const handleDelete = (id) => {
		console.log(id)
	}

	const handleCheck = (todo) => {
		console.log(todo)
		// todo.isChecked = true
	}

	useEffect(() => {
		checkActive()
	}, [])

	return (
		<div>
			<div className="gradient"></div>
			<div className="main-container">
				<div className="solid-color-container">
					<div className="todo-main">
						<TodoHeader />
						<div className="todo-input ">
							<input type="text" placeholder="Write a to-do" className="text-input" disabled />
							<label className="container">
								<i className="fa-solid fa-plus">+</i>
							</label>
						</div>

						<div className="todos-container">
							{notActive && <div>Hello, there are no active todos currently</div>}
							{!notActive &&
								isActive.map((activeTodo) => {
									return (
										<div className="todo-border" key={activeTodo.id}>
											<div className="todos">
												<label className="container" onClick={() => handleCheck(activeTodo)}>
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label>

												{/* <label className="container">
													<input type="checkbox" />
													<span className="checkmark"></span>
												</label> */}
												<p className="todo-item">{activeTodo.todoTitle}</p>
												<span className="remove-todo">
													<i className="fa fa-trash-o" aria-hidden="true" onClick={() => handleDelete(activeTodo.id)} />
												</span>
											</div>
										</div>
									)
								})}
							<div className="mini-nav">
								<p>5 items left</p>
								<div className="todo-type">
									<ul>
										<li>
											<Link to={"/"}>All</Link>
										</li>
										<li>
											<Link to={"/active"} style={{ color: "#445c99" }}>
												Active
											</Link>
										</li>
										<li>
											<Link to={"/completed"}>Completed</Link>
										</li>
									</ul>
								</div>
								<p>Clear completed</p>
							</div>

							<div className="todo-input mobile">
								<div className="mobile-todo-type">
									<ul>
										<li>
											<Link to={"/"}>All</Link>
										</li>
										<li>
											<Link to={"/active"} style={{ color: "#445c99" }}>
												Active
											</Link>
										</li>
										<li>
											<Link to={"/completed"}>Completed</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Active
