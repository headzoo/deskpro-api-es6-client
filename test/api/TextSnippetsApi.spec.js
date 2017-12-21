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
    instance = new DeskProApi.TextSnippetsApi();
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

  describe('TextSnippetsApi', function() {
    describe('deleteContextSnippetById', function() {
      it('should call deleteContextSnippetById successfully', function(done) {
        //uncomment below and update the code to test deleteContextSnippetById
        //instance.deleteContextSnippetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteContextSnippetCategoryById', function() {
      it('should call deleteContextSnippetCategoryById successfully', function(done) {
        //uncomment below and update the code to test deleteContextSnippetCategoryById
        //instance.deleteContextSnippetCategoryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContextSnippetById', function() {
      it('should call getContextSnippetById successfully', function(done) {
        //uncomment below and update the code to test getContextSnippetById
        //instance.getContextSnippetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContextSnippetByIdContent', function() {
      it('should call getContextSnippetByIdContent successfully', function(done) {
        //uncomment below and update the code to test getContextSnippetByIdContent
        //instance.getContextSnippetByIdContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContextSnippetCategories', function() {
      it('should call getContextSnippetCategories successfully', function(done) {
        //uncomment below and update the code to test getContextSnippetCategories
        //instance.getContextSnippetCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContextSnippetCategoryById', function() {
      it('should call getContextSnippetCategoryById successfully', function(done) {
        //uncomment below and update the code to test getContextSnippetCategoryById
        //instance.getContextSnippetCategoryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContextSnippetCategoryByIdSnippet', function() {
      it('should call getContextSnippetCategoryByIdSnippet successfully', function(done) {
        //uncomment below and update the code to test getContextSnippetCategoryByIdSnippet
        //instance.getContextSnippetCategoryByIdSnippet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContextSnippetCategoryCount', function() {
      it('should call getContextSnippetCategoryCount successfully', function(done) {
        //uncomment below and update the code to test getContextSnippetCategoryCount
        //instance.getContextSnippetCategoryCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContextSnippetCount', function() {
      it('should call getContextSnippetCount successfully', function(done) {
        //uncomment below and update the code to test getContextSnippetCount
        //instance.getContextSnippetCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContextSnippets', function() {
      it('should call getContextSnippets successfully', function(done) {
        //uncomment below and update the code to test getContextSnippets
        //instance.getContextSnippets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));