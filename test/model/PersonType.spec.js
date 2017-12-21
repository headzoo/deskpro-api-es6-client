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
    instance = new DeskProApi.PersonType();
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

  describe('PersonType', function() {
    it('should create an instance of PersonType', function() {
      // uncomment below and update the code to test PersonType
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be.a(DeskProApi.PersonType);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property primaryEmail (base name: "primary_email")', function() {
      // uncomment below and update the code to test the property primaryEmail
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property emails (base name: "emails")', function() {
      // uncomment below and update the code to test the property emails
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property titlePrefix (base name: "title_prefix")', function() {
      // uncomment below and update the code to test the property titlePrefix
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property overrideDisplayName (base name: "override_display_name")', function() {
      // uncomment below and update the code to test the property overrideDisplayName
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property organizationPosition (base name: "organization_position")', function() {
      // uncomment below and update the code to test the property organizationPosition
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property userGroups (base name: "user_groups")', function() {
      // uncomment below and update the code to test the property userGroups
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property agentGroups (base name: "agent_groups")', function() {
      // uncomment below and update the code to test the property agentGroups
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property contactData (base name: "contact_data")', function() {
      // uncomment below and update the code to test the property contactData
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property teams (base name: "teams")', function() {
      // uncomment below and update the code to test the property teams
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property primaryTeam (base name: "primary_team")', function() {
      // uncomment below and update the code to test the property primaryTeam
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property agentData (base name: "agent_data")', function() {
      // uncomment below and update the code to test the property agentData
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumbers (base name: "phone_numbers")', function() {
      // uncomment below and update the code to test the property phoneNumbers
      //var instane = new DeskProApi.PersonType();
      //expect(instance).to.be();
    });

  });

}));
