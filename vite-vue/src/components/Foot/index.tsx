import {defineComponent} from "vue";
import {useFootApi} from "@/api/homeApi";
import less from './index.module.less';

export default defineComponent({
    name: 'Foot',
    setup() {
        const {loading, data} = useFootApi();
        return () => (
            <div class={less.frame}>
                {loading.value && <span>loading...</span>}
                <div>
                    {data.value?.data}
                </div>
            </div>
        )
    }
});
