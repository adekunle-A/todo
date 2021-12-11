import React, { useState, useEffect } from "react";
import { todoType } from "./helpers/types";
import {
  createTodo,
  updateTodo,
  fetchById,
  getTodos,
  removeTodo,
} from "./helpers/API";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todos";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<todoType>>([]);
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetchTodos();
    return () => {};
  }, []);

  //add todo
  const addTodo = async (todo: { title: string; description: string }) => {
    let currentDate = new Date();
    try {
      setError(false);
      setLoading(true);
      const newTodo = {
        dateCreated: new Date(currentDate.toDateString()),
        dateCompleted: undefined,
        completed: false,
        ...todo,
      };
      const { data } = await createTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, data]);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  //toggle completed
  const toggleCompleted = async (id: number) => {
    //get todo with id then toggle and update database
    // map through todo and update completed
    const { data } = await fetchById(id);
    const editTodo = { ...data, completed: !data.completed };
    const result = await updateTodo(editTodo);
    const updateCompleted = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: result.data.completed } : todo
    );
    setTodos(updateCompleted);
  };

  //delete todo from API
  const deleteTodo = async (id: number) => {
    try {
      setError(false);
      setLoading(true);
      await removeTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  //get todos from API
  const fetchTodos = async () => {
    try {
      setError(false);
      setLoading(true);
      const { data } = await getTodos();
      setTodos(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="App">
      <AddTodo onAdd={addTodo} onError={error} onLoading={loading} />
      <TodoList
        todos={todos}
        onError={error}
        onDelete={deleteTodo}
        onCompleted={toggleCompleted}
      />
    </div>
  );
};

export default App;
