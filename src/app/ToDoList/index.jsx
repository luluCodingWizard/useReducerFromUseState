import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import List from "../components/List";
import { ACTIONS } from "./action";
import todosReducer, { initialState } from "./reducer";

const Index = () => {
  const [todosState, toDosDispatch] = useReducer(todosReducer, initialState);

  const fetchToDos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      toDosDispatch({ type: ACTIONS.SET_TODOS, data: response.data });
    } catch (err) {
      toDosDispatch({ type: ACTIONS.ERROR });
    }
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  if (todosState.loading) {
    return <div>Loading..............</div>;
  }
  if (todosState.error) {
    return <div>{error}</div>;
  }
  return (
    <div className="todo-list">
      <List
        todos={todosState.todos}
        fetchToDosFunc={fetchToDos}
        toDosDispatchFunc={toDosDispatch}
      />
    </div>
  );
};

export default Index;
