import React from 'react';
import Menu from "../components/Menu";

class Ref extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div>
            <Menu/>
        </div>);
    }
}

export default Ref;
