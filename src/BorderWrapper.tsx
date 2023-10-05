import React from 'react';

export type BorderWrapperProperties = {
  children: React.ReactNode;
  show: boolean;
  type?: 'solid' | 'dotted';
};

export const BorderWrapper = ({
  show,
  children,
  type = 'dotted'
}: BorderWrapperProperties) => {
  const preStyle = type === 'dotted' ? '2px dotted' : '1px solid';

  return (
    <div
      style={{
        border: `${preStyle} ${show ? 'green' : 'transparent'}`,
        padding: 3
      }}
    >
      {children}
    </div>
  );
};
