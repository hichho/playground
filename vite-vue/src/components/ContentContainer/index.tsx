import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: 'ContentContainer',
    props: {
        type: {
            type: String as PropType<'list' | 'detail'>,
            required: true,
        }
    },
    setup(props, {slots}) {
        return () => (
            <div>

                {/*{slots.listContent?.()}*/}
                {/*{slots.detailContent?.()}*/}
            </div>
        )
    }
});
