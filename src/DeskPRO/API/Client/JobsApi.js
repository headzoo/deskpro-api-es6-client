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
* Jobs service.
* @module DeskPRO\API/Client/JobsApi
* @version 2.0.0
*/
export default class JobsApi {

    /**
    * Constructs a new JobsApi. 
    * @alias module:DeskPRO\API/Client/JobsApi
    * @class
    * @param {module:DeskPRO\API/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:DeskPRO\API/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getJobById operation.
     * @callback module:DeskPRO\API/Client/JobsApi~getJobByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @param {module:DeskPRO\API/Client/JobsApi~getJobByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getJobById(id, callback) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getJobById");
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
        '/jobs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobs operation.
     * @callback module:DeskPRO\API/Client/JobsApi~getJobsCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get collection of resources
     * @param {module:DeskPRO\API/Client/JobsApi~getJobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getJobs(callback) {
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
        '/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
