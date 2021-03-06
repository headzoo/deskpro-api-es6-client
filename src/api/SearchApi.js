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
import Response from '../model/Response';

/**
* Search service.
* @module api/SearchApi
* @version 2.0.0
*/
export default class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Search through articles, downloads, feedback, news, tickets, chatconversations, people and organizations.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q search term
     * @param {String} opts.sort how to sort
     * @param {String} opts.types comma separated list of types
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getSearchWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'sort': opts['sort'],
        'types': opts['types']
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
        '/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search through articles, downloads, feedback, news, tickets, chatconversations, people and organizations.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q search term
     * @param {String} opts.sort how to sort
     * @param {String} opts.types comma separated list of types
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getSearch(opts) {
      return this.getSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search by entity type.
     * @param {String} type 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q search term
     * @param {String} opts.sort how to sort
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getSearchByTypeWithHttpInfo(type, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getSearchByType");
      }


      let pathParams = {
        'type': type
      };
      let queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
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
        '/search/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search by entity type.
     * @param {String} type 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q search term
     * @param {String} opts.sort how to sort
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getSearchByType(type, opts) {
      return this.getSearchByTypeWithHttpInfo(type, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search only organizations and people.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q search term
     * @param {String} opts.sort how to sort
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getSearchPeopleAndOrgWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
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
        '/search/people_and_orgs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search only organizations and people.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q search term
     * @param {String} opts.sort how to sort
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getSearchPeopleAndOrg(opts) {
      return this.getSearchPeopleAndOrgWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
