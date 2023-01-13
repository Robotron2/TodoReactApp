import { useState } from "react"
import TodoHeader from "./TodoHeader"

const Home = () => {
	const [newTodo, setNewTodo] = useState("Add todo")
	const [allTodos, setAllTodos] = useState([])

	const handleChange = (e) => {
		setNewTodo(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div>
			<div className="gradient"></div>
			<div className="main-container">
				<div className="solid-color-container">
					<div className="todo-main">
						<TodoHeader />
						<form onSubmit={handleSubmit}>
							<div class="todo-input ">
								<label class="container">
									<input type="checkbox" disabled />
									<span class="checkmark"></span>
								</label>
								<input type="text" placeholder="Write a to-do" class="text-input" onChange={handleChange} />
							</div>
						</form>
						<div class="todos-container">
							<div class="todo-border">
								<div class="todos">
									<label class="container">
										<input type="checkbox" />
										<span class="checkmark"></span>
									</label>
									<p class="todo-item">This is a todo</p>

									<span class="remove-todo">
										<i class="fa fa-trash-o" aria-hidden="true"></i>
									</span>
								</div>
							</div>

							<div class="todo-border">
								<div class="todos">
									<label class="container">
										<input type="checkbox" />
										<span class="checkmark"></span>
									</label>
									<p class="todo-item">This is a todo</p>

									<span class="remove-todo">
										<i class="fa fa-trash-o" aria-hidden="true"></i>
									</span>
								</div>
							</div>
							<div class="mini-nav">
								<p>5 items left</p>
								<div class="todo-type">
									<ul>
										<li class="active">All</li>
										<li>Active</li>
										<li>Completed</li>
									</ul>
								</div>
								<p>Clear completed</p>
							</div>
						</div>

						<div class="todo-input mobile">
							<div class="mobile-todo-type">
								<ul>
									<li class="active">All</li>
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
