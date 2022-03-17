import {defineComponent} from "vue";
import ContentContainer from "@/components/ContentContainer";
import Detail from "@/components/Detail";

export default defineComponent({
    name: 'DetailPage',
    setup() {
        const slots = {
            detailContent: () => <Detail/>
        }
        return () => (
            <ContentContainer v-slots={slots}
                              type={'detail'}>
            </ContentContainer>
        )
    }
});
