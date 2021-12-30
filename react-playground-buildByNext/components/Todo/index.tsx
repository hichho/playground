import React, {FC, ReactElement, useRef, useMemo} from "react";
import styles from '../../styles/todoItem.module.css';
import {calculateTimes} from "../../pages/ref-2";
import {ITodoItem} from "../TodoListComponent/TodoList";

interface IProps {
    todo: ITodoItem;
    onChange: (todo: ITodoItem) => void;
}

const Todo: FC<IProps> = ({todo, onChange}): ReactElement => {
    const childrenRenderTime = useRef<number>(0);
    childrenRenderTime.current += 1;

        return (<div className={styles.item}>
            <div className={styles.left_block}>
                {radio(todo, onChange)}
                <span className={!todo.toggle ? styles.name : styles.delete_name}>{todo.name}</span>
            </div>

            <div className={styles.render_num}>{calculateTimes(childrenRenderTime.current)}</div>
        </div>);

}
export default Todo;

const radio = (todo: ITodoItem, handleClick: (todo: ITodoItem) => void) => {
    const handleRadio = () => {
        handleClick && handleClick({...todo, toggle: !todo.toggle});
    };
    if (todo.toggle) {
        return (<div className={styles.checked}
                     onClick={handleRadio}>
            <div className={styles.center}/>
        </div>);
    } else {
        return (<div className={styles.un_checked}
                     onClick={handleRadio}
        />);
    }
}