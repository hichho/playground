import {defineComponent} from "vue";
import ContentContainer from "@/components/ContentContainer";

export default defineComponent({
    name: 'List',
    setup() {
        const slots = {
            listContent: () => <div>
                list
            </div>,
        }
        return () => (
                <ContentContainer type={'list'}
                                  v-slots={slots}>
                </ContentContainer>
        )
    }
});
