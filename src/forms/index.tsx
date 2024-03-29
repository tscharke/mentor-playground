import { ContentLayout } from '../app/components/ContentLayout';
import Controlled from './Controlled';
import Uncontrolled from './Uncontrolled';

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
