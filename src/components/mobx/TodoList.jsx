import React from "react";

const TodoList = ({ todos, toggleTodo }) => {
	return (
		<ul data-testId="todolist" style={{ listStyle: "none" }}>
			{todos &&
				todos.map((t, l) => (
					<li
						onClick={() => toggleTodo(1)}
						style={{
							margin: 10,
							opacity: t.completed ? 0.5 : 1,
							cursor: "pointer",
							textDecoration: t.completed ? "line-through" : "none",
						}}
						key={t.id}
					>
						{t.text}
					</li>
				))}
		</ul>
	);
};

export default TodoList;
