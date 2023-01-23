import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import TodoHeader from "../components/TodoHeader"

const Completed = () => {
	const [counter, setCounter] = useState(0)
	const [isEmpty, setIsEmpty] = useState(false)

	const [completedTodos, setCompletedTodos] = useState([])

	const renderCompletedList = () => {
		console.log(JSON.parse(localStorage.getItem("CompletedTodos")))
		if (JSON.parse(localStorage.getItem("CompletedTodos")) === null) {
			setIsEmpty(true)
		} else {
			setCompletedTodos(JSON.parse(localStorage.getItem("CompletedTodos")))
			setIsEmpty(false)
		}
	}

	const completedTodoCounter = () => {
		let allItems = JSON.parse(localStorage.getItem("CompletedTodos"))
		if (allItems !== null) {
			let completedTodos = allItems.filter((todo) => todo.isChecked === true)
			setCounter(completedTodos.length)
		}
	}

	useEffect(() => {
		renderCompletedList()
		completedTodoCounter()
	}, [])

	return (
		<div>
			<div className="gradient"></div>
			<div className="main-container">
				<div className="solid-color-container" id="solidCompleted">
					<div className="todo-main">
						<TodoHeader title={"HOME"} />

						<div className="todo-input ">
							<input type="text" placeholder="Input Disabled" className="text-input" disabled />
							<label className="container">
								<i className="fa-solid fa-plus text-grey"></i>
							</label>
						</div>

						<div className="todos-container">
							{isEmpty && (
								<div className="todo-empty">
									<p>No Completed Todos For Today...</p>
								</div>
							)}
							{!isEmpty &&
								completedTodos.map((todo) => {
									return (
										<div className="todo-border" key={todo.id}>
											<div className="todos">
												<p className="todo-item">
													<span className="star">*</span> {todo.todoTitle}
												</p>
											</div>
										</div>
									)
								})}

							{!isEmpty && (
								<div className="mini-nav">
									<p>{counter} items</p>
									<div className="todo-type">
										<ul>
											<li>
												<Link to={"/"}>All</Link>
											</li>
											<li>
												<Link to={"/active"}>Active</Link>
											</li>
											<li>
												<Link to={"/completed"} style={{ color: "#445c99" }}>
													Completed
												</Link>
											</li>
										</ul>
									</div>
								</div>
							)}
						</div>

						{!isEmpty && (
							<div className="todo-input mobile">
								<div className="mobile-todo-type">
									<ul>
										<li>
											<Link to={"/"}>All</Link>
										</li>
										<li>
											<Link to={"/active"}>Active</Link>
										</li>
										<li>
											<Link to={"/completed"} style={{ color: "#445c99" }}>
												Completed
											</Link>
										</li>
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Completed
