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
    instance = new DeskProApi.PortalSettingsApi();
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

  describe('PortalSettingsApi', function() {
    describe('getSettingBrandByBrandPortalDownload', function() {
      it('should call getSettingBrandByBrandPortalDownload successfully', function(done) {
        //uncomment below and update the code to test getSettingBrandByBrandPortalDownload
        //instance.getSettingBrandByBrandPortalDownload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSettingBrandByBrandPortalFeedback', function() {
      it('should call getSettingBrandByBrandPortalFeedback successfully', function(done) {
        //uncomment below and update the code to test getSettingBrandByBrandPortalFeedback
        //instance.getSettingBrandByBrandPortalFeedback(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSettingBrandByBrandPortalGeneral', function() {
      it('should call getSettingBrandByBrandPortalGeneral successfully', function(done) {
        //uncomment below and update the code to test getSettingBrandByBrandPortalGeneral
        //instance.getSettingBrandByBrandPortalGeneral(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSettingBrandByBrandPortalGuide', function() {
      it('should call getSettingBrandByBrandPortalGuide successfully', function(done) {
        //uncomment below and update the code to test getSettingBrandByBrandPortalGuide
        //instance.getSettingBrandByBrandPortalGuide(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSettingBrandByBrandPortalKb', function() {
      it('should call getSettingBrandByBrandPortalKb successfully', function(done) {
        //uncomment below and update the code to test getSettingBrandByBrandPortalKb
        //instance.getSettingBrandByBrandPortalKb(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSettingBrandByBrandPortalNews', function() {
      it('should call getSettingBrandByBrandPortalNews successfully', function(done) {
        //uncomment below and update the code to test getSettingBrandByBrandPortalNews
        //instance.getSettingBrandByBrandPortalNews(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
