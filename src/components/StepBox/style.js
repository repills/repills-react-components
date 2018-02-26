import { css } from 'styled-components';
import { size } from 'polished';
import { extRem } from '../../utils';
import { SM, MD, LG } from '../../config/breakpoints';
import theme from '../../config/theme';
import { grid } from 'styled-components-grid';

import typography from '../../shared/styles/typography';

const { palettes } = theme;
const { basic, neutral } = palettes;

const indexSizeStripUnit = 40;
const indexSize = extRem(indexSizeStripUnit);

export const base = css`
  text-align: left;
  box-sizing: border-box;
`;

export const header = css`
  position: relative;
  padding: ${extRem(5,0,5,52)};
`;

export const index = css`
  ${typography.body}
  ${size(indexSize)}
  background-color: ${basic.primary};
  color: ${neutral.lowest};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const title = css`
  ${typography.header4}
  color: ${neutral.highest};
  line-height: ${extRem(indexSizeStripUnit - 10)};
  margin: 0;
`;

export const body = css`
  ${typography.body}
  padding: ${extRem(16,0,28)};
  
  &.${SM} {
    padding: ${extRem(14,0,28,32)};
    border-left: ${props => props.last ? 0 : `1px dotted ${neutral.mediumHigh}`};
    margin: ${extRem(2,0,2,19)};
    
    ${props => props.last && `
      margin-left: ${extRem(20)};
    `}
  }
`;


