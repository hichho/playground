import {useMemo} from "react";

const MemoComponent = (props: any) => {

    const rlt = useMemo(() => {
        let start = 0;
        while (start < props.count) {
            if (start % 500 === 0) {
                console.log('memo')
            }
            start++;
        }
        return <div>memo</div>
    }, [props.count < 2000]);

    return (
        <div>
            {rlt}
        </div>
    )
}
export default MemoComponent;
