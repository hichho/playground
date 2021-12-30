import {FC, ReactElement, useRef} from "react";
import {ITodoItem} from "../../pages/todoList";
import styles from '../../styles/todoItem.module.css';

interface IProps {
    todo: ITodoItem;
    onChange: (todo: ITodoItem) => void;
}

const Todo: FC<IProps> = ({todo, onChange}): ReactElement => {
    const childrenRenderTime = useRef<number>(0);
    childrenRenderTime.current += 1;


    return (<div className={styles.item}>
        {radio(todo, onChange)}
        {todo.id}
    </div>);
}
export default Todo;


const radio = (todo: ITodoItem, handleClick: (todo: ITodoItem) => void) => {
    const handleRadio = () => {
        handleClick && handleClick({...todo, toggle: !todo.toggle});
    };
    if (todo.toggle) {
        return (<div className={styles.checked}
                     onClick={handleRadio}
        >
            <div className={styles.center}/>
        </div>);
    } else {
        return (<div className={styles.un_checked}
                     onClick={handleRadio}
        />);
    }
}