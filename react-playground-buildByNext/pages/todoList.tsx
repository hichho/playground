import React, {useRef, useState, useCallback} from "react";
import Todo from "../components/Todo";
import styles from '../styles/todo.module.css';
import {calculateTimes} from "./ref-2";
import AddTodo from "../components/AddTodo";

export interface ITodoItem {
    id: string;
    name: string;
    toggle: boolean;
}


const initialTodos: ITodoItem[] = [
        {id: '1', name: 'vue', toggle: false},
        {id: '2', name: 'react', toggle: false},
        {id: '3', name: 'svelte', toggle: false},
    ]
;

const getUpdated = (todo: ITodoItem, todos: ITodoItem[]): ITodoItem[] => {
    return [...todos, todo];
}

const TodoItem = React.memo(Todo);

const TodoList = () => {
    const [todos, setTodos] = useState<ITodoItem[]>(initialTodos);
    const fatherComponentRenderTime = useRef<number>(0);
    fatherComponentRenderTime.current += 1;

    const handleToggle = useCallback((todo) => {
        setTodos(todos => {
            return [...todos.map((item: ITodoItem) => {
                return item.id === todo.id ? todo : item;
            })];
        });
    }, []);

    const handleAdd = useCallback((todo, todos) => {
        setTodos(getUpdated(todo, todos));
    }, []);


    return <div className={styles.frame}>
        <div className={styles.todo}>

            <div className={styles.title}>
                render: {calculateTimes(fatherComponentRenderTime.current)}
            </div>

            <ul className={styles.ul}>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onChange={handleToggle}/>
                ))}
            </ul>
            <AddTodo add={(todo) => handleAdd(todo, todos)}/>
        </div>
    </div>
}
export default TodoList;
