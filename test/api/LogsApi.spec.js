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
    instance = new DeskProApi.LogsApi();
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

  describe('LogsApi', function() {
    describe('getApiLogById', function() {
      it('should call getApiLogById successfully', function(done) {
        //uncomment below and update the code to test getApiLogById
        //instance.getApiLogById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApiLogs', function() {
      it('should call getApiLogs successfully', function(done) {
        //uncomment below and update the code to test getApiLogs
        //instance.getApiLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApiLogsOptions', function() {
      it('should call getApiLogsOptions successfully', function(done) {
        //uncomment below and update the code to test getApiLogsOptions
        //instance.getApiLogsOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setApiLogByIdReplay', function() {
      it('should call setApiLogByIdReplay successfully', function(done) {
        //uncomment below and update the code to test setApiLogByIdReplay
        //instance.setApiLogByIdReplay(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateApiLogsOptions', function() {
      it('should call updateApiLogsOptions successfully', function(done) {
        //uncomment below and update the code to test updateApiLogsOptions
        //instance.updateApiLogsOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
