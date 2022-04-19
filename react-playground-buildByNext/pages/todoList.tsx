import TodoList from "../components/TodoListComponent/TodoList";
import React, {Profiler, useCallback, useRef, useState} from "react";
import styles from "../styles/todo.module.css";
import useRenderTimes from "../hooks/useRenderTimes";

export enum VisibilityType {
    All,
    Active,
    Completed
}


const TodoListPage = () => {

    const [visibility, setVisibility] = useState<VisibilityType>(VisibilityType.All);
    const [themeColor, setColor] = useState<string>('#EE3A8C');
    const fatherComponentRenderTime = useRenderTimes();
    const getCss = (value: VisibilityType) => {
        return visibility === value ? styles.selected : styles.un_selected;
    }

    const handleClick = useCallback((value: VisibilityType) => {
        setVisibility(value);
    }, []);

    const backgroundColor = useCallback(() => `linear-gradient(to top right, blue, ${themeColor})`
        , [themeColor]
    );


    return (
        <Profiler id={'todolist'}
                  onRender={(id, phase, actualDuration, baseDuration) => {
                      console.log(
                          actualDuration,
                          baseDuration,
                      );
                  }}>

            <div className={styles.frame}>

                <div className={styles.title}>
                    render: {fatherComponentRenderTime}
                </div>

                <div className={styles.todo}
                     style={{background: backgroundColor()}}>
                    {/*color*/}
                    <div className={styles.head}>

                        <div className={styles.input_frame}>
                            <input type={'color'} value={themeColor} className={styles.input}
                                   onChange={event => setColor(event.target.value)}
                            />
                        </div>

                        {/*filter*/}
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
                    </div>

                    {/*todoList*/}
                    <TodoList visibilityType={visibility} themeColor={themeColor}/>
                </div>
            </div>
        </Profiler>
    )
}

export default TodoListPage;
