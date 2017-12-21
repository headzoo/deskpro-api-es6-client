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
import Response from '../Model/Response';

/**
* TicketFormWidget service.
* @module DeskPRO\API/Client/TicketFormWidgetApi
* @version 2.0.0
*/
export default class TicketFormWidgetApi {

    /**
    * Constructs a new TicketFormWidgetApi. 
    * @alias module:DeskPRO\API/Client/TicketFormWidgetApi
    * @class
    * @param {module:DeskPRO\API/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:DeskPRO\API/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTicketFormWidgetCode operation.
     * @callback module:DeskPRO\API/Client/TicketFormWidgetApi~getTicketFormWidgetCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ticket form widget JS code
     * @param {module:DeskPRO\API/Client/TicketFormWidgetApi~getTicketFormWidgetCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getTicketFormWidgetCode(callback) {
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
        '/ticket-form-widget/code', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}