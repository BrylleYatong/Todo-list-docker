import React, { InputHTMLAttributes, useEffect } from "react";
import { IItemListProps } from "../types";

export default function Item({item, setTodos}: IItemListProps) {

    const [editing, setEditing] = React.useState(false);
    const inputRef = React.useRef(null);
    const handleEdit = () => {
        setEditing(true);
    };
    const completeTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
              todo.id === item.id
                ? { ...todo, is_completed: !todo.is_completed }
                : todo
            )
          );
    };
    useEffect(() => {
        if (editing && inputRef.current) {
          (inputRef.current as HTMLInputElement).focus();
          // position the cursor at the end of the text
          (inputRef.current as HTMLInputElement).setSelectionRange(
            (inputRef.current as HTMLInputElement).value.length,
            (inputRef.current as HTMLInputElement).value.length
          );
        }
    }, [editing]);
    const handleInpuSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEditing(false);
    };
    const handleInputBlur = () => {
        setEditing(false);
    };
    const handleInputChange = (e: InputHTMLAttributes<HTMLInputElement>) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === item.id ? { ...todo, title: (e as React.ChangeEvent<HTMLInputElement>).target.value } : todo
          )
        );
    };
    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
    };

    return(
        <li id={item.id} className="todo_item" >
            {editing ? (
                <form className="edit-form" onSubmit={handleInpuSubmit}>
                    <label htmlFor="edit-todo">
                        <input
                        ref={inputRef}
                        type="text"
                        name="edit-todo"
                        id="edit-todo"
                        defaultValue={item?.title}
                        onBlur={handleInputBlur}
                        onChange={handleInputChange}
                        />
                    </label>
                </form>
                ) : (
                <>
                    <button className="todo_items_left" onClick={completeTodo}>
                        <svg className="" fill={item.is_completed ? "#22C55E" : "#c2b39a"}>
                            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
                        </svg>
                        <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>{item.title}</p>
                    </button>
                    <div className="todo_items_right">
                        <button onClick={handleEdit}>
                            <span className="visually-hidden">Edit</span>
                            <svg>
                            <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"/>
                            <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"/>
                            </svg>
                        </button>
                        <button onClick={handleDelete}>
                            <span className="visually-hidden">Delete</span>
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <title/>
                            <g data-name="Layer 17" id="Layer_17">
                            <path  d="M24,31H8a3,3,0,0,1-3-3V9A1,1,0,0,1,7,9V28a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V9a1,1,0,0,1,2,0V28A3,3,0,0,1,24,31Z"/>
                            <path  d="M28,7H4A1,1,0,0,1,4,5H28a1,1,0,0,1,0,2Z"/>
                            <path  d="M20,7a1,1,0,0,1-1-1V3H13V6a1,1,0,0,1-2,0V2a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V6A1,1,0,0,1,20,7Z"/>
                            <path  d="M16,26a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0V25A1,1,0,0,1,16,26Z"/>
                            <path  d="M21,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,21,24Z"/>
                            <path  d="M11,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,11,24Z"/>
                            </g>
                            </svg>
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};