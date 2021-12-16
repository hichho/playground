import {useEffect} from "react";

const useTitle = (title: string) => {
    console.log(title)
    useEffect(() => {
        document.title = title;
    }, [title]);
}
export default useTitle;
