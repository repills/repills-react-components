import { createSection } from '../../utils/index';
import previewPage from './preview';

const sectionTitle = 'Counter';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', previewPage(sectionTitle, sectionDescription));

