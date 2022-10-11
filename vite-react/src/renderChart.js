export default function getOption(){
    const aspectScale = 1.2;
    const zoom = 1;
    let option = {
        geo: [
            {
                name: 'jiangsu',
                map: 'jiangsu',
                roam: false, //是否允许缩放
                zoom: zoom, //默认显示级别
                z: 199,
                aspectScale: aspectScale, //地图长宽比
                // layoutSize: "100%",
                scaleLimit: {
                    //缩放级别
                    min: 0.5,
                    max: 2,
                },
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                        fontSize: 15,
                    },
                    emphasis: {
                        show: true,
                        color: '#fff',
                        fontSize: 15,
                    },
                },
                itemStyle: {
                    normal: {
                        borderColor: '#17caf0',
                        borderWidth: 2,
                        borderType: 'solid',
                    },
                },
                emphasis: {
                    itemStyle: {
                        areaColor: 'rgba(14,64,157,1)',
                        shadowColor: 'rgba(254,240,59,0.7)',
                        shadowBlur: 30,
                        borderColor: 'rgba(254,240,59,0.6)',
                        borderWidth: 2,
                    },
                },
            },
        ],
        animation: false,
    };
    return option;
}
