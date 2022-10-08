import {useState} from "react";
import Button from "../components/Child";

let renderCount = 0

//save...

function getFiltered(count: number) {
    console.log('in getFiltered')
    renderCount = renderCount + 0.5
    return count % 2
}

function Play() {
    console.log('in render')
    const [count, setCount] = useState(0)
    const filtered = getFiltered(count)

    return (
        <div>
            <div>renderCount: {renderCount}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <div>count: {count}</div>
            <div>filtered: {filtered}</div>
        </div>
    )
}

export default Play