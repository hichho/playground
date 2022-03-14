import {defineComponent, watch} from "vue";
import Banner from "@/components/Banner";

export default defineComponent({
    name: 'Index',
    setup() {

        return () => (
            <div>
                <Banner/>
            </div>
        )
    }
})

