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
* WidgetSetup service.
* @module DeskPRO\API/Client/WidgetSetupApi
* @version 2.0.0
*/
export default class WidgetSetupApi {

    /**
    * Constructs a new WidgetSetupApi. 
    * @alias module:DeskPRO\API/Client/WidgetSetupApi
    * @class
    * @param {module:DeskPRO\API/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:DeskPRO\API/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteSettingBrandByBrandWidgetSetup operation.
     * @callback module:DeskPRO\API/Client/WidgetSetupApi~deleteSettingBrandByBrandWidgetSetupCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * reset widget settings
     * @param {String} brand 
     * @param {module:DeskPRO\API/Client/WidgetSetupApi~deleteSettingBrandByBrandWidgetSetupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    deleteSettingBrandByBrandWidgetSetup(brand, callback) {
      let postBody = null;

      // verify the required parameter 'brand' is set
      if (brand === undefined || brand === null) {
        throw new Error("Missing the required parameter 'brand' when calling deleteSettingBrandByBrandWidgetSetup");
      }


      let pathParams = {
        'brand': brand
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
        '/settings/brands/{brand}/widget/setup', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSettingBrandByBrandWidgetCode operation.
     * @callback module:DeskPRO\API/Client/WidgetSetupApi~getSettingBrandByBrandWidgetCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the HTML code for the widget
     * @param {String} brand 
     * @param {module:DeskPRO\API/Client/WidgetSetupApi~getSettingBrandByBrandWidgetCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getSettingBrandByBrandWidgetCode(brand, callback) {
      let postBody = null;

      // verify the required parameter 'brand' is set
      if (brand === undefined || brand === null) {
        throw new Error("Missing the required parameter 'brand' when calling getSettingBrandByBrandWidgetCode");
      }


      let pathParams = {
        'brand': brand
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
        '/settings/brands/{brand}/widget/code', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSettingBrandByBrandWidgetLiveDemoCode operation.
     * @callback module:DeskPRO\API/Client/WidgetSetupApi~getSettingBrandByBrandWidgetLiveDemoCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the HTML code for the widget
     * @param {String} brand 
     * @param {module:DeskPRO\API/Client/WidgetSetupApi~getSettingBrandByBrandWidgetLiveDemoCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getSettingBrandByBrandWidgetLiveDemoCode(brand, callback) {
      let postBody = null;

      // verify the required parameter 'brand' is set
      if (brand === undefined || brand === null) {
        throw new Error("Missing the required parameter 'brand' when calling getSettingBrandByBrandWidgetLiveDemoCode");
      }


      let pathParams = {
        'brand': brand
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
        '/settings/brands/{brand}/widget/live_demo_code', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSettingBrandByBrandWidgetSetup operation.
     * @callback module:DeskPRO\API/Client/WidgetSetupApi~getSettingBrandByBrandWidgetSetupCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get widget setup
     * @param {String} brand 
     * @param {module:DeskPRO\API/Client/WidgetSetupApi~getSettingBrandByBrandWidgetSetupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getSettingBrandByBrandWidgetSetup(brand, callback) {
      let postBody = null;

      // verify the required parameter 'brand' is set
      if (brand === undefined || brand === null) {
        throw new Error("Missing the required parameter 'brand' when calling getSettingBrandByBrandWidgetSetup");
      }


      let pathParams = {
        'brand': brand
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
        '/settings/brands/{brand}/widget/setup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
