import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContentLayout, ContentLayoutProperties } from '../app/components/ContentLayout.tsx';
import ComponentUseEffect from './ComponentUseEffectHook';
import ComponentWithState from './ComponentWithState';
import { ComponentWithStateAndChildren } from './ComponentWithStateAndChildren';
import {
	UseCallback,
	UseContext1,
	UseContext2,
	UseContext3,
	UseMemo,
	UseReducerComponent,
	UseRef,
	UseState,
} from './index';

const List = ({ children }: { children: React.ReactNode }) => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
);

const Element = (p: ContentLayoutProperties) => <ContentLayout {...p} type="dotted" />;

const AnchorList = ({ path, anchors }: { path: string; anchors: (string | Record<string, string>)[] }) => (
	<ul style={{ marginLeft: 15 }}>
		{anchors.map((anchor) => {
			const { hash, title } = typeof anchor === 'string' ? { hash: anchor, title: anchor } : anchor;
			return (
				<li key={hash}>
					<Link to={`${path}#${hash}`}>{title}</Link>
				</li>
			);
		})}
	</ul>
);

const TOC = () => {
	const { pathname, hash, key } = useLocation();

	useEffect(() => {
		if (hash === '') {
			window.scrollTo(0, 0);
		} else {
			const elementToJumpTo = document.getElementById(hash.replace('#', ''));
			elementToJumpTo?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, [pathname, hash, key]);

	return (
		<AnchorList
			path={pathname}
			anchors={[
				'useState',
				'useEffect',
				'useRef',
				'useContext',
				{ hash: 'useMemo', title: 'useMemo & useCallback' },
				'useReducer',
			]}
		/>
	);
};

export const HooksOverview = () => (
	<>
		<ContentLayout headline="Hooks Overview">
			<TOC />
			<List>
				<Element headline="State" id="useState">
					<>
						<UseState />
						<ComponentWithState />
						<ComponentWithStateAndChildren />
					</>
				</Element>

				<Element headline="Effect" id="useEffect">
					<ComponentUseEffect />
				</Element>

				<Element headline="Ref" id="useRef">
					<UseRef />
				</Element>

				<Element headline="Context" id="useContext">
					<>
						<UseContext1 />
						<UseContext2 />
						<UseContext3 />
					</>
				</Element>

				<Element headline="Memo & Callback" id="useMemo">
					<>
						<UseMemo />
						<UseCallback />
						{/* <CustomHook /> */}
					</>
				</Element>

				<Element headline="Reducer" id="useRedcuer">
					<UseReducerComponent />
				</Element>
			</List>
		</ContentLayout>
	</>
);
