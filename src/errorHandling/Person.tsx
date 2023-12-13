type Properties = {
	person: Person;
};

type Person = {
	firstName: string;
	lastName: string;
};

const PersonComp = ({ person: { firstName, lastName } }: Properties): JSX.Element => {
	const name = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;

	return <div>Name of the person is: {name}</div>;
};

export default PersonComp;
