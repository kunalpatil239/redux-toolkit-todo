import { createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoState = Todo[];

const initialState: TodoState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      console.log("action", action);
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      console.log("action in edit", action);
      const { id, title } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
