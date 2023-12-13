import { ContentLayout } from '../ContentLayout';
import FirstComponent from './FirstComponent';
import ComponentWithProperties from './PassProperties';
import { AnotherComponent } from './SecondComponent';

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
