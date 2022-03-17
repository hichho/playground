import {defineComponent, onMounted, ref, watch} from "vue";
import {Pagination, Spin} from "ant-design-vue";
import {useNewsItemApi} from "@/api/homeApi";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import 'ant-design-vue/es/pagination/style/css';
import less from './index.module.less';
import 'ant-design-vue/es/spin/style/index.css';

export default defineComponent({
    name: 'List',
    setup() {
        const query = useRoute().query;
        const current = ref(1);
        const keyword = ref(query.keyword);
        const type = ref(query.type);
        const {
            data,
            loading, run
        } = useNewsItemApi(2, true);

        onMounted(() => run(current.value, keyword.value, type.value));

        onBeforeRouteUpdate(info => {
            current.value = 1;
            keyword.value = info.query.keyword;
            type.value = info.query.type;
            run(current.value, keyword.value, type.value);
        })


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
                    class={less.pagination}
                    current={current.value}
                    pageSize={5}
                    total={Number(data?.value?.recordsTotal ?? 0)}
                    onChange={(page) => {
                        current.value = page;
                        run(current.value, keyword.value, type.value);
                    }}
                />
            </div>
        )
    }
});
