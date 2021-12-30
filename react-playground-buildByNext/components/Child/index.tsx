import {ReactElement, useRef, useState} from "react";
import {calculateTimes} from "../../pages/ref-2";

const Child = (): ReactElement => {
    const [count, setCount] = useState<number>(0);
    const ref = useRef(0);
    ref.current = ref.current + 1;
    console.log('children component render times:' + calculateTimes(ref.current));
    return <div style={{margin: 12}}>
        <div>i am children count:{count}</div>
        <button onClick={() => setCount(count + 1)}>add</button>
    </div>
}
export default Child;