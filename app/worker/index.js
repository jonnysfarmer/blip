/*
 * == BSD2 LICENSE ==
 * Copyright (c) 2017, Tidepool Project
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 *
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 * == BSD2 LICENSE ==
 */

/* global importScripts, onmessage, postMessage */

import _ from 'lodash';
import Promise from 'bluebird';
import DataWorker from './DataWorker';
import PDFWorker from './PDFWorker';

const dataWorker = new DataWorker();
const pdfWorker = new PDFWorker();

// eslint-disable-next-line no-native-reassign
onmessage = (msg) => {
  switch(_.get(msg, 'data.meta.worker')) {
    case 'pdf':
      pdfWorker.handleMessage(msg, postMessage);
      break;

    case 'data':
      dataWorker.handleMessage(msg, postMessage);
      break;
  }
};