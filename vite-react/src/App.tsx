import {useEffect} from 'react'
import './App.css'
import * as echarts from "echarts";
// @ts-ignore
import getOption from './renderChart'
import Map from './zhuji.json'
import TestMap from './jiangsu.json'


function App() {

    function renderChart() {
        const htmlElement = document.getElementById('demo')
        const initedEcharts = echarts.init(htmlElement as HTMLElement);
        // @ts-ignore
        echarts.registerMap('zhuji', Map);
        initedEcharts.setOption(getOption());
    }

    function renderTestChart() {
        const htmlElement = document.getElementById('test')
        const initedEcharts = echarts.init(htmlElement as HTMLElement);
        // @ts-ignore
        echarts.registerMap('jiangsu', testTrans(TestMap));
        initedEcharts.setOption(getOption());
    }

    function testTrans(data:any):any{
        const features = data.features.map((item:any,index:number)=>{
            item.id = index+1;
            item.properties = {
                id:index+1,
                name:index+1,
                site:'www.poi86.com'
            }
            // if(item.geometry){
            //     item.geometry.coordinates = [item.geometry.coordinates]
            // }
            return item;
        })
        sessionStorage.setItem('key',JSON.stringify({...data,features}))
        return {...data,features};
    }



    useEffect(()=>{
        // renderChart();
        renderTestChart();
    }, [])

    return (
        <div className="App">
            <div id={'test'} style={{width: '50vw', height: '80vh', backgroundColor: 'gray',border:'1px solid red'}}>

            </div>
        </div>
    )
}

export default App
