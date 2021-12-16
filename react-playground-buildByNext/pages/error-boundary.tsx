import React, {FC, ReactElement} from 'react';
import ErrorBoundary from "../components/ErrorBoundary";

/**
 * it's not working on next.js,because next.js caught this error first
 */

interface IProps {
    heroName: string;
}

const ErrorBoundaryPage: FC = (): ReactElement => {
    return (<div>
        <ErrorBoundary>
            <>
                <Hero heroName='Batman'/>
                <Hero heroName='Superman'/>
                <Hero heroName='Joker'/>
            </>
        </ErrorBoundary>
    </div>);
}

const Hero: FC<IProps> = ({heroName}) => {
    if (heroName === 'Joker') {
        throw  new Error('Not a hero');
    }
    return <h3>
        {heroName}
    </h3>
}
export default ErrorBoundaryPage;
