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
* Tasks service.
* @module api/TasksApi
* @version 2.0.0
*/
export default class TasksApi {

    /**
    * Constructs a new TasksApi. 
    * @alias module:api/TasksApi
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
    deleteTaskByParentIdCommentByIdWithHttpInfo(id, parentId) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTaskByParentIdCommentById");
      }

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling deleteTaskByParentIdCommentById");
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
        '/tasks/{parentId}/comments/{id}', 'DELETE',
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
    deleteTaskByParentIdCommentById(id, parentId) {
      return this.deleteTaskByParentIdCommentByIdWithHttpInfo(id, parentId)
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
    getTaskByParentIdCommentWithHttpInfo(parentId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling getTaskByParentIdComment");
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
        '/tasks/{parentId}/comments', 'GET',
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
    getTaskByParentIdComment(parentId, opts) {
      return this.getTaskByParentIdCommentWithHttpInfo(parentId, opts)
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
    getTaskByParentIdCommentByIdWithHttpInfo(id, parentId) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTaskByParentIdCommentById");
      }

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling getTaskByParentIdCommentById");
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
        '/tasks/{parentId}/comments/{id}', 'GET',
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
    getTaskByParentIdCommentById(id, parentId) {
      return this.getTaskByParentIdCommentByIdWithHttpInfo(id, parentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Count list
     * @param {String} parentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getTaskByParentIdCommentCountWithHttpInfo(parentId) {
      let postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling getTaskByParentIdCommentCount");
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
        '/tasks/{parentId}/comments/counts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Count list
     * @param {String} parentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getTaskByParentIdCommentCount(parentId) {
      return this.getTaskByParentIdCommentCountWithHttpInfo(parentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}