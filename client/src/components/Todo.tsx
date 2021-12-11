import React from "react";
import { Card } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBox from "./CheckBox";
import { todoType } from "../helpers/types";

interface Props {
  todo: todoType;
  onDelete: (id: number) => Promise<void>;
  onCompleted: (id: number) => void;
}

const Todo: React.FC<Props> = ({ todo, onDelete, onCompleted }) => {
  const [show, setshow] = React.useState(false);
  //
  return (
    <Card className={`list-card ${todo.completed ? "strike-completed" : ""}`}>
      <h2>
        <span className="left-list-card">
          <CheckBox
            completed={todo.completed}
            checkControl={() => onCompleted(todo.id)}
          />
        </span>
        {todo.title}
        <span className="right-list-card">
          <span className="icons">
            <InfoIcon onClick={() => setshow(!show)} />
          </span>
          <span className="icons">
            <DeleteIcon onClick={() => onDelete(todo.id)} />
          </span>
        </span>
      </h2>
      {show ? (
        <div>
          <h3>{todo.description} </h3>
          <p>Created: {todo.dateCreated} </p>
          <p> Date Completed: {todo.dateCompleted} </p>
        </div>
      ) : null}
    </Card>
  );
};

export default Todo;
