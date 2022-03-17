import {defineComponent, PropType} from "vue";
import less from './index.module.less';
import {useRoute} from 'vue-router';
import {INavigationItem, Navigation} from "@/constant";

export default defineComponent({
    name: 'ContentContainer',
    props: {
        type: {
            type: String as PropType<'list' | 'detail'>,
            required: true,
        }
    },
    setup(props, {slots}) {
        const getSelectClass = (item: INavigationItem) => {
            if (useRoute().query?.keyword) {
                return less.no_select;
            } else {
                return Number(useRoute().query.type) === item.key ?
                    less.selected : less.no_select;
            }
        }

        return () => (
            <div class={less.frame}>
                <div class={less.menu}>
                    {Navigation.map(item => {
                        if (item.key > 0) {
                            return (<div key={item.key} class={getSelectClass(item)}
                                         onClick={() => import('@/router/routerManager').then(res => res.goList(item.key))}
                            >
                                {item.name}
                            </div>)
                        }
                    })}
                </div>

                {slots.listContent?.()}
                {slots.detailContent?.()}
            </div>
        )
    }
});
