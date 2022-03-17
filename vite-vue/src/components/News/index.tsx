import {defineComponent} from "vue";
import {Row, Col} from 'ant-design-vue';
import NewsItem from "@/components/News/newsItem";
import 'ant-design-vue/es/row/style/css';
import 'ant-design-vue/es/col/style/css';
import {TYPE} from "@/constant";

export default defineComponent({
    name: 'News',
    setup() {

        return () => (
            <div style={{width: 1200, display: 'flex', flexDirection: 'column'}}>
                <Row type={'flex'} justify={'space-between'}>
                    <Col span={12} style={{
                        paddingRight: '24px'
                    }}>
                        <NewsItem typeValue={TYPE.NEWS}
                                  title={'工作动态'}
                                  enTitle={'WORK DYNAMICS'}
                        />
                    </Col>
                    <Col span={12} style={{
                        paddingLeft: '24px'
                    }}>
                        <NewsItem typeValue={TYPE.NOTICE}
                                  title={'通知公告'}
                                  enTitle={'WORK DYNAMICS'}
                        />
                    </Col>
                </Row>

                <Row type={'flex'} justify={'space-between'}>
                    <Col span={12} style={{
                        paddingRight: '24px'
                    }}>
                        <NewsItem typeValue={TYPE.MEETING}
                                  title={'会议资料'}
                                  enTitle={'CONFERENCE MATERIALS'}
                        />
                    </Col>
                    <Col span={12} style={{
                        paddingLeft: '12px'
                    }}>
                        <NewsItem typeValue={TYPE.FILE}
                                  title={'政策文件'}
                                  enTitle={'POLICY DOCUMENT'}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
});
