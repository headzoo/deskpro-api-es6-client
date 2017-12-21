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
    instance = new DeskProApi.SnippetsApi();
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

  describe('SnippetsApi', function() {
    describe('deleteSnippetById', function() {
      it('should call deleteSnippetById successfully', function(done) {
        //uncomment below and update the code to test deleteSnippetById
        //instance.deleteSnippetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSnippetById', function() {
      it('should call getSnippetById successfully', function(done) {
        //uncomment below and update the code to test getSnippetById
        //instance.getSnippetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSnippetCount', function() {
      it('should call getSnippetCount successfully', function(done) {
        //uncomment below and update the code to test getSnippetCount
        //instance.getSnippetCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSnippetCsv', function() {
      it('should call getSnippetCsv successfully', function(done) {
        //uncomment below and update the code to test getSnippetCsv
        //instance.getSnippetCsv(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSnippetLabel', function() {
      it('should call getSnippetLabel successfully', function(done) {
        //uncomment below and update the code to test getSnippetLabel
        //instance.getSnippetLabel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSnippetRenderByIdByTypeByObjectId', function() {
      it('should call getSnippetRenderByIdByTypeByObjectId successfully', function(done) {
        //uncomment below and update the code to test getSnippetRenderByIdByTypeByObjectId
        //instance.getSnippetRenderByIdByTypeByObjectId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSnippets', function() {
      it('should call getSnippets successfully', function(done) {
        //uncomment below and update the code to test getSnippets
        //instance.getSnippets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSnippetsChangeLogs', function() {
      it('should call getSnippetsChangeLogs successfully', function(done) {
        //uncomment below and update the code to test getSnippetsChangeLogs
        //instance.getSnippetsChangeLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSnippetsUse', function() {
      it('should call getSnippetsUse successfully', function(done) {
        //uncomment below and update the code to test getSnippetsUse
        //instance.getSnippetsUse(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
