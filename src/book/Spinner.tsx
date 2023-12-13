interface Properties {
	readonly message: string;
	readonly show: boolean;
}

const Spinner = ({ message, show }: Properties) => (show ? <div>{message}</div> : null);

export default Spinner;
