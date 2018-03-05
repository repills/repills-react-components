import React from 'react';
import ResourcePreview from '../ResourcePreview';
import ResourceMiniPreview from '../ResourceMiniPreview';
import cx from 'classnames';
import {
  arrayOf,
  shape,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import { base, items, item } from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

function ResourcesList({
  resources,
  variant
}) {

  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle>
            <ItemsStyle className={cx(params)}>
              {
                resources.map(resource => {
                  return (
                    <ItemStyle
                      className={cx(params)}
                      key={resource.link}
                    >
                      {
                        variant === 'mini' ?
                          <ResourceMiniPreview
                            {...resource}
                          />
                          :
                          <ResourcePreview
                            {...resource}
                          />
                      }

                    </ItemStyle>
                  );
                })
              }
            </ItemsStyle>
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
}

ResourcesList.propTypes = {
  resources: arrayOf(shape(ResourcePreview.propTypes)).isRequired,
  variant: oneOf(['default', 'mini'])
};

export default ResourcesList;
