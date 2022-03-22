import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdated, onDeleteTodo, loadTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoUpdated={onTodoUpdated}
          onDeleteTodo={onDeleteTodo}
          loadTodos={loadTodos}
        />
      ))}
    </ul>
  );
}