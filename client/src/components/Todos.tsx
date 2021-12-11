import React from "react";
import MessageTag from "./MessageTag";
import Loading from "./Loading";
import Todo from "./Todo";
import { todoType } from "../helpers/types";

//props
type todosType = {
  todos: todoType[];
  onDelete: (id: number) => Promise<void>;
  onCompleted: (id: number) => void;
  onError: Boolean;
};
const Todos: React.FC<todosType> = ({
  todos,
  onError,
  onDelete,
  onCompleted,
}) => {
  //display when data is loading or there is an error
  if (!todos) return <Loading />;
  if (onError) return <MessageTag text="Something went wrong" />;

  return (
    <div className="list-container">
      {todos.length !== 0 ? (
        <>
          {todos.map((todo: any) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onCompleted={onCompleted}
            />
          ))}
        </>
      ) : (
        <MessageTag text={"No todos"} />
      )}
    </div>
  );
};

export default Todos;
