import React, {ReactElement} from 'react';

interface IState {
    hasError: boolean;
}

interface IProps {
    children: ReactElement;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log( errorInfo, 'my error');
    }

    render() {
        if (this.state.hasError) {
            return <h1>something went wrong...</h1>;
        }
        return this.props.children;
    }
}
