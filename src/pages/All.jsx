import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import TodoHeader from "../components/TodoHeader"

const All = () => {
	const navigate = useNavigate()
	// const [isEmpty, setIsEmpty] = useState(true)
	const [isEmpty, setIsEmpty] = useState(true)
	const [todoContent, setTodoContent] = useState("")
	const [allTodos, setAllTodos] = useState([])
	// const [checkIsChecked, setCheckIsChecked] = useState(false)
	let isChecked = false

	const checkLocalStorage = () => {
		let checkTodo = JSON.parse(localStorage.getItem("TodoLists"))
		if (checkTodo !== null && checkTodo.length !== 0) {
			setIsEmpty(false)
			setAllTodos(checkTodo)
		}
	}

	const handleChange = (e) => {
		setTodoContent(e.target.value)
	}

	const handleClick = () => {
		//handleClick Creates a newTodo Item

		if (todoContent !== "") {
			let filterContent = allTodos.filter((todo) => todo.todoTitle === todoContent)
			// console.log(filterContent.length)
			// console.log(allTodos)
			// console.log("allTodos")

			if (filterContent.length === 0) {
				let newTodo = {
					todoTitle: todoContent,
					id: Math.floor(Math.random() * 1024),
					isChecked
				}

				allTodos.push(newTodo)

				localStorage.setItem("TodoLists", JSON.stringify(allTodos))

				setIsEmpty(true)

				setTimeout(() => {
					setTodoContent("")
				}, 1)
			} else {
				setTodoContent("")
			}
		} else {
			console.log("Cannot be empty")
		}
	}

	const handleCheck = (todo) => {
		console.log(todo)
		todo.isChecked = true
		localStorage.setItem("TodoLists", JSON.stringify(allTodos))
		navigate("/")
	}

	const handleDelete = () => {
		console.log("Deleted")
	}

	useEffect(() => {
		checkLocalStorage()
	}, [todoContent])

	return (
		<div>
			<div className="gradient"></div>
			<div className="main-container">
				<div className="solid-color-container">
					<div className="todo-main">
						<TodoHeader />
						<div className="todo-input ">
							<input type="text" placeholder="Write a to-do" className="text-input" onChange={handleChange} value={todoContent} />
							<label className="container" onClick={handleClick}>
								<i className="fa-solid fa-plus"></i>
							</label>
						</div>

						<div className="todos-container">
							{isEmpty && (
								<div className="todo-empty">
									<p>Empty Todo...</p>
								</div>
							)}
							{!isEmpty &&
								allTodos.map((todo, index) => {
									return (
										<div className="todo-border" key={index + 1}>
											<div className="todos">
												{!todo.isChecked && (
													<label className="container" onClick={() => handleCheck(todo)}>
														<input type="checkbox" />
														<span className="checkmark"></span>
													</label>
												)}
												{todo.isChecked && (
													<label className="container" onClick={() => handleCheck(todo)}>
														<input type="checkbox" disabled />
														<span className="checkmark"></span>
													</label>
												)}
												{!todo.isChecked && <p className="todo-item">{todo.todoTitle}</p>}
												{todo.isChecked && <p className="todo-item strike-through">{todo.todoTitle}</p>}

												<span className="remove-todo">
													<i className="fa fa-trash-o" aria-hidden="true" onClick={() => handleDelete(index)} />
												</span>
											</div>
										</div>
									)
								})}

							{!isEmpty && (
								<div className="mini-nav">
									<p>5 items left</p>
									<div className="todo-type">
										<ul>
											<li>
												<Link to={"/"} style={{ color: "#445c99" }}>
													All
												</Link>
											</li>
											<li>
												<Link to={"/active"}>Active</Link>
											</li>
											<li>
												<Link to={"/completed"}>Completed</Link>
											</li>
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
										<li>
											<Link to={"/"} style={{ color: "#445c99" }}>
												All
											</Link>
										</li>
										<li>
											<Link to={"/active"}>Active</Link>
										</li>
										<li>
											<Link to={"/completed"}>Completed</Link>
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

export default All

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const All = () => {
// 	// const [allTodosArray, setAllTodosArray] = useState([])
// 	let allTodosArray = JSON.parse(localStorage.getItem("TodoLists"))
// 	console.log(allTodosArray)

// 	const [newTodo, setNewTodo] = useState("")
// 	const [isEmpty, setIsEmpty] = useState(false)
// 	// const [todoAvailable, setTodoAvailable] = useState(false)
// 	const [allTodos, setAllTodos] = useState([])
// 	// localStorage.setItem("TodoList", JSON.stringify(["Hello, Hello"]))

// 	const handleChange = (e) => {
// 		setNewTodo(e.target.value)
// 	}

// 	const handleClick = () => {
// 		allTodos.push(newTodo)
// 		localStorage.setItem("TodoLists", JSON.stringify(allTodos)) // Save items that fulfills all conditions
// 		setAllTodos(allTodos)

// 		// let matchFound = allTodos.filter((todo) => {
// 		// 	return todo === newTodo
// 		// })
// 		// if (matchFound.length > 0) {
// 		// 	setNewTodo("")
// 		// } else {
// 		// 	allTodos.push(newTodo)
// 		// setAllTodos(allTodos)

// 		// 	console.log(setAllTodos(allTodos))
// 		// }
// 		setTimeout(() => {
// 			setNewTodo("")
// 		}, 1)
// 	}

// 	const handleDelete = (id) => {
// 		console.log(id)
// 	}

// 	const renderList = () => {
// 		console.log(JSON.parse(localStorage.getItem("TodoLists")))
// 		if (JSON.parse(localStorage.getItem("TodoLists")) === null) {
// 			setIsEmpty(true)
// 		} else {
// 			setAllTodos(JSON.parse(localStorage.getItem("TodoLists")))
// 			setIsEmpty(false)
// 		}
// 	}

// 	useEffect(() => {
// 		renderList()
// 	}, [])

// 	// const handleSubmit = (e) => {
// 	// 	e.preventDefault()
// 	// 	setAllTodos(allTodos)
// 	// 	allTodos.push(newTodo) onSubmit={handleSubmit}
// 	// }

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
// }

// export default All
