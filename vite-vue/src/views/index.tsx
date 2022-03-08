import {defineComponent, reactive, toRef, toRefs} from "vue";
import {useRequest} from "vue-request";


export default defineComponent({
    name: 'Index',
    setup() {
        const service = '/app/banner/list';
        const {data, loading} = useRequest(service);
        console.log(loading?.value, data?.value);
        return () => (
            <>
                <h1>{loading?.value ? '1' : '2'}</h1>
                <h1>{data?.value ? '1' : '2'}</h1>
                <h2>{data?.value?.data.map(item => {
                    return <div>{item.createTime}</div>
                })}</h2>
            </>
        )
    }
})

