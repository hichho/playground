import React, {Suspense, FC} from 'react';


const IndexPage: FC = () => {

    return (
        <Suspense fallback={<div>123</div>}>
            <>
                <div>123</div>
            </>
        </Suspense>
    );
};
export default IndexPage;
