import React, {useRef, useState} from 'react';
import Child from "../components/Child";


export const calculateTimes = (count: number): string | number => {
    return count >= 2 ? Math.ceil((count / 2)) : 1;
}

const Ref2 = () => {
    const [count, setCount] = useState(0);
    const ref = useRef(0);
    ref.current = ref.current + 1;
    console.log('father component render times:' + calculateTimes(ref.current));
    return (<div>
        <div style={{margin: 12}}>i am father count:{count}</div>
        <button style={{margin: 12}}
                onClick={() => setCount(count + 1)}>
            add
        </button>
        <Child/>
    </div>);
}
export default Ref2;