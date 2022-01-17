import React, {Profiler, useState, memo} from 'react';
import MemoComponent from "../components/MemoComponent";
import NotMemory from "../components/NotMemory";


const MemoPage = () => {

    const [renderTimes, setRenderTimes] = useState(1000);


    function onRenderCallback(
        id: string, // 发生提交的 Profiler 树的 “id”
        phase: string, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
        actualDuration: number, // 本次更新 committed 花费的渲染时间
        baseDuration: number, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
        // startTime, // 本次更新中 React 开始渲染的时间
        // commitTime, // 本次更新中 React committed 的时间
        // interactions // 属于本次更新的 interactions 的集合
    ) {
        // 合计或记录渲染时间。。。
        console.log(id + '-test-data', actualDuration, baseDuration)
    }

    // console.log(renderTimes);

    return (
        <div>
            <button onClick={() => setRenderTimes(prevState => prevState + 1)}>
                re-render
            </button>

            <Profiler id='memo' onRender={onRenderCallback}>
                <MemoComponent count={renderTimes}/>
            </Profiler>
            <Profiler id='not-memo' onRender={onRenderCallback}>
                <NotMemory count={renderTimes}/>
            </Profiler>
        </div>
    )
}
export default MemoPage;
