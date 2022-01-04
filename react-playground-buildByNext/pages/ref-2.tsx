import React, {useState} from 'react';
import Child from "../components/Child";
import useRenderTimes from "../hooks/useRenderTimes";


const Ref2 = () => {
    const [count, setCount] = useState(0);
    const renderTimes = useRenderTimes();
    console.log('father component render times:' + renderTimes);
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
