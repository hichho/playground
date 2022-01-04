import React, {Suspense, lazy} from 'react';
import {Spin} from 'antd';

const ErrorBoundary = lazy(() => import('@/components/ErrorBoundary'));

const Layout = (props: any) => {
    return (
        <Suspense fallback={<Spin/>}>
            <ErrorBoundary>
                {props.children}
            </ErrorBoundary>
        </Suspense>
    );
};
export default Layout;
