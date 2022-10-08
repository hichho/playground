import styles from '../../styles/addTodo.module.css';
import React, {FC, ReactElement, useState} from "react";
import {ITodoItem} from "../TodoListComponent/TodoList";

interface IProps {
    add: (todo: ITodoItem) => void;
}

const AddTodo: FC<IProps> = ({add}): ReactElement => {
    const [inputValue, setValue] = useState<string>('');
    return <div className={styles.frame}>

        <input value={inputValue} onChange={e => setValue(e.target.value)} className={styles.input}
               placeholder={'Add todo'}
        />
        <div className={styles.add}
             onClick={() => {
                 add({
                     id: new Date().getTime().toString(),
                     name: inputValue === '' ? 'oops' : inputValue,
                     toggle: false
                 });
                 setValue('');
             }
             }>
            Add
        </div>
    </div>
}
export default React.memo(AddTodo);