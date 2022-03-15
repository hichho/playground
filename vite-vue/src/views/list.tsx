import {defineComponent} from "vue";
import less from '@/styles/list.module.less';
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
            <div class={less.frame}>
                <ContentContainer type={'list'}
                                  v-slots={slots}>
                </ContentContainer>
            </div>
        )
    }
});
