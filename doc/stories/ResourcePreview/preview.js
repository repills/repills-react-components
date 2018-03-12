import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { ResourcePreview } from '../../../src/components';
import { getRandomResource } from '../../utils/fixtures';

const randomResource = getRandomResource({}).frontmatter;

const onHandleDetailView = ({ reference }) => {
  alert(`Detail view for resource with reference: ${reference}`);
};

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={ResourcePreview}
        dateType={select('Date type', { createdAt: 'Share date', publishedAt: 'Publish date' }, 'createdAt')}
        handleDetailView={onHandleDetailView}
        {...randomResource}
      />
    </SectionPage>
  );
};
