import {defineComponent} from "vue";
import Banner from "@/components/Banner";
import News from "@/components/News";

export default defineComponent({
    name: 'Index',
    setup() {

        return () => (
            <div>
                <Banner/>
                <News/>
            </div>
        )
    }
})

