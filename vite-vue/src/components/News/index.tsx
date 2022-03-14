import {defineComponent} from "vue";
import {Row, Col} from 'ant-design-vue';
import 'ant-design-vue/es/row/style/css';
import 'ant-design-vue/es/col/style/css';

export default defineComponent({
    name: 'News',
    setup() {

        return () => (
            <div>
                <Row>
                    <Col span={14}>
                        1
                    </Col>
                    <Col span={10}>
                        2
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        3
                    </Col>
                    <Col span={12}>
                        4
                    </Col>
                </Row>
            </div>
        )
    }
});
