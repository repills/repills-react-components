import { css } from 'styled-components';
import { lighten, rgba } from 'polished';
import { grid } from 'styled-components-grid';
import theme from '../../config/theme';
import { XS } from '../../config/breakpoints';
import { extRem } from '../../utils';
import typography from '../../shared/styles/typography';

const { basic, neutral } = theme.palettes;
const mainColor = lighten(0.2, neutral.lowest);

export const base = css`
`;

