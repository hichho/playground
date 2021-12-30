import TodoList from "../components/TodoListComponent/TodoList";
import React, {useCallback, useRef, useState} from "react";
import styles from "../styles/todo.module.css";
import {calculateTimes} from "./ref-2";

export enum VisibilityType {
    All,
    Active,
    Completed
}

const TodoListPage = () => {

    const fatherComponentRenderTime = useRef<number>(0);
    const [visibility, setVisibility] = useState<VisibilityType>(VisibilityType.All);
    fatherComponentRenderTime.current += 1;

    const getCss = (value: VisibilityType) => {
        return visibility === value ? styles.selected : styles.un_selected;
    }

    const handleClick = useCallback((value: VisibilityType) => {
        setVisibility(value);
    }, []);

    return (
        <div className={styles.frame}>

            <div className={styles.title}>
                render: {calculateTimes(fatherComponentRenderTime.current)}
            </div>

            <div className={styles.todo}>
                {/*head*/}
                <div className={styles.filter}>
                    <div className={getCss(VisibilityType.All)}
                         onClick={() => handleClick(VisibilityType.All)}
                    >All
                    </div>
                    <div
                        className={getCss(VisibilityType.Active)}
                        onClick={() => handleClick(VisibilityType.Active)}
                    >Active
                    </div>
                    <div
                        className={getCss(VisibilityType.Completed)}
                        onClick={() => handleClick(VisibilityType.Completed)}
                    >Completed
                    </div>
                </div>

                {/*todoList*/}
                <TodoList visibilityType={visibility}/>
            </div>
        </div>
    )
}

export default TodoListPage;