import TodoHeader from "./TodoHeader"
import TodoInput from "./TodoInput"

const Home = () => {
	return (
		<div>
			<div className="gradient"></div>
			<div className="main-container">
				<div className="solid-color-container">
					<div className="todo-main">
						<TodoHeader />
						<TodoInput />
						<div class="todos-container">
							<div class="todo-border">
								<div class="todos">
									<label class="container">
										<input type="checkbox" />
										<span class="checkmark"></span>
									</label>
									<p class="todo-item">This is a todo</p>

									<span class="remove-todo">X</span>
								</div>
							</div>

							<div class="todo-border">
								<div class="todos">
									<label class="container">
										<input type="checkbox" />
										<span class="checkmark"></span>
									</label>
									<p class="todo-item">This is a todo</p>

									<span class="remove-todo">X</span>
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
