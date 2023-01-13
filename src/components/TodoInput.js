const TodoInput = () => {
	return (
		<div class="todo-input ">
			<label class="container">
				<input type="checkbox" disabled />
				<span class="checkmark"></span>
			</label>
			<input type="text" placeholder="Write a to-do" class="text-input" />
		</div>
	)
}

export default TodoInput
