import { createStore, combineReducers, applyMiddleware } from "redux";
import { reduceTodos, todosMiddleare } from "./todos";

const reducer = combineReducers({ todos: reduceTodos });

export const store = createStore(reducer, applyMiddleware(todosMiddleare));