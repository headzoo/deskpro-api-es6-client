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
    instance = new DeskProApi.GeneralSettingsType();
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

  describe('GeneralSettingsType', function() {
    it('should create an instance of GeneralSettingsType', function() {
      // uncomment below and update the code to test GeneralSettingsType
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be.a(DeskProApi.GeneralSettingsType);
    });

    it('should have the property siteName (base name: "site_name")', function() {
      // uncomment below and update the code to test the property siteName
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property brandName (base name: "brand_name")', function() {
      // uncomment below and update the code to test the property brandName
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property siteUrl (base name: "site_url")', function() {
      // uncomment below and update the code to test the property siteUrl
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property deskproName (base name: "deskpro_name")', function() {
      // uncomment below and update the code to test the property deskproName
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property deskproUrl (base name: "deskpro_url")', function() {
      // uncomment below and update the code to test the property deskproUrl
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property appsFeedback (base name: "apps_feedback")', function() {
      // uncomment below and update the code to test the property appsFeedback
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property appsKb (base name: "apps_kb")', function() {
      // uncomment below and update the code to test the property appsKb
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property appsNews (base name: "apps_news")', function() {
      // uncomment below and update the code to test the property appsNews
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property appsDownloads (base name: "apps_downloads")', function() {
      // uncomment below and update the code to test the property appsDownloads
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property appsGuides (base name: "apps_guides")', function() {
      // uncomment below and update the code to test the property appsGuides
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property ifacePortal (base name: "iface_portal")', function() {
      // uncomment below and update the code to test the property ifacePortal
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property ifaceWidget (base name: "iface_widget")', function() {
      // uncomment below and update the code to test the property ifaceWidget
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property showRatings (base name: "show_ratings")', function() {
      // uncomment below and update the code to test the property showRatings
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property showRatingsMinVotes (base name: "show_ratings_min_votes")', function() {
      // uncomment below and update the code to test the property showRatingsMinVotes
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

    it('should have the property publishComments (base name: "publish_comments")', function() {
      // uncomment below and update the code to test the property publishComments
      //var instane = new DeskProApi.GeneralSettingsType();
      //expect(instance).to.be();
    });

  });

}));
