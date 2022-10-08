import {FC, ReactElement} from "react";

const Resource: FC = (): ReactElement => {
    const len = 3000;
    debugger;
    return (
        <ul>
            {Array(len).fill(0).map(
                (_,i)=><li key={i}>{_}</li>
            )}
        </ul>
    )

}
export default Resource