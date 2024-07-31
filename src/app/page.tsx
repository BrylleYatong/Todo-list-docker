'use client'
import React, { useState } from "react";
import Form from "@/src/components/Form";
import Header from "@/src/components/Header";
import TODOHero from "@/src/components/TODOHero";
import TODOList from "@/src/components/TODOList";
import { IItemList } from "../types";

export default function Home() {
  const [todos, setTodos] = useState<IItemList[]>([]);
  console.log("%c 🇲🇦: Home -> todos ", "font-size:16px;background-color:#d48159;color:white;", todos)
  const todos_completed = todos.filter(
    (todo) => todo?.is_completed === true
  ).length;
  const total_todos = todos.length;

  return(
    <div className="wrapper">
      <Header/>
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos}/>
    </div>
  );
};