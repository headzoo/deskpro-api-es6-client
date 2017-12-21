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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Response from '../model/Response';

/**
* TicketFilterPreferences service.
* @module api/TicketFilterPreferencesApi
* @version 2.0.0
*/
export default class TicketFilterPreferencesApi {

    /**
    * Constructs a new TicketFilterPreferencesApi. 
    * @alias module:api/TicketFilterPreferencesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a resource
     * @param {Number} id The id of the resource
     * @param {String} parentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    deleteNewTicketFilterByParentIdPrefByIdWithHttpInfo(id, parentId) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteNewTicketFilterByParentIdPrefById");
      }

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling deleteNewTicketFilterByParentIdPrefById");
      }


      let pathParams = {
        'id': id,
        'parentId': parentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['KeyAuthentication'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/new/ticket_filters/{parentId}/prefs/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a resource
     * @param {Number} id The id of the resource
     * @param {String} parentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    deleteNewTicketFilterByParentIdPrefById(id, parentId) {
      return this.deleteNewTicketFilterByParentIdPrefByIdWithHttpInfo(id, parentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get collection of resources
     * @param {String} parentId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page to display
     * @param {Number} opts.count Resource per page count
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids Comma separated list of IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getNewTicketFilterByParentIdPrefWithHttpInfo(parentId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling getNewTicketFilterByParentIdPref");
      }


      let pathParams = {
        'parentId': parentId
      };
      let queryParams = {
        'page': opts['page'],
        'count': opts['count'],
        'limit': opts['limit'],
        'ids': opts['ids']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['KeyAuthentication'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/new/ticket_filters/{parentId}/prefs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get collection of resources
     * @param {String} parentId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page to display
     * @param {Number} opts.count Resource per page count
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids Comma separated list of IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getNewTicketFilterByParentIdPref(parentId, opts) {
      return this.getNewTicketFilterByParentIdPrefWithHttpInfo(parentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @param {String} parentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getNewTicketFilterByParentIdPrefByIdWithHttpInfo(id, parentId) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNewTicketFilterByParentIdPrefById");
      }

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling getNewTicketFilterByParentIdPrefById");
      }


      let pathParams = {
        'id': id,
        'parentId': parentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['KeyAuthentication'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/new/ticket_filters/{parentId}/prefs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @param {String} parentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getNewTicketFilterByParentIdPrefById(id, parentId) {
      return this.getNewTicketFilterByParentIdPrefByIdWithHttpInfo(id, parentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Count list
     * @param {String} parentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getNewTicketFilterByParentIdPrefCountWithHttpInfo(parentId) {
      let postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling getNewTicketFilterByParentIdPrefCount");
      }


      let pathParams = {
        'parentId': parentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['KeyAuthentication'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/new/ticket_filters/{parentId}/prefs/counts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Count list
     * @param {String} parentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getNewTicketFilterByParentIdPrefCount(parentId) {
      return this.getNewTicketFilterByParentIdPrefCountWithHttpInfo(parentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}