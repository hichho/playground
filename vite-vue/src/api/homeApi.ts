import useApi, {IResult} from "@/api/index";

interface IBannerResult {
    id: number,
    pic: string | undefined
}
const useBanner=()=>{
    return useApi<IResult<IBannerResult[]>>('/app/banner/list');
}
export  {
    useBanner
}
