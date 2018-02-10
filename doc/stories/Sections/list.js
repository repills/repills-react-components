import React from 'react';
import { number } from '@storybook/addon-knobs/react';
import { SectionPage, InteractiveExample } from '../../components';
import { SectionsList } from '../../../src/components';
import { getRandomSectionList } from '../../utils/fixtures';

export default (sectionTitle, sectionDescription) => () => {

  const navigateTo = path => alert(`Navigate to ${path}`);

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        component={SectionsList}
        navigateTo={navigateTo}
        sections={getRandomSectionList(number('Sezioni', 6, {
          range: true,
          min: 1,
          max: 12,
          step: 1,
        }))}
      />
    </SectionPage>
  );
};
