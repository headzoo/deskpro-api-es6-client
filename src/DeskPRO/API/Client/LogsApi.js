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
* Logs service.
* @module DeskPRO\API/Client/LogsApi
* @version 2.0.0
*/
export default class LogsApi {

    /**
    * Constructs a new LogsApi. 
    * @alias module:DeskPRO\API/Client/LogsApi
    * @class
    * @param {module:DeskPRO\API/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:DeskPRO\API/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getApiLogById operation.
     * @callback module:DeskPRO\API/Client/LogsApi~getApiLogByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get api log
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.page 
     * @param {module:DeskPRO\API/Client/LogsApi~getApiLogByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getApiLogById(id, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getApiLogById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'page': opts['page']
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
        '/api_logs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiLogs operation.
     * @callback module:DeskPRO\API/Client/LogsApi~getApiLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get api logs collection
     * @param {module:DeskPRO\API/Client/LogsApi~getApiLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getApiLogs(callback) {
      let postBody = null;


      let pathParams = {
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
        '/api_logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiLogsOptions operation.
     * @callback module:DeskPRO\API/Client/LogsApi~getApiLogsOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get logging options
     * @param {module:DeskPRO\API/Client/LogsApi~getApiLogsOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getApiLogsOptions(callback) {
      let postBody = null;


      let pathParams = {
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
        '/api_logs_options', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setApiLogByIdReplay operation.
     * @callback module:DeskPRO\API/Client/LogsApi~setApiLogByIdReplayCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update logging options
     * @param {Number} id id of entry to replay
     * @param {Object} opts Optional parameters
     * @param {String} opts.mode how to replay
     * @param {module:DeskPRO\API/Client/LogsApi~setApiLogByIdReplayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    setApiLogByIdReplay(id, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setApiLogByIdReplay");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'mode': opts['mode']
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
        '/api_logs/{id}/replay', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateApiLogsOptions operation.
     * @callback module:DeskPRO\API/Client/LogsApi~updateApiLogsOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update logging options
     * @param {Number} requestLength 
     * @param {Number} responseLength 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.enabled provide 1 if you want to enable logging
     * @param {Array.<String>} opts.modes strings array, values are session, key, token
     * @param {module:DeskPRO\API/Client/LogsApi~updateApiLogsOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    updateApiLogsOptions(requestLength, responseLength, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'requestLength' is set
      if (requestLength === undefined || requestLength === null) {
        throw new Error("Missing the required parameter 'requestLength' when calling updateApiLogsOptions");
      }

      // verify the required parameter 'responseLength' is set
      if (responseLength === undefined || responseLength === null) {
        throw new Error("Missing the required parameter 'responseLength' when calling updateApiLogsOptions");
      }


      let pathParams = {
      };
      let queryParams = {
        'enabled': opts['enabled'],
        'modes': this.apiClient.buildCollectionParam(opts['modes'], 'csv'),
        'request_length': requestLength,
        'response_length': responseLength
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
        '/api_logs_options', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}