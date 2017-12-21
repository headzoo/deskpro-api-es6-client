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
import Error from '../Model/Error';
import Response from '../Model/Response';

/**
* Tasks service.
* @module DeskPRO\API/Client/TasksApi
* @version 2.0.0
*/
export default class TasksApi {

    /**
    * Constructs a new TasksApi. 
    * @alias module:DeskPRO\API/Client/TasksApi
    * @class
    * @param {module:DeskPRO\API/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:DeskPRO\API/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteTaskByParentIdCommentById operation.
     * @callback module:DeskPRO\API/Client/TasksApi~deleteTaskByParentIdCommentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a resource
     * @param {Number} id The id of the resource
     * @param {String} parentId 
     * @param {module:DeskPRO\API/Client/TasksApi~deleteTaskByParentIdCommentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    deleteTaskByParentIdCommentById(id, parentId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskByParentIdComment operation.
     * @callback module:DeskPRO\API/Client/TasksApi~getTaskByParentIdCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get collection of resources
     * @param {String} parentId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page to display
     * @param {Number} opts.count Resource per page count
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids Comma separated list of IDs
     * @param {module:DeskPRO\API/Client/TasksApi~getTaskByParentIdCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getTaskByParentIdComment(parentId, opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskByParentIdCommentById operation.
     * @callback module:DeskPRO\API/Client/TasksApi~getTaskByParentIdCommentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @param {String} parentId 
     * @param {module:DeskPRO\API/Client/TasksApi~getTaskByParentIdCommentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getTaskByParentIdCommentById(id, parentId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskByParentIdCommentCount operation.
     * @callback module:DeskPRO\API/Client/TasksApi~getTaskByParentIdCommentCountCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count list
     * @param {String} parentId 
     * @param {module:DeskPRO\API/Client/TasksApi~getTaskByParentIdCommentCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getTaskByParentIdCommentCount(parentId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}