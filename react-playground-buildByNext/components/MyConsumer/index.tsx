import React from "react";
import {IContext, ThemeContext} from "../../pages/context";

export default class MyConsumer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value: IContext, e:any) {
        value.toggleTheme();
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {value => {
                    return <button onClick={this.handleClick.bind(this, value)}>
                        <div style={{color: value.theme.color}}>
                            i am a button
                        </div>
                    </button>
                }}
            </ThemeContext.Consumer>
        )
    }
}
