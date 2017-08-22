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
/* global chai */
/* global describe */
/* global it */

const expect = chai.expect;

import * as Constants from '../../../../app/core/constants';

describe('constants', function() {
  it('should export an object', function() {
    expect(Constants).to.be.an('object');
  });

  it('should define correct labels for BG unit types', function() {
    expect(Constants.MGDL).to.equal('mg/dL');
    expect(Constants.MMOLL).to.equal('mmol/L');
  });

  it('should define the tidepool big data donation account email', function() {
    expect(Constants.TIDEPOOL_DATA_DONATION_ACCOUNT_EMAIL).to.equal('bigdata@tidepool.org');
  });

  it('should define the list tidepool big data donation nonprofit partners', function() {
    expect(Constants.DATA_DONATION_NONPROFITS).to.be.an('array');
    expect(Constants.DATA_DONATION_NONPROFITS.length > 0).to.be.true;
  });
});
