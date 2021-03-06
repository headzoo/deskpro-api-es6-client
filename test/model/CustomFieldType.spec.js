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
    instance = new DeskProApi.CustomFieldType();
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

  describe('CustomFieldType', function() {
    it('should create an instance of CustomFieldType', function() {
      // uncomment below and update the code to test CustomFieldType
      //var instane = new DeskProApi.CustomFieldType();
      //expect(instance).to.be.a(DeskProApi.CustomFieldType);
    });

    it('should have the property isEnabled (base name: "is_enabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new DeskProApi.CustomFieldType();
      //expect(instance).to.be();
    });

    it('should have the property displayOrder (base name: "display_order")', function() {
      // uncomment below and update the code to test the property displayOrder
      //var instane = new DeskProApi.CustomFieldType();
      //expect(instance).to.be();
    });

  });

}));
