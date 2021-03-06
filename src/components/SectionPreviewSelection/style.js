import { css } from 'styled-components';
import { extRem } from '../../utils';
import theme from '../../config/theme';
import { size, ellipsis, rgba } from 'polished';
import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { status, neutral } = palettes;

export const base = css`
  user-select: none;
  box-sizing: border-box;
  text-align: center;
  padding: ${extRem(24, 16)};
  border: 1px solid ${neutral.low};
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  background-color: ${neutral.lowest};
  color: ${neutral.high};
  position: relative;

  &::after {
    display: ${props => props.checked ? 'block' : 'none'};
    content: '';
    height: ${extRem(4)};
    bottom: -1px;
    left: -1px;
    right: -1px;
    position: absolute;
    background-color: ${status.ok};
  }
  
  ${props => props.checked && `
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  `}
  
  &:hover {
    background-color: ${neutral.lowest};
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  }
`;

export const icon = css`
  ${size(extRem(52))}
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: ${neutral.medium};
  
  ${props => props.checked && `
    color: ${status.ok};
  `}
`;

export const name = css`
  ${typography.header4}
  ${ellipsis()}
  text-transform: uppercase;
  margin: ${extRem(12,0,0,0)};
`;

export const selectButton = css`
  ${typography.small}
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${extRem(12)} auto 0;
  width: ${extRem(145)};
  color: ${neutral.high};
  
  span {
    margin-left: ${extRem(8)};
  }
`;
