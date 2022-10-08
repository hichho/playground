import Menu from "../components/Menu";
import React from "react";


const Hoc = () => {

    const CommitList = widthSubscription(commitListComponent, {id: '123'});
    const BlogList = widthSubscription(blogListComponent, {id: '456'});

    return <div>
        <Menu/>
        <CommitList/>
        <BlogList/>
    </div>
}


const widthSubscription = (WrappedComponent: any, componentProps: any): any => {
    return class InsideComponent extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: componentProps.id,
                isBlog: false,
            }
        }

        componentDidMount() {
            if (componentProps.id === '123') {
                this.handleChange();
            }
        }

        handleChange() {
            this.setState({isBlog: true});
        }


        render() {
            return <WrappedComponent data={this.state} {...this.props}/>;
        }
    }
}


const commitListComponent = (props: any) => {
    return <div>commit</div>;
}

const blogListComponent = (props: any) => {
    return <div>blog</div>;
}

export default Hoc;
