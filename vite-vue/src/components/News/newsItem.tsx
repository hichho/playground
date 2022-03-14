import {defineComponent, PropType} from "vue";
import {TYPE} from "@/constant";
import {useNewsItemApi} from "@/api/homeApi";

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
        console.log(123)
        const {loading, data} = useNewsItemApi(props.typeValue);

        return () => (
            <div>

            </div>
        )
    }
})
