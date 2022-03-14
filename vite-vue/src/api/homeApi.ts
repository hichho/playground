import useApi, {IResult} from "@/api/index";

interface IBannerResult {
    id: number,
    pic: string | undefined
}
const useBannerApi=()=>{
    return useApi<IResult<IBannerResult[]>>('/app/banner/list');
}
export  {
    useBannerApi
}
