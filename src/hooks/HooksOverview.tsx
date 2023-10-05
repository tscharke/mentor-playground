import {
  UseState,
  UseContext1,
  UseContext2,
  UseContext3,
  CustomHook,
  UseRef,
  UseMemo,
  UseCallback,
  UseReducer
} from './index';
import ComponentUseEffect from './ComponentUseEffectHook';
import ComponentWithState from './ComponentWithState';
import { ComponentWithStateAndChildren } from './ComponentWithStateAndChildren';
import { ContentLayout } from '../ContentLayout';
import React from 'react';
import { ContentLayoutProperties } from '../ContentLayout';

const List = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    {children}
  </div>
);

const Element = (p: ContentLayoutProperties) => (
  <ContentLayout {...p} type="dotted" />
);

const HooksOverview = () => (
  <ContentLayout headline="Hooks Overview">
    <List>
      <Element headline="State">
        <>
          <UseState />
          <ComponentWithState />
          <ComponentWithStateAndChildren />
        </>
      </Element>

      <Element headline="Effect">
        <ComponentUseEffect />
      </Element>

      <Element headline="Ref">
        <UseRef />
      </Element>

      <Element headline="Context">
        <>
          <UseContext1 />
          <UseContext2 />
          <UseContext3 />
        </>
      </Element>

      <Element headline="Memo & Callback">
        <>
          <UseMemo />
          <UseCallback />
          {/* <CustomHook /> */}
        </>
      </Element>

      <Element headline="Reducer">
        <UseReducer />
      </Element>
    </List>
  </ContentLayout>
);

export default HooksOverview;
