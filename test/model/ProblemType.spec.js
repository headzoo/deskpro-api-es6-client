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
    instance = new DeskProApi.ProblemType();
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

  describe('ProblemType', function() {
    it('should create an instance of ProblemType', function() {
      // uncomment below and update the code to test ProblemType
      //var instane = new DeskProApi.ProblemType();
      //expect(instance).to.be.a(DeskProApi.ProblemType);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new DeskProApi.ProblemType();
      //expect(instance).to.be();
    });

    it('should have the property isOpen (base name: "is_open")', function() {
      // uncomment below and update the code to test the property isOpen
      //var instane = new DeskProApi.ProblemType();
      //expect(instance).to.be();
    });

  });

}));
