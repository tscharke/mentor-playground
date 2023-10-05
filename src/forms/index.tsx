import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';
import { ContentLayout } from '../ContentLayout';

const FormsExample = () => {
  return (
    <ContentLayout headline="Form">
      <>
        <Uncontrolled />
        <Controlled />
      </>
    </ContentLayout>
  );
};

export default FormsExample;
