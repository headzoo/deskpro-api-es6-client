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
    instance = new DeskProApi.TicketMessageType();
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

  describe('TicketMessageType', function() {
    it('should create an instance of TicketMessageType', function() {
      // uncomment below and update the code to test TicketMessageType
      //var instane = new DeskProApi.TicketMessageType();
      //expect(instance).to.be.a(DeskProApi.TicketMessageType);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new DeskProApi.TicketMessageType();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instane = new DeskProApi.TicketMessageType();
      //expect(instance).to.be();
    });

    it('should have the property isNote (base name: "is_note")', function() {
      // uncomment below and update the code to test the property isNote
      //var instane = new DeskProApi.TicketMessageType();
      //expect(instance).to.be();
    });

    it('should have the property inlineAttachments (base name: "inline_attachments")', function() {
      // uncomment below and update the code to test the property inlineAttachments
      //var instane = new DeskProApi.TicketMessageType();
      //expect(instance).to.be();
    });

  });

}));