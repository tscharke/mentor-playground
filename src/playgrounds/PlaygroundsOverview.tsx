import { ContentLayout } from '../ContentLayout';
import UsageOfInterfaces from './usageOfInterfaces';

const PlaygroundsOverview = () => (
  <ContentLayout headline="Playgrounds Overview">
    <>
      <UsageOfInterfaces />
      <section>
        <div
          onClick={async () => {
            await import('./index');
          }}
        >
          {' '}
          Click & open the console to see the output of the functions
        </div>
      </section>
    </>
  </ContentLayout>
);

export default PlaygroundsOverview;
