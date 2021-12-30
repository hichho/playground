import React, {FC, useCallback, useState} from "react";
import Todo from "../Todo";
import styles from '../../styles/todo.module.css';
import AddTodo from "../AddTodo";
import {VisibilityType} from "../../pages/todoList";

export interface ITodoItem {
    id: string;
    name: string;
    toggle: boolean;
}

interface IProps {
    visibilityType: VisibilityType
}

const initialTodos: ITodoItem[] = [
    {id: '1', name: 'vue', toggle: false},
    {id: '2', name: 'react', toggle: false},
    {id: '3', name: 'svelte', toggle: false},
];

const TodoItem = React.memo(Todo);

const TodoList: FC<IProps> = ({visibilityType}) => {
    const [todos, setTodos] = useState<ITodoItem[]>(initialTodos);


    const handleToggle = useCallback((todo) => {
        setTodos(todos => {
            return [...todos.map((item: ITodoItem) => {
                return item.id === todo.id ? todo : item;
            })];
        });
    }, []);

    const handleAdd = useCallback((todo) => {
        setTodos(todos => [...todos, todo]);
    }, []);

    const filtered = (): ITodoItem[] => {
        switch (visibilityType) {
            case VisibilityType.Active:
                return todos.filter(item => !item.toggle);
            case VisibilityType.Completed:
                return todos.filter(item => item.toggle);
            default:
                return todos;
        }
    }
    return (
        <>
            <ul className={styles.ul}>
                {filtered().map(todo => (
                    <TodoItem key={todo.id} todo={todo} onChange={handleToggle}/>
                ))}
            </ul>
            <AddTodo add={handleAdd}/>
        </>
    )
}
export default TodoList;
