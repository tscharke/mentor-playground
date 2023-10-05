import { BorderWrapper, BorderWrapperProperties } from './BorderWrapper';

export type ContentLayoutProperties = Pick<
  BorderWrapperProperties,
  'children' | 'type'
> & {
  headline: string;
};

//   show: boolean;

export const ContentLayout = ({
  headline,
  children,
  type = 'solid'
}: ContentLayoutProperties) => (
  <>
    <BorderWrapper show type={type}>
      <>
        <pre>{headline}</pre>
        {children}
      </>
    </BorderWrapper>
  </>
);
