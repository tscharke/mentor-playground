type LoaderProperties = {
	waitTime: number;
};

export const Loader = ({ waitTime }: LoaderProperties) => (
	<section>
		Fetching data… <span className="text-sm">(Please wait {waitTime} seconds)</span>
	</section>
);
