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
    instance = new DeskProApi.FeaturesApi();
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

  describe('FeaturesApi', function() {
    describe('getFeatureByFeature', function() {
      it('should call getFeatureByFeature successfully', function(done) {
        //uncomment below and update the code to test getFeatureByFeature
        //instance.getFeatureByFeature(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeatures', function() {
      it('should call getFeatures successfully', function(done) {
        //uncomment below and update the code to test getFeatures
        //instance.getFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFeatureByFeatureDisable', function() {
      it('should call updateFeatureByFeatureDisable successfully', function(done) {
        //uncomment below and update the code to test updateFeatureByFeatureDisable
        //instance.updateFeatureByFeatureDisable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFeatureByFeatureEnable', function() {
      it('should call updateFeatureByFeatureEnable successfully', function(done) {
        //uncomment below and update the code to test updateFeatureByFeatureEnable
        //instance.updateFeatureByFeatureEnable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));