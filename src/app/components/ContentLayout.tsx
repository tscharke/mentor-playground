import { BorderWrapper, BorderWrapperProperties } from './BorderWrapper';

export type ContentLayoutProperties = Pick<BorderWrapperProperties, 'children' | 'type' | 'id'> & {
	headline: string;
};

export const ContentLayout = ({ headline, children, type = 'solid', ...props }: ContentLayoutProperties) => (
	<>
		<BorderWrapper show type={type} {...props}>
			<>
				<pre>{headline}</pre>
				{children}
			</>
		</BorderWrapper>
	</>
);
