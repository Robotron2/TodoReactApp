import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import TodoHeader from "../components/TodoHeader"

const Active = () => {
	const [isActive, setIsActive] = useState([])
	const [notActive, setNotActive] = useState(false)
	const [counter, setCounter] = useState(0)

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

	const completedTodoCounter = () => {
		let allItems = JSON.parse(localStorage.getItem("TodoLists"))
		if (allItems !== null) {
			let activeTodos = allItems.filter((todo) => todo.isChecked === false)
			setCounter(activeTodos.length)
		}
	}

	useEffect(() => {
		checkActive()
		completedTodoCounter()
	}, [])

	return (
		<div>
			<div className="gradient"></div>
			<div className="main-container">
				<div className="solid-color-container" id="solidActive">
					<div className="todo-main">
						<TodoHeader title={"TODO"} />
						<div className="todo-input ">
							<input type="text" placeholder="Your active todos" className="text-input" disabled />
							<label className="container">
								<i className="fa-solid fa-plus"></i>
							</label>
						</div>

						<div className="todos-container">
							{notActive && (
								<div style={{ padding: "10px 0" }}>
									<center>
										<p>Hello, there are no active todos currently</p>
									</center>
								</div>
							)}
							{!notActive &&
								isActive.map((activeTodo) => {
									return (
										<div className="todo-border" key={activeTodo.id}>
											<div className="todos">
												<p className="todo-item">
													{" "}
													<span className="star">*</span> {activeTodo.todoTitle}
												</p>
											</div>
										</div>
									)
								})}
							<div className="mini-nav">
								<p>{counter} active</p>
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
