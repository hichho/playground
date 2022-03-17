import {defineComponent, onMounted, ref} from "vue";
import {Pagination, Spin} from "ant-design-vue";
import {useNewsItemApi} from "@/api/homeApi";
import {useRoute} from "vue-router";
import 'ant-design-vue/es/pagination/style/css';
import less from './index.module.less';
import 'ant-design-vue/es/spin/style/index.css';

export default defineComponent({
    name: 'List',
    setup() {
        const current = ref(1);

        const {
            data,
            loading, run
        } = useNewsItemApi(Number(useRoute().query.type), useRoute().query?.keyword as string, true);
        onMounted(() => run(current.value));

        return () => (
            <div class={less.frame}>
                <div class={less.list_container}>
                    {loading.value && <Spin/>}
                    {
                        !loading.value &&
                      <div class={less.list}>
                          {
                              data.value?.data?.map(item => {
                                  return (
                                      <div class={less.item} key={item.id}>
                                          <div>{item.name}</div>
                                          <div>{item.createTime}</div>
                                      </div>
                                  )
                              })
                          }
                      </div>
                    }
                </div>
                <Pagination
                    current={current.value}
                    pageSize={5}
                    total={Number(data?.value?.recordsTotal ?? 0)}
                    onChange={(page) => {
                        current.value = page;
                        run(page);
                    }}
                />
            </div>
        )
    }
});
