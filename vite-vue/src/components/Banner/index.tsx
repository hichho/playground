import {defineComponent, watch} from "vue";
import {useBannerApi} from "@/api/homeApi";
import {Spin, Carousel} from 'ant-design-vue';
import Image from '@/components/Image';
import 'ant-design-vue/es/spin/style/index.css';
import 'ant-design-vue/es/carousel/style/index.css';
import less from './index.module.less';

export default defineComponent({
    name: 'Banner',
    setup() {
        const {loading, data} = useBannerApi();
        // watch(data, (newValue, oldValue) => {
        //     console.log(newValue, oldValue);
        // })
        return () => (
            <>
                {loading.value && <div class={less.frame}>
                  <Spin/>
                </div>}
                {
                    !loading.value &&
                  <div class={less.frame}>
                    <Carousel class={less.container}>
                        {data?.value?.data.map(item => {
                            return (
                                <div class={less.item} key={item.id}>
                                    <Image class={less.img}
                                           src={item.pic}
                                    />
                                </div>
                            )
                        })}
                    </Carousel>
                  </div>
                }
            </>
        )
    }
});
