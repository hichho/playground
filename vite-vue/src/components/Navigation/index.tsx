import {defineComponent, PropType} from "vue";
import {Navigation, TYPE} from "@/constant";
import less from './index.module.less';

export default defineComponent({
    name: 'Navigation',
    props: {
        type: {
            type: Number as PropType<TYPE>,
            required: false,
        }
    },
    setup(props) {
        return () => (
            <div class={less.frame}>
                <div class={less.container}>
                    {Navigation.map(item => {
                        return (
                            <div class={less.navi_item}>{item.name}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
});
