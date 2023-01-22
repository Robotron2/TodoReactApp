import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import TodoHeader from "../components/TodoHeader"

const Completed = () => {
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

	useEffect(() => {
		renderCompletedList()
	}, [])

	return (
		<div>
			<div className="gradient"></div>
			<div className="main-container">
				<div className="solid-color-container">
					<div className="todo-main">
						<TodoHeader />

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
								completedTodos.map((todo, index) => {
									return (
										<div className="todo-border" key={index + 1}>
											<div className="todos">
												<p className="todo-item">{todo.todoTitle}</p>
											</div>
										</div>
									)
								})}

							{!isEmpty && (
								<div className="mini-nav">
									<p>5 items left</p>
									<div className="todo-type">
										<ul>
											<li>All</li>
											<li>Active</li>
											<li className="active">Completed</li>
										</ul>
									</div>
									<p>Clear completed</p>
								</div>
							)}
						</div>

						{!isEmpty && (
							<div className="todo-input mobile">
								<div className="mobile-todo-type">
									<ul>
										<li>All</li>
										<li>Active</li>
										<li className="active">Completed</li>
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
