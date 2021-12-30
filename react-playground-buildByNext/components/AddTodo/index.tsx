import styles from '../../styles/addTodo.module.css';
import {FC, ReactElement, useState} from "react";
import {ITodoItem} from "../../pages/todoList";

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
                 if (inputValue) {
                     add({
                         id: new Date().getTime().toString(),
                         name: inputValue,
                         toggle: false
                     });
                     setValue('');
                 }
             }
             }>
            Add
        </div>

    </div>
}
export default AddTodo;