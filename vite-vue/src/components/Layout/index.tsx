import {defineComponent} from "vue";
import less from './index.module.less';
import Image from '@/components/Image';

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
                <router-view/>
            </div>
        )
    }
});



