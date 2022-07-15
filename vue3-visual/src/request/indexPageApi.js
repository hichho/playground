import useApi from "./index";

const useGetDemoList = () => {
    return useApi('/ithil_j/activity/movie_annual2021');
}

export {
    useGetDemoList
}