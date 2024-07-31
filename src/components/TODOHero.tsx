import React from "react";
import { ITodoHeroProps } from "../types";



export default function TODOHero({ todos_completed, total_todos }: ITodoHeroProps) {

    return(
        <section className="todohero_section">
            <div style={{color: "black"}}>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
      </section>
    );
};