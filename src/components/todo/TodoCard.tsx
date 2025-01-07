

import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeTodo, toggleComplete } from "@/redux/features/todoReducer";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
};

const TodoCard = ({ id, title, description }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  // Fetch the todo item from Redux store using its ID
  const isCompleted = useAppSelector((state) =>
    state.todos.todos.find((todo) => todo.id === id)?.isComplete
  );

  const toggleState = () => {
    dispatch(toggleComplete(id));
    console.log("clicked");
  };

  return (
    <div className="bg-white rounded-xl p-2 flex justify-between items-center">
      <input
        onChange={toggleState}
        checked={isCompleted || false} // Ensuring it's either true or false
        name="complete"
        id="complete"
        type="checkbox"
      />
      <p>{title}</p>
      <div>
        {isCompleted ? (
          <p className="text-green-400">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>

      <p>{description}</p>
      <div className="space-x-4">
        <Button
          onClick={() => dispatch(removeTodo(id))}
          className="bg-red-500 rounded-xl"
        >
          Del
        </Button>

        <Button className="bg-[#5C53FE] rounded-xl">Edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
