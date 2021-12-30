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
    {id: '1', name: 'memo', toggle: false},
    {id: '2', name: 'useCallback', toggle: false},
    {id: '3', name: 'useMemo', toggle: true},
    {id: '4', name: 'useRef', toggle: false},
    {id: '5', name: 'React', toggle: false},
];

const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos);
    const fatherComponentRenderTime = useRef<number>(0);
    fatherComponentRenderTime.current += 1;

    const handleChange = (todo: ITodoItem) => {
        setTodos([...todos.map((item) => {
            return item.id === todo.id ? todo : item
        })]);
    }
    return <div className={styles.frame}>
        <div className={styles.todo}>

            <div className={styles.title}>
                render: {calculateTimes(fatherComponentRenderTime.current)}
            </div>

            <ul className={styles.ul}>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onChange={handleChange}/>
                ))}
            </ul>
            <AddTodo/>
        </div>
    </div>
}
export default TodoList;