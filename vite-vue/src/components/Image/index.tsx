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
        onImageClick: {
            type: Function as PropType<() => void>,
        }
    },
    setup(props) {
        const handleChildClick = () => {
            props.onImageClick && props.onImageClick();
        }
        return () => (
            <img src={props.src} alt={props.alt}
                 class={props.className} style={props.style}
                 onClick={handleChildClick}
            />
        )
    },
});
