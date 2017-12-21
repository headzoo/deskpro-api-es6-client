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
    instance = new DeskProApi.FeedbackApi();
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

  describe('FeedbackApi', function() {
    describe('deleteFeedbackById', function() {
      it('should call deleteFeedbackById successfully', function(done) {
        //uncomment below and update the code to test deleteFeedbackById
        //instance.deleteFeedbackById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFeedbackCommentById', function() {
      it('should call deleteFeedbackCommentById successfully', function(done) {
        //uncomment below and update the code to test deleteFeedbackCommentById
        //instance.deleteFeedbackCommentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedback', function() {
      it('should call getFeedback successfully', function(done) {
        //uncomment below and update the code to test getFeedback
        //instance.getFeedback(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedbackById', function() {
      it('should call getFeedbackById successfully', function(done) {
        //uncomment below and update the code to test getFeedbackById
        //instance.getFeedbackById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedbackCategories', function() {
      it('should call getFeedbackCategories successfully', function(done) {
        //uncomment below and update the code to test getFeedbackCategories
        //instance.getFeedbackCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedbackCommentById', function() {
      it('should call getFeedbackCommentById successfully', function(done) {
        //uncomment below and update the code to test getFeedbackCommentById
        //instance.getFeedbackCommentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedbackCommentCount', function() {
      it('should call getFeedbackCommentCount successfully', function(done) {
        //uncomment below and update the code to test getFeedbackCommentCount
        //instance.getFeedbackCommentCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedbackComments', function() {
      it('should call getFeedbackComments successfully', function(done) {
        //uncomment below and update the code to test getFeedbackComments
        //instance.getFeedbackComments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedbackCount', function() {
      it('should call getFeedbackCount successfully', function(done) {
        //uncomment below and update the code to test getFeedbackCount
        //instance.getFeedbackCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedbackTypeById', function() {
      it('should call getFeedbackTypeById successfully', function(done) {
        //uncomment below and update the code to test getFeedbackTypeById
        //instance.getFeedbackTypeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedbackTypeCount', function() {
      it('should call getFeedbackTypeCount successfully', function(done) {
        //uncomment below and update the code to test getFeedbackTypeCount
        //instance.getFeedbackTypeCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeedbackTypes', function() {
      it('should call getFeedbackTypes successfully', function(done) {
        //uncomment below and update the code to test getFeedbackTypes
        //instance.getFeedbackTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
