import FirstComponent from './FirstComponent';
import { AnotherComponent } from './SecondComponent';
import ComponentWithProperties from './PassProperties';
import { ContentLayout } from '../ContentLayout';

const SimpleComponentsList = () => {
  return (
    <ContentLayout headline="Simple Components">
      <section>
        <FirstComponent />
        <AnotherComponent />
        <ComponentWithProperties />
      </section>
    </ContentLayout>
  );
};

export default SimpleComponentsList;
