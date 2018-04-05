import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';
import {
  string,
  bool,
  func,
  arrayOf,
  shape
} from 'prop-types';
import cx from 'classnames';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import Logo from '../Logo';
import Spinner from '../Spinner';

const { basic, neutral } = theme.palettes;

import {
  base,
  logoContainer,
  navigation,
  navigationItem,
  wrapper
} from './style';

const BaseStyle = styled.div`${base}`;
const WrapperStyle = styled.div`${wrapper}`;
const LogoContainerStyle = styled.div`${logoContainer}`;
const NavigationStyle = styled.nav`${navigation}`;

function TopNavigation({
  items,
  onClickLogo,
  ...others
}) {

  return (
    <ContainerQuery query={query}>
      {
        params => {
          const loading = Object.keys(params).length === 0;

          return (
            <BaseStyle
              {...others}
            >
              { loading && <Spinner position="absolute" /> }
              <WrapperStyle className={cx(params)}>
                <LogoContainerStyle
                  className={cx(params)}
                  onClick={onClickLogo}
                >
                  <span>
                    <Logo
                      color={basic.primary}
                      secondaryColor={neutral.higher}
                    />
                  </span>
                </LogoContainerStyle>
                {
                  items.length > 0 &&
                  <NavigationStyle
                    className={cx(params)}
                  >
                    {
                      items.filter(i => !i.hidden).map((item, i) => {

                        const NavigationItemStyle = styled[(item.href ? 'a' : 'div')]`${navigationItem}`;

                        return (
                          <NavigationItemStyle
                            key={`item-${i}`}
                            {...item}
                          >
                            {item.label}
                          </NavigationItemStyle>
                        );
                      })
                    }
                  </NavigationStyle>
                }
              </WrapperStyle>
            </BaseStyle>
          );
        }
      }
    </ContainerQuery>
  );
}

TopNavigation.propTypes = {
  items: arrayOf(shape({
    href: string,
    label: string.isRequired,
    onClick: func,
    hidden: bool
  })),
  onClickLogo: func
};

TopNavigation.defaultProps = {
  items: []
};

export default TopNavigation;
