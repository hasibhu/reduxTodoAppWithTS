import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isComplete?: boolean;
};

type TInitialsState = {
  todos: TTodo[];
};

const initialState: TInitialsState = {
  todos: [],
};



const todoReducers = createSlice({
  name: "todo", //you may add here type instead of name
  initialState,
  reducers: {


    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isComplete: false });
    },

    
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isComplete = !task?.isComplete;
    },

    


    updateTodo: () => {
      
    }
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoReducers.actions;

export default todoReducers.reducer;
