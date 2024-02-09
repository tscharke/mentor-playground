export const Explanation = () => (
	<>
		<p>
			This example demonstrate how the main-thread is blocked by a long-running process, and how a <b>WebWorker</b> can
			help to not blocking it (outsource the work).
		</p>
		<p>Try it yourself…</p>
		<ul>
			<li className="instruction">
				Change the background-color of the marked <code>section</code> by clicking the button w/ lable{' '}
				<code>Change color</code>.
			</li>
			<li className="note">Everything works as expected 🤩</li>
			<li className="instruction">
				Now block the main-thread by clicking the button w/ lable <code>Start process (blocking)</code>
			</li>
			<li className="instruction">
				⏩ Be quick and try to change the background-color again, by clicking the button w/ lable{' '}
				<code>Change color</code>.
			</li>
			<li className="note">Nothing happens 🤷‍ as long the long-running process is running.</li>
		</ul>
		<p>If the main-thread is unblock once more…</p>
		<ul>
			<li className="instruction">
				Start the long-running process beside main-thread, by clicking the button w/ lable{' '}
				<code>Start process (non blocking)</code>
			</li>
			<li className="instruction">
				⏩ Be quick and try to change the background-color again, by clicking the button w/ lable{' '}
				<code>Change color</code>.
			</li>
			<li className="note">
				Everything works as expected. 😃 The main-thread is not blocked, because of the WebWorker.
			</li>
		</ul>
	</>
);
