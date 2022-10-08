import React from 'react';
import Menu from "../components/Menu";

class Ref extends React.Component<any, any> {
    private textInput: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.state = {};
    }

    focusTextInput() {
        this.textInput.current?.focus();
    }

    render() {
        return (<div>
            <Menu/>

            <input ref={this.textInput}/>

            <button onClick={this.focusTextInput.bind(this)}>focus</button>


        </div>);
    }
}

export default Ref;
