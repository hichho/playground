import {computed, defineComponent, PropType} from "vue";
import less from './index.module.less';
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
        const getSelectClass = computed(() => 1 === 1 ? less.selected : less.no_select)
        return () => (
            <div class={less.frame}>
                <div>
                    {Navigation.map(item => {
                        if (item.key > 0) {
                            return (<div class={getSelectClass?.value}>
                                {item.name}
                            </div>)
                        }
                    })}
                </div>

                {/*{slots.listContent?.()}*/}
                {/*{slots.detailContent?.()}*/}
            </div>
        )
    }
});
