import { useState } from 'react';
import Person from './Person';
import ReactErrorBoundary from './ErrorBoundary';
import Counter from './Counter';
import { ContentLayout } from '../ContentLayout';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './Fallback';
import { Navigation } from './Navigation';
import { TrueExpression } from './TrueExpression';

export type Mode = 'normal' | 'extended';

/*
  Demo to show React's ErrorBoundary and there limitations.
  
  And implement a different approach with the 3-Party-Hook
  "react-error-boundary"
    -> https://github.com/bvaughn/react-error-boundary
*/
const ErrorHandlingDemo = () => {
  const [mode, setMode] = useState<Mode>('normal');

  return (
    <ContentLayout headline="ErrorHandlingDemo">
      <>
        <TrueExpression expression={mode === 'normal'}>
          <ReactErrorBoundary>
            <>
              <Person person={{ firstName: 'Thomas', lastName: 'Scharke' }} />
            </>
            <Counter maxCount={3} mode={mode} />
          </ReactErrorBoundary>
        </TrueExpression>
        <TrueExpression expression={mode === 'extended'}>
          <ErrorBoundary
            FallbackComponent={Fallback}
            onError={(error: any, errorInfo: any) => {
              console.log('[ErrorHandlingDemo|onError]', {
                error,
                errorInfo
              });
            }}
          >
            <>
              <Person person={{ firstName: 'Thomas', lastName: 'Scharke' }} />
            </>
            <Counter maxCount={3} mode={mode} />
          </ErrorBoundary>
        </TrueExpression>
        <Navigation callback={setMode} />
      </>
    </ContentLayout>
  );
};

export default ErrorHandlingDemo;
