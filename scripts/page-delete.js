import rimraf from 'rimraf';

import { getParams } from './utils';

const { dir, file } = getParams();

rimraf.sync(dir);
rimraf.sync(file);
