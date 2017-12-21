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
* Languages service.
* @module DeskPRO\API/Client/LanguagesApi
* @version 2.0.0
*/
export default class LanguagesApi {

    /**
    * Constructs a new LanguagesApi. 
    * @alias module:DeskPRO\API/Client/LanguagesApi
    * @class
    * @param {module:DeskPRO\API/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:DeskPRO\API/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getLanguageAdminPhrase operation.
     * @callback module:DeskPRO\API/Client/LanguagesApi~getLanguageAdminPhraseCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * provide admin phrases for frontend
     * @param {module:DeskPRO\API/Client/LanguagesApi~getLanguageAdminPhraseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getLanguageAdminPhrase(callback) {
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
        '/languages/admin_phrases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLanguageAgentPhrase operation.
     * @callback module:DeskPRO\API/Client/LanguagesApi~getLanguageAgentPhraseCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * provide agent phrases for frontend
     * @param {module:DeskPRO\API/Client/LanguagesApi~getLanguageAgentPhraseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getLanguageAgentPhrase(callback) {
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
        '/languages/agent_phrases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLanguageById operation.
     * @callback module:DeskPRO\API/Client/LanguagesApi~getLanguageByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @param {module:DeskPRO\API/Client/LanguagesApi~getLanguageByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getLanguageById(id, callback) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLanguageById");
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
        '/languages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLanguageCount operation.
     * @callback module:DeskPRO\API/Client/LanguagesApi~getLanguageCountCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count list
     * @param {module:DeskPRO\API/Client/LanguagesApi~getLanguageCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getLanguageCount(callback) {
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
        '/languages/counts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLanguages operation.
     * @callback module:DeskPRO\API/Client/LanguagesApi~getLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get collection of resources
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page to display
     * @param {Number} opts.count Resource per page count
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids Comma separated list of IDs
     * @param {module:DeskPRO\API/Client/LanguagesApi~getLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getLanguages(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
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
        '/languages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
