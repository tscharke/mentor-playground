import { BorderWrapper } from '../app/components/BorderWrapper';
import StyledComponent from './StyledComponent';

const StyledComponentOverview = () => (
	<BorderWrapper show type="solid">
		<>
			<pre>Styled Components Overview</pre>
			<StyledComponent />
		</>
	</BorderWrapper>
);

export default StyledComponentOverview;
