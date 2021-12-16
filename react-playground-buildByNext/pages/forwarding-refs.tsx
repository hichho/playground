import React, {FC, ReactElement} from 'react';
import Menu from "../components/Menu";
import useTitle from "../hooks/useTitle";

const ForwardingRefs: FC = (): ReactElement => {
    useTitle('forwarding-ref');
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <Menu/>
    </div>
}
export default ForwardingRefs;

const FancyButton = () => {
    return (
        <div>
            <input/>
            <button>i am a button</button>
        </div>
    )
}
