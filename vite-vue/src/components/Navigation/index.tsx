import {defineComponent, PropType} from "vue";
import {INavigationItem, Navigation, TYPE} from "@/constant";
import less from './index.module.less';

export default defineComponent({
    name: 'Navigation',
    props: {
        type: {
            type: Number as PropType<TYPE>,
        }
    },
    setup(props) {

        const handleClick = (item:INavigationItem) => {
            import('@/router/routerManager').then(res => res.toList(item.key))
        }

        return () => (
            <div class={less.frame}>
                <div class={less.container}>
                    {Navigation.map(item => {
                        return (
                            <div class={less.navi_item} key={item.key}
                                 onClick={()=>handleClick(item)}
                            >{item.name}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
});
