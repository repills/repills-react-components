import React from 'react';
import { SectionPage, InteractiveExample } from '../../components';
import { TypesList } from '../../../src/components';
import { types } from 'repills-config';
import { getRandomResourceList } from '../../utils/fixtures';

const filteredTypes = Object.keys(types).filter(key => !key.includes('_'));

const data = filteredTypes.reduce((acc, key) => {
  acc[key] = types[key];
  acc[key].resources = getRandomResourceList(0,12);
  return acc;
}, {});

const navigateTo = path => alert(`Navigate to ${path}`);

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <InteractiveExample
        activeKey={'video'}
        component={TypesList}
        navigateTo={navigateTo}
        // shadeColor="#190135"
        types={data}
      />
    </SectionPage>
  );
};
