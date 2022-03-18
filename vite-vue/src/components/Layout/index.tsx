import {defineComponent, onMounted} from "vue";
import less from './index.module.less';
import Image from '@/components/Image';
import Navigation from "@/components/Navigation";
import Foot from "@/components/Foot";
import {TYPE} from "@/constant";

export default defineComponent({
    name: 'Layout',
    components: {Image},
    setup() {

        const handle = () => {
            import('@/router/routerManager').then(res => res.toList(TYPE.HOME));
        }
        return () => (
            <div class={less.frame}>
                <div class={less.container}>
                    <Image src="./image/logo.png" className={less.logo}
                           onImageClick={handle}>
                    </Image>
                    <div class={less.search}>
                        <input placeholder="请输入关键字"/>
                        <img src="./image/search.png" class={less.icon} alt=""/>
                    </div>
                </div>
                <Navigation/>
                <router-view/>
                <Foot/>
            </div>
        )
    }
});



