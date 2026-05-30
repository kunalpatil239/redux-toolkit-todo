import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./state/store";
import { addTodo, deleteTodo, editTodo } from "./state/todo/todoSlice";

function App() {
  const [taskName, setTaskName] = useState("");
  const todoList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  console.log("todoList", todoList);
  console.log("taskName", taskName);

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl text-center">Task Manager</h1>
      <h3 className="text-2xl text-center mt-4">Manage your daily tasks efficiently</h3>
      <div className="text-center mt-4">
        <input
          id="task-input"
          className="border p-2 mr-4"
          type="text"
          placeholder="Enter task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button
          onClick={() => {
            // Add task logic here
            dispatch(addTodo({ id: Date.now(), title: taskName, completed: false }));
            setTaskName("");
          }}
        >
          Add Task
        </Button>
        <div className="mt-4">
          {todoList.map((todo) => {
            return (
              <div key={todo.id} className="flex items-center justify-center gap-4 mb-4">
                <span className="text-[36px] leading-1">{todo.title}</span>
                <Button
                  onClick={() => {
                    const newTitle = prompt("enter new task name", todo.title);
                    console.log("newTitle", newTitle);
                    if (newTitle) {
                      dispatch(editTodo({ id: todo.id, title: newTitle }));
                    }
                  }}
                >
                  Edit Task
                </Button>
                <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Task</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
// test pre-commit hook
