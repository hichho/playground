import {defineComponent} from "vue";
import {Row, Col} from 'ant-design-vue';
import NewsItem from "@/components/News/NewsItem";
import 'ant-design-vue/es/row/style/css';
import 'ant-design-vue/es/col/style/css';
import {TYPE} from "@/constant";

export default defineComponent({
    name: 'News',
    setup() {

        return () => (
            <div>
                <Row>
                    <Col span={12}>
                        <NewsItem typeValue={TYPE.NEWS}
                                  title={'工作动态'}
                                  enTitle={'WORK DYNAMICS'}
                        />
                    </Col>
                    <Col span={12}>
                        <NewsItem typeValue={TYPE.NOTICE}
                                  title={'通知公告'}
                                  enTitle={'WORK DYNAMICS'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <NewsItem typeValue={TYPE.MEETING}
                                  title={'会议资料'}
                                  enTitle={'WORK DYNAMICS'}
                        />
                    </Col>
                    <Col span={12}>
                        <NewsItem typeValue={TYPE.FILE}
                                  title={'政策文件'}
                                  enTitle={'WORK DYNAMICS'}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
});
