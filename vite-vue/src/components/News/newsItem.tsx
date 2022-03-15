import {defineComponent, PropType, watch} from "vue";
import {TYPE} from "@/constant";
import {useNewsItemApi} from "@/api/homeApi";
import less from './newsItem.module.less';

export default defineComponent({
    name: 'NewsItem',
    props: {
        title: {
            type: String as PropType<string>,
            required: true
        },
        enTitle: {
            type: String as PropType<string>,
            required: true
        },
        typeValue: {
            type: Number as PropType<TYPE.NEWS | TYPE.NOTICE | TYPE.MEETING | TYPE.FILE>,
            required: true
        }
    },
    setup(props) {
        const {loading, data} = useNewsItemApi(props.typeValue);

        watch(data, (value) => {
            console.log(value?.data)
        })

        return () => (
            <div class={less.frame}>
                33
            </div>
        )
    }
})
