import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkTodo, deleteTodo, selectTodo, getTodos } from "./todoSlice";
import { DeleteForeverOutlined } from "@mui/icons-material";
import "./Todos.css";

export function Todos() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="listTodos" key={todo.id}>
            <input
              className="checkInput"
              type="checkbox"
              checked={todo.checked}
              onChange={(e) => {
                dispatch(checkTodo([todo.id, e.target.checked]));
              }}
            />
            <h1>{todo.title}</h1>
            <DeleteForeverOutlined
              sx={{ width: "35px", height: "85px" }}
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            ></DeleteForeverOutlined>
          </div>
        );
      })}
    </div>
  );
}
