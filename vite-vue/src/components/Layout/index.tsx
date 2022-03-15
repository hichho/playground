import {defineComponent} from "vue";
import less from './index.module.less';
import Image from '@/components/Image';
import Navigation from "@/components/Navigation";
import Foot from "@/components/Foot";

export default defineComponent({
    name: 'Layout',
    components: {Image},
    setup() {
        const handle = () => {
            console.log(123)
        }
        return () => (
            <div class={less.frame}>
                <div class={less.container}>
                    <Image src="/image/logo.png" className={less.logo}
                           onImageClick={handle}>
                    </Image>
                    <div class={less.search}>
                        <input placeholder="请输入关键字"/>
                        <img src="/image/search.png" class={less.icon} alt=""/>
                    </div>
                </div>
                <Navigation/>
                <router-view/>
                <Foot/>
            </div>
        )
    }
});



