import { BorderWrapper } from '../BorderWrapper';
import StyledComponent from './StyledComponent1';

const HooksOverview = () => (
	<BorderWrapper show type="solid">
		<>
			<pre>Styled Components Overview</pre>
			<StyledComponent />
		</>
	</BorderWrapper>
);

export default HooksOverview;
