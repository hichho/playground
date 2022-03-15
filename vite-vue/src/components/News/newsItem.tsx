import {defineComponent, PropType} from "vue";
import {TYPE} from "@/constant";
import {useNewsItemApi} from "@/api/homeApi";
import {Typography, Spin} from 'ant-design-vue';
import less from './newsItem.module.less';

const {Paragraph} = Typography;

export default defineComponent({
    name: 'NewsItem',
    props: {
        title: {
            type: String as PropType<string>,
            required: true
        },
        enTitle: {
            type: String as PropType<string>,
            required: true
        },
        typeValue: {
            type: Number as PropType<TYPE.NEWS | TYPE.NOTICE | TYPE.MEETING | TYPE.FILE>,
            required: true
        }
    },
    setup(props) {
        const {loading, data} = useNewsItemApi(props.typeValue);

        return () => (
            <div class={less.frame}>
                <div class={less.title}>
                    <div class={less.left_title}>
                        <h2>{props.title}</h2>
                        <div class={less.line}/>
                        <h2>{props.enTitle}</h2>
                    </div>
                    <div class={less.more}>
                        更多 +
                    </div>
                </div>

                <div class={less.row_line}/>

                {
                    loading.value && <div class={less.list}>
                    <Spin/>
                  </div>
                }
                {
                    !loading.value &&
                  <div class={less.list}>
                      {data?.value?.data.map(item => {
                          return <div class={less.item} key={item.id}>
                              <Paragraph ellipsis={true}
                                         class={less.title}
                                         content={item.name}>
                              </Paragraph>
                              <span class={less.time}>
                                {item.createTime}
                            </span>
                          </div>
                      })}
                  </div>
                }
            </div>
        )
    }
})
