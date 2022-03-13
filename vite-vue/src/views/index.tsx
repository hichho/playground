import {defineComponent, watch} from "vue";
import useApi from "@/api";

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
        // const { data, loading } = useRequest<IResult>(service);
        const {loading, data} = useApi<IResult>(service);

        watch(data, (oldValue, newValue) => {
            console.log(oldValue, newValue);
        })

        return () => (
            <>
                <div>{loading?.value ? 'loading...' : 'over'}</div>
                {/* <h1>{loading?.value ? '1' : '2'}</h1>
                <h1>{data?.value ? '1' : '2'}</h1>
                <h2>{data?.value?.data.map(item => {
                    return <div>{item.createTime}</div>
                })}</h2> */}
            </>
        )
    }
})

