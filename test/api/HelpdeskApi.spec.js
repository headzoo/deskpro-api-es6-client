/**
 * DeskPRO API
 * DeskPRO API
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DeskProApi);
  }
}(this, function(expect, DeskProApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DeskProApi.HelpdeskApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('HelpdeskApi', function() {
    describe('getHelpdeskAgentClientInfo', function() {
      it('should call getHelpdeskAgentClientInfo successfully', function(done) {
        //uncomment below and update the code to test getHelpdeskAgentClientInfo
        //instance.getHelpdeskAgentClientInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHelpdeskAgentClientSetting', function() {
      it('should call getHelpdeskAgentClientSetting successfully', function(done) {
        //uncomment below and update the code to test getHelpdeskAgentClientSetting
        //instance.getHelpdeskAgentClientSetting(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHelpdeskDiscover', function() {
      it('should call getHelpdeskDiscover successfully', function(done) {
        //uncomment below and update the code to test getHelpdeskDiscover
        //instance.getHelpdeskDiscover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHelpdeskUpdaterSetting', function() {
      it('should call getHelpdeskUpdaterSetting successfully', function(done) {
        //uncomment below and update the code to test getHelpdeskUpdaterSetting
        //instance.getHelpdeskUpdaterSetting(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHelpdeskUpdaterStatu', function() {
      it('should call getHelpdeskUpdaterStatu successfully', function(done) {
        //uncomment below and update the code to test getHelpdeskUpdaterStatu
        //instance.getHelpdeskUpdaterStatu(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setHelpdeskUpdaterManualSchedule', function() {
      it('should call setHelpdeskUpdaterManualSchedule successfully', function(done) {
        //uncomment below and update the code to test setHelpdeskUpdaterManualSchedule
        //instance.setHelpdeskUpdaterManualSchedule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
