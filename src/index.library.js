import OLCesium from './olcs/OLCesium.js';

import AbstractSynchronizer from './olcs/AbstractSynchronizer.js';
import RasterSynchronizer from './olcs/RasterSynchronizer.js';
import VectorSynchronizer from './olcs/VectorSynchronizer.js';

import * as core from './olcs/core.js';
import OLImageryProvider from './olcs/core/OLImageryProvider.js';
import VectorLayerCounterpart from './olcs/core/VectorLayerCounterpart.js';

import LazyLoader from './olcs/contrib/LazyLoader.js';
import Manager from './olcs/contrib/Manager.js';


export default OLCesium;

// Using var for phantomJS
// eslint-disable-next-line no-var
window['olcs'] = {
  OLCesium,
  AbstractSynchronizer,
  RasterSynchronizer,
  VectorSynchronizer,
  core: Object.assign({}, core.default, {
    OLImageryProvider,
    VectorLayerCounterpart
  }),
  contrib: {
    LazyLoader,
    Manager
  }
};
