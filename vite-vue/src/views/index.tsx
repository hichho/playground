import {defineComponent} from "vue";
import {useRequest} from "vue-request";

interface IResult {
    code: number,
    data: {
        createTime: string
    }[],
}

export default defineComponent({
    name: 'Index',
    setup() {
        const service = '/app/banner/list';
        const {data, loading} = useRequest<IResult>(service);
        console.log(loading?.value);
        console.log(loading)
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

