import {useEffect, useState} from 'react'
import './App.css'
import * as echarts from "echarts";
// @ts-ignore
import getOption from './renderChart'
import Map from './zhuji.json'



function App() {
    const [echartsObj, setEchartsObj] = useState<Object | null>(null)

    const renderChart = () => {
        const htmlElement = document.getElementById('demo')
        const initedEcharts = echarts.init(htmlElement as HTMLElement);
        // @ts-ignore
        echarts.registerMap('jiangsu', Map);
        initedEcharts.setOption(getOption());

    }



    useEffect(renderChart, [])


    return (
        <div className="App">
            <div id={'demo'} style={{width: '100vw', height: '100vh', backgroundColor: 'gray'}}>

            </div>
        </div>
    )
}

export default App
