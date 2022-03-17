import {defineComponent} from "vue";
import ContentContainer from "@/components/ContentContainer";
import List from "@/components/List";

export default defineComponent({
    name: 'List',
    setup() {
        const slots = {
            listContent: () => <List/>,
        }
        return () => (
            <ContentContainer type={'list'}
                              v-slots={slots}>
            </ContentContainer>
        )
    }
});
