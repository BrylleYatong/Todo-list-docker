import React, { Dispatch, SetStateAction } from "react"

export interface ITodoHeroProps {
    todos_completed: number,
    total_todos: number,
}

export interface IItemList {
    id: string,
    title: string,
    is_completed: boolean,
}

export interface IItemListProps {
    item: IItemList,
    setTodos: Dispatch<SetStateAction<IItemList[]>>
}

export interface ITodos {
    todos: IItemList[]
    setTodos: Dispatch<SetStateAction<IItemList[]>>
}

export interface IForm {
    todos: IItemList[]
    setTodos: Dispatch<SetStateAction<IItemList[]>>
}

