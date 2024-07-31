import React from "react";
import Item from "./ItemList";
import { ITodos } from "../types";

export default function TODOList({todos, setTodos}: ITodos) {

    return (
        <ol className="todo_list">
            {
                todos && todos.length > 0 ? 
                (
                    todos?.map((item, index) => <Item key={index} item={item} setTodos={setTodos} />)
                ) 
                : (
                    <p>Seems lonely in here, what are you up to?</p>
                )
            }
        </ol>
    )
};