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
* Helpdesk service.
* @module DeskPRO\API/Client/HelpdeskApi
* @version 2.0.0
*/
export default class HelpdeskApi {

    /**
    * Constructs a new HelpdeskApi. 
    * @alias module:DeskPRO\API/Client/HelpdeskApi
    * @class
    * @param {module:DeskPRO\API/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:DeskPRO\API/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getHelpdeskAgentClientInfo operation.
     * @callback module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskAgentClientInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used by apps when they need to know general information about a helpdesk such as which features are enabled
     * @param {module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskAgentClientInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getHelpdeskAgentClientInfo(callback) {
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
        '/helpdesk/agent-client/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHelpdeskAgentClientSetting operation.
     * @callback module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskAgentClientSettingCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current user personal settings
     * @param {module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskAgentClientSettingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getHelpdeskAgentClientSetting(callback) {
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
        '/helpdesk/agent-client/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHelpdeskDiscover operation.
     * @callback module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskDiscoverCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used by apps to detect that this is a real helpdesk
     * @param {module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskDiscoverCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getHelpdeskDiscover(callback) {
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
        '/helpdesk/discover', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHelpdeskUpdaterSetting operation.
     * @callback module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskUpdaterSettingCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the updater settings
     * @param {module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskUpdaterSettingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getHelpdeskUpdaterSetting(callback) {
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
        '/helpdesk/updater/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHelpdeskUpdaterStatu operation.
     * @callback module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskUpdaterStatuCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the updater status
     * @param {module:DeskPRO\API/Client/HelpdeskApi~getHelpdeskUpdaterStatuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    getHelpdeskUpdaterStatu(callback) {
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
        '/helpdesk/updater/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setHelpdeskUpdaterManualSchedule operation.
     * @callback module:DeskPRO\API/Client/HelpdeskApi~setHelpdeskUpdaterManualScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:DeskPRO\API/Model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Manually schedule an upgrade to run right now
     * @param {Number} delay delay before start
     * @param {module:DeskPRO\API/Client/HelpdeskApi~setHelpdeskUpdaterManualScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:DeskPRO\API/Model/Response}
     */
    setHelpdeskUpdaterManualSchedule(delay, callback) {
      let postBody = null;

      // verify the required parameter 'delay' is set
      if (delay === undefined || delay === null) {
        throw new Error("Missing the required parameter 'delay' when calling setHelpdeskUpdaterManualSchedule");
      }


      let pathParams = {
      };
      let queryParams = {
        'delay': delay
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
        '/helpdesk/updater/manual-schedule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}