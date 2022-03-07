import {CSSProperties, defineComponent, PropType} from "vue";

export default defineComponent({
    name: 'Image',
    props: {
        src: {
            type: String as PropType<string>,
        },
        alt: {
            type: String as PropType<string>,
            default: '浙江特殊教育职业技术学院'
        },
        className: {
            type: String as PropType<string>,
        },
        style: {
            type: Object as PropType<CSSProperties>,
        },
        // onImageClick: {
        //     type: Function as PropType<(value: string) => void>,
        // }
    },
    emits:['onImageClick'],
    setup(props, context) {
        const handleChildClick = () => {
            context.emit('onImageClick', '子组件回调的值');
        }
        return () => (
            <img src={props.src} alt={props.alt}
                 class={props.className} style={props.style}
                 onClick={handleChildClick}
            />
        )
    },
});
