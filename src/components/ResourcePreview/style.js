import { css } from 'styled-components';
import theme from '../../config/theme';
import { rgba, ellipsis } from 'polished';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { neutral } = theme.palettes;
const mainColor = neutral.lower;

export const base = css`
  text-align: left;
  background-color: ${neutral.lowest};
  // cursor: pointer;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  border-top: 4px solid ${props => props.color};
`;

export const mainInfo = css`
  padding: ${extRem(12,12,24)};
  background-color: ${mainColor};
  border: 1px solid ${neutral.medium};
  border-top: 0;
  display: block;
  text-decoration: none;
  color: currentColor;
`;

export const source = css`
  ${typography.small}
  color: ${neutral.high};
  display: flex;
  align-items: center;
  line-height: 1;
  
  span {
    margin-left: ${extRem(5)};
  }
`;

export const author = css`
  ${typography.small}
  ${ellipsis()}
  color: ${neutral.high};
  margin-left: ${extRem(8)};
  
  span {
    font-weight: bold;
  }
`;

export const title = css`
  ${typography.header4}
  color: ${neutral.highest};
  margin: ${extRem(16, 0)};
  height: ${extRem(90)};
  position: relative;
  overflow: hidden;
  
  a {
    color: currentColor;
    text-decoration: none;
  }
  
  &::after {
    content: '';
    height: ${extRem(30)};
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, ${rgba(mainColor, 0)}, ${mainColor});
    position: absolute;
  }
`;

export const secondaryInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${extRem(12)};
  border: 1px solid ${neutral.medium};
  border-top: 0;
`;

export const detail = css`
  ${typography.small}
  color: ${neutral.high};
  display: flex;
  align-items: center;
  // justify-content: space-between;
`;

export const type = css`
  line-height: 1;
  display: inline-flex;
  align-items: center;
  margin-right: ${extRem(8)};
  
  span {
    margin-left: ${extRem(5)};
  }
`;

export const date = css`
  ${typography.small}
  line-height: 1;
  color: ${neutral.high};
`;
