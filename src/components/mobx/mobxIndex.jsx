import React from "react";

import { observer, useLocalStore } from "mobx-react-lite";
import TodoList from "./TodoList";
import Footer from "./Footer";

const mobxIndex = observer(() => {
	const store = useLocalStore({
		todos: [
			{ id: 1, text: "Buy eggs", completed: true },
			{ id: 2, text: "Write a post", completed: false },
		],
		toggleTodo(index) {
			store.todos[index].completed = !store.todos[index].completed;
		},
		get remainingTodos() {
			return store.todos.filter(t => !t.completed).length;
		},
	});
	return (
		<div>
			<TodoList todos={store.todos} toggleTodo={store.toggleTodo} />
			<Footer remaining={store.remainingTodos} total={store.todos.length} />
		</div>
	);
});
export default mobxIndex;

