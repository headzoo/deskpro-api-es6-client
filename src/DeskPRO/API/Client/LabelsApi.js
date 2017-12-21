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
* Labels service.
* @module DeskPRO\API/Client/LabelsApi
* @version 2.0.0
*/
export default class LabelsApi {

    /**
    * Constructs a new LabelsApi. 
    * @alias module:DeskPRO\API/Client/LabelsApi
    * @class
    * @param {module:DeskPRO\API/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:DeskPRO\API/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTypeLabels operation.
     * @callback module:DeskPRO\API/Client/LabelsApi~getTypeLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all labels by types
     * @param {String} type Which entity type labels we are searching?
     * @param {Object} opts Optional parameters
     * @param {String} opts.term Filter label by given word
     * @param {module:DeskPRO\API/Client/LabelsApi~getTypeLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getTypeLabels(type, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getTypeLabels");
      }


      let pathParams = {
        'type': type
      };
      let queryParams = {
        'term': opts['term']
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
        '/{type}_labels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}