import React, { useState } from "react";
import { IForm, IItemList } from "../types";


export default function Form({todos, setTodos}:IForm) {

    const [errorInput, setErrorInput] = useState();
    const [title, setTitle] = useState("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const e = (event.target as HTMLFormElement);
        const value = e.todo.value;
        const titleExist = todos.find((s:IItemList) => s.title === value);
        if(!value) {
            setErrorInput((prev:any) => ({...prev, [e.todo.id]: `Input ${e.todo.id} is required.`}))
            return;
        };
        const existData = todos.find((s:IItemList) => s.id === self.crypto.randomUUID());
        if (titleExist) {
            setErrorInput((prev:any) => ({...prev, ['title_exist']: titleExist.title}))
            return;
        }
        if (!existData) {
            setTodos((prevTodos) => [
            ...prevTodos,
            { title: value, id: self.crypto.randomUUID(), is_completed: false },
            ]);
            setTitle("")
            return;
        }
        // reset the form
        (event.target as HTMLFormElement).reset();
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTitle((prev:string) => prev + value)
    }
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="todo">
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        value={title}
                        placeholder="Write your next task"
                        onFocus={() => setErrorInput(undefined)}
                        onPointerLeave={() => setErrorInput(undefined)}
                        onChange={(e) => handleOnChange(e)}
                    />
                </label>
                <button>
                    <span className="visually-hidden">Submit</span>
                    <svg>
                        {/* <path d="M12 5 l6 6 -6 6 M6 12 l6 -6 6 6" /> */}
                        <rect fill="none" height="10" width="10"/>
                        <line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" x1="12" x2="36" y1="25" y2="25"/>
                        <line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" x1="24" x2="24" y1="13" y2="37"/>
                    </svg>
                </button>
            </form>
            {errorInput && !!errorInput['todo'] && (<p className="error_text">{errorInput['todo']}</p>)} 
            {errorInput && !!errorInput['title_exist'] && (<p className="error_text">{`Title ${errorInput['title_exist']} is already on the task list.`}</p>)} 
        </>
    );
}