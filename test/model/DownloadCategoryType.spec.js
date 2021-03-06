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
    instance = new DeskProApi.DownloadCategoryType();
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

  describe('DownloadCategoryType', function() {
    it('should create an instance of DownloadCategoryType', function() {
      // uncomment below and update the code to test DownloadCategoryType
      //var instane = new DeskProApi.DownloadCategoryType();
      //expect(instance).to.be.a(DeskProApi.DownloadCategoryType);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new DeskProApi.DownloadCategoryType();
      //expect(instance).to.be();
    });

    it('should have the property titleTranslations (base name: "title_translations")', function() {
      // uncomment below and update the code to test the property titleTranslations
      //var instane = new DeskProApi.DownloadCategoryType();
      //expect(instance).to.be();
    });

    it('should have the property brand (base name: "brand")', function() {
      // uncomment below and update the code to test the property brand
      //var instane = new DeskProApi.DownloadCategoryType();
      //expect(instance).to.be();
    });

    it('should have the property usergroups (base name: "usergroups")', function() {
      // uncomment below and update the code to test the property usergroups
      //var instane = new DeskProApi.DownloadCategoryType();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new DeskProApi.DownloadCategoryType();
      //expect(instance).to.be();
    });

  });

}));
