import React, {useEffect, useState} from 'react'
import * as echarts from 'echarts';
import {useInterval, useDebounceFn} from "ahooks";


const max = 123;//总数
const unit = 10;//每页条数
const defaultInterval = 1500;//切换时间（毫秒）
const defaultEnd = ((unit - 1) / max) * 100;
const xDataArr = []
const yDataArr = []
for (let i = 0; i < max; i++) {
  xDataArr.push('张' + i)
  yDataArr.push(100 + Math.round(Math.random() * 10))
}

function calculate(count, type, end = defaultEnd) {
  if (type === 'start') {
    return count;
  }
  return count + end;
}

export default function IndexPage() {

  const [chartObj, setChartObj] = useState(null)
  const [start, setStart] = useState(0);//开始
  const [end, setEnd] = useState(defaultEnd);//
  const [interval, setInterval] = useState(defaultInterval);
  const {run:runSetStart} = useDebounceFn((params) => {
    setCountFn(params);
  }, {wait: 500})

  const {run:runSetEnd} = useDebounceFn((params) => {
    setEnd(params);
  }, {wait: 500})

  useEffect(() => {
    if (!chartObj) {
      setChartObj(echarts.init(document.getElementById('chartTarget')))
    }
  }, [])

  useInterval(() => {
    runSetStart()
  }, interval)

  useEffect(() => {
    chartObj && chartObj.setOption({
      xAxis: {
        type: 'category',
        data: xDataArr
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'bar',
          data: yDataArr
        }
      ],
      dataZoom: [
        {
          type: 'slider',
          show: true,
          start: calculate(start, 'start',end),
          end: calculate(start, 'end',end),
          xAxisIndex: [0],
        },
      ],
    })
    chartObj && chartObj.on('dataZoom', (params) => {
      runSetStart(params.start);
      runSetEnd(params.end - params.start)
    })
  }, [chartObj, start])

  function setCountFn(value) {
    if (value) {
      setStart(value)
    } else {
      if (start + end < 100) {
        setStart((prevCount) => {
          return prevCount + end + (1 / max * 100);
        });
      } else {
        setStart(0)
      }
    }
  }

  useEffect(() => {
    console.log(start, end)
  }, [start])


  return (
    <div id={'chartTarget'} style={{width: '80vw', height: '80vh'}} onMouseOver={() => setInterval(undefined)}
         onMouseOut={() => setInterval(defaultInterval)}
    >

    </div>
  );
}
