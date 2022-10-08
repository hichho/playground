import {ReactElement, useState} from "react";
import useRenderTimes from "../../hooks/useRenderTimes";

const Child = (): ReactElement => {
    const [count, setCount] = useState<number>(0);
    const renderTimes = useRenderTimes();
    console.log('children component render times:' + renderTimes);
    return <div style={{margin: 12}}>
        <div>i am children count:{count}</div>
        <button onClick={() => setCount(count + 1)}>add</button>
    </div>
}
export default Child;
