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
import Response from '../model/Response';

/**
* Tags service.
* @module api/TagsApi
* @version 2.0.0
*/
export default class TagsApi {

    /**
    * Constructs a new TagsApi. 
    * @alias module:api/TagsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * get api tags collection
     * @param {Number} id The id of key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getApiTagByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getApiTagById");
      }


      let pathParams = {
        'id': id
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
        '/api_tags/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get api tags collection
     * @param {Number} id The id of key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getApiTagById(id) {
      return this.getApiTagByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get api tags faltten collection
     * @param {Number} id The id of key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getApiTagByIdFlattenWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getApiTagByIdFlatten");
      }


      let pathParams = {
        'id': id
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
        '/api_tags/{id}/flatten', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get api tags faltten collection
     * @param {Number} id The id of key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getApiTagByIdFlatten(id) {
      return this.getApiTagByIdFlattenWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update tags for key
     * @param {Number} id The id of key
     * @param {Object} opts Optional parameters
     * @param {String} opts.action Tag name
     * @param {Boolean} opts.value Allow|deny
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    updateApiTagByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateApiTagById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'action': opts['action'],
        'value': opts['value']
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
        '/api_tags/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * update tags for key
     * @param {Number} id The id of key
     * @param {Object} opts Optional parameters
     * @param {String} opts.action Tag name
     * @param {Boolean} opts.value Allow|deny
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    updateApiTagById(id, opts) {
      return this.updateApiTagByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
