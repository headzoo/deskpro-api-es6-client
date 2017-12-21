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
* WidgetSampleOnlineAgents service.
* @module DeskPRO\API/Client/WidgetSampleOnlineAgentsApi
* @version 2.0.0
*/
export default class WidgetSampleOnlineAgentsApi {

    /**
    * Constructs a new WidgetSampleOnlineAgentsApi. 
    * @alias module:DeskPRO\API/Client/WidgetSampleOnlineAgentsApi
    * @class
    * @param {module:DeskPRO\API/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:DeskPRO\API/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getWidgetLiveDemoSampleState operation.
     * @callback module:DeskPRO\API/Client/WidgetSampleOnlineAgentsApi~getWidgetLiveDemoSampleStateCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get widget sample online agent
     * @param {module:DeskPRO\API/Client/WidgetSampleOnlineAgentsApi~getWidgetLiveDemoSampleStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getWidgetLiveDemoSampleState(callback) {
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
        '/widget/live_demo/sample_state', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setSettingBrandByBrandWidgetSendInstruction operation.
     * @callback module:DeskPRO\API/Client/WidgetSampleOnlineAgentsApi~setSettingBrandByBrandWidgetSendInstructionCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get widget sample online agent
     * @param {String} brand 
     * @param {String} email Email address
     * @param {module:DeskPRO\API/Client/WidgetSampleOnlineAgentsApi~setSettingBrandByBrandWidgetSendInstructionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    setSettingBrandByBrandWidgetSendInstruction(brand, email, callback) {
      let postBody = null;

      // verify the required parameter 'brand' is set
      if (brand === undefined || brand === null) {
        throw new Error("Missing the required parameter 'brand' when calling setSettingBrandByBrandWidgetSendInstruction");
      }

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling setSettingBrandByBrandWidgetSendInstruction");
      }


      let pathParams = {
        'brand': brand
      };
      let queryParams = {
        'email': email
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
        '/settings/brands/{brand}/widget/send-instructions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
