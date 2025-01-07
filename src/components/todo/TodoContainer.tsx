import React from "react";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import AddTodoModal from "./AddTodoModal";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-around mb-5">

        {/* modal part  */}
        <Button className="bg-primary-gradient rounded-xl">
          <AddTodoModal></AddTodoModal>
        </Button>

        

        {/* filter part  */}
        <Button className="bg-primary-gradient rounded-xl ">
          <TodoFilter />
        </Button>
      </div>

      <div className="bg-primary-gradient w-full h-full p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((item) => (
            <TodoCard
                id={item.id}
                title={item.title}
                description={item.description}
              //   or
            key={item.id}
              // {...item}
            ></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
