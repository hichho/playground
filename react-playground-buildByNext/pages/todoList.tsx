import {useRef, useState} from "react";
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

const getUpdated = (type: 'add' | 'toggle', payload: ITodoItem, origin: ITodoItem[]) => {
    switch (type) {
        case 'add':
            return [...origin, payload];
        case 'toggle':
            return [...origin.map((item) => {
                return item.id === payload.id ? payload : item;
            })]
        default:
            return origin;
    }
}


const TodoList = () => {
    const [todos, setTodos] = useState<ITodoItem[]>(initialTodos);
    const fatherComponentRenderTime = useRef<number>(0);
    fatherComponentRenderTime.current += 1;


    const handleChange = (type: 'add' | 'toggle', todo: ITodoItem) => {
        setTodos(getUpdated(type, todo, todos));
    }
    return <div className={styles.frame}>
        <div className={styles.todo}>

            <div className={styles.title}>
                render: {calculateTimes(fatherComponentRenderTime.current)}
            </div>

            <ul className={styles.ul}>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onChange={(todo) => {
                        handleChange('toggle', todo)
                    }}/>
                ))}
            </ul>
            <AddTodo add={(todo) => handleChange('add', todo)}/>
        </div>
    </div>
}
export default TodoList;