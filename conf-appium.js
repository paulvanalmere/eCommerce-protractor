//  conf-appium.js
//  Created by Paul Lai on 03/10/2016.
//  Copyright (c)

exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',
  specs: ['./tests/deBijenkorf.shop.spec.js'],

  // configuring wd in onPrepare
  // wdBridge helps to bridge wd driver with other selenium clients
  // See https://github.com/sebv/wd-bridge/blob/master/README.md
  onPrepare: function () {
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
  },

  capabilities: {
    browserName: 'chrome',
    'appium-version': '1.5.3',
    platformName: 'Android',
    platformVersion: '6.0',
    deviceName: 'Android Emulator',
	}
}