import { FC } from 'react';

export const Headline: FC = ({ children }) => (
  <div style={{ textDecoration: 'underline', fontSize: 20 }}>{children}</div>
);

export const SubTitle: FC<{ disappearPrefix?: boolean }> = ({
  children,
  disappearPrefix = false
}) => (
  <h2>
    <pre style={{ display: 'inline-block' }}>{children}</pre>
    {disappearPrefix ? null : '-Component'}
  </h2>
);
