import axios from "axios";
import { API_BASE_URL } from "./config";
import { todoType, newTodoType } from "./types";

//fetcher
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

//fetches todo list
export const getTodos = async () => {
  return await axios.get<todoType[]>(`${API_BASE_URL}todos`);
};

//fetches todo by ID todo to list
export const fetchById = async (id: number) => {
  return await axios.get(`${API_BASE_URL}todos/${id}`);
};

//add todo to list
export const createTodo = async (todo: newTodoType) => {
  return await axios.post(`${API_BASE_URL}todos`, todo);
};

//add todo to list
export const updateTodo = async (todo: todoType) => {
  return await axios.put(`${API_BASE_URL}todos/${todo.id}`, todo);
};

//delete todo
export const removeTodo = async (id: number) => {
  return await axios.delete(`${API_BASE_URL}todos/${id}`);
};
