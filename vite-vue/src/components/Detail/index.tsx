import {defineComponent, onMounted} from "vue";
import less from './index.module.less';
import {useDetailApi} from "@/api/detailApi";
import {Spin} from "ant-design-vue";
import 'ant-design-vue/es/spin/style/index.css';

export default defineComponent({
    name: 'Detail',
    setup() {

        const {loading, data} = useDetailApi();

        onMounted(() => {
            (window as any).uParse("#preview", {
                rootPath: "./",
                chartContainerHeight: 500
            });
        })

        return () => (
            <div class={less.frame}>

                {
                    loading.value &&
                  <div class={less.loading_frame}>
                    <Spin/>

                  </div>
                }

                {/*<div>{JSON.stringify(data.value?.data.content.content)}</div>*/}
                <div class={less.preview}>
                    <div v-html={data.value?.data.content.content}></div>
                </div>
            </div>
        )
    }
});
