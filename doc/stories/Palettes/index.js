import { createSection } from '../../utils/index';
import basic from './basic';
import neutral from './neutral';
import types from './types';

const sectionTitle = '1. Colour palettes';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', basic(sectionTitle, sectionDescription))
  .add('Neutral', neutral(sectionTitle, sectionDescription))
  .add('Types', types(sectionTitle, sectionDescription));
