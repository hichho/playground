import React, {FC, useCallback, useMemo, useRef, useState} from "react";
import Todo from "../Todo";
import styles from '../../styles/todo.module.css';
import AddTodo from "../AddTodo";
import {VisibilityType} from "../../pages/todoList";
import {calculateTimes} from "../../hooks/useRenderTimes";

export interface ITodoItem {
    id: string;
    name: string;
    toggle: boolean;
}

interface IProps {
    visibilityType: VisibilityType;
    themeColor: string;
}

const initialTodos: ITodoItem[] = [
    {id: '1', name: 'vue', toggle: false},
    {id: '2', name: 'react', toggle: false},
    {id: '3', name: 'svelte', toggle: false},
];

const TodoItem = React.memo(Todo);

const getFiltered = (todos: ITodoItem[], visibilityType: VisibilityType) => {
    switch (visibilityType) {
        case VisibilityType.Active:
            return todos.filter(item => !item.toggle);
        case VisibilityType.Completed:
            return todos.filter(item => item.toggle);
        default:
            return todos;
    }
}


const TodoList: FC<IProps> = ({visibilityType, themeColor}) => {
    const [todos, setTodos] = useState<ITodoItem[]>(initialTodos);

    const filteredCount = useRef<number>(0);

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

    const filtered = useMemo(() => {
        filteredCount.current += 1;
        return getFiltered(todos, visibilityType);
    }, [todos, visibilityType]);

    // const filtered = ()=>{
    //     return getFiltered(todos, visibilityType);
    // };


    return (
        <>
            <div>
                render: {calculateTimes(filteredCount.current)}
            </div>
            <ul className={styles.ul}>
                {filtered.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onChange={handleToggle}/>
                ))}
            </ul>
            <AddTodo add={handleAdd}/>
        </>
    )
}
export default TodoList;
