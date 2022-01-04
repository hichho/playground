import React, { ReactElement } from 'react';
import Flex from '@/components/Flex';
import less from './index.less';

interface IState {
  hasError: boolean;
}

interface IProps {
  children: ReactElement;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    //  post to the server
    console.log(errorInfo, 'my error');
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex justify="center" alignItems="center" className={less.frame}>
          <h3>这里发生了一点问题...</h3>
        </Flex>
      );
    }
    return this.props.children;
  }
}
