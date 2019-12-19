import React from 'react';
import {render} from 'react-dom';

import eventObserverMap from '../eventObserverMap';

render(
  eventObserverMap,
  document.getElementById('js-root')
);