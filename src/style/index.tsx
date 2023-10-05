import { BorderWrapper } from '../BorderWrapper';
import SyledComponent from './SyledComponent1';

const HooksOverview = () => (
  <BorderWrapper show type="solid">
    <>
      <pre>Styled Components Overview</pre>
      <SyledComponent />
    </>
  </BorderWrapper>
);

export default HooksOverview;
