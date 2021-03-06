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
import Error from '../model/Error';
import Response from '../model/Response';

/**
* Feedback service.
* @module api/FeedbackApi
* @version 2.0.0
*/
export default class FeedbackApi {

    /**
    * Constructs a new FeedbackApi. 
    * @alias module:api/FeedbackApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    deleteFeedbackByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFeedbackById");
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
        '/feedback/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    deleteFeedbackById(id) {
      return this.deleteFeedbackByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    deleteFeedbackCommentByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFeedbackCommentById");
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
        '/feedback_comments/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    deleteFeedbackCommentById(id) {
      return this.deleteFeedbackCommentByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get collection of resources
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page to display
     * @param {Number} opts.count Resource per page count
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids comma separated ids list
     * @param {Boolean} opts.awaitingValidation select feedback awaiting validation only
     * @param {String} opts.status filter by status
     * @param {Number} opts.hiddenStatus limit with hidden_status
     * @param {String} opts.statusCategory filter by status category
     * @param {String} opts.category category title, or titles array
     * @param {String} opts.customCategory filter by custom category
     * @param {String} opts.labelsMode how to load labels
     * @param {String} opts.label select feedback with given lables
     * @param {Boolean} opts.noLabels select feedback have no label
     * @param {String} opts.createdFrom limit by date, interval&#x60;s start
     * @param {String} opts.createdTo limit by date, interval&#x60;s end
     * @param {String} opts.feedbackFieldId   *                  Custom feedback field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?feedback_field.1&#x3D;value to the query string
     * @param {String} opts.orderBy how to order result
     * @param {String} opts.orderDir order direction
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'count': opts['count'],
        'limit': opts['limit'],
        'ids': opts['ids'],
        'awaiting_validation': opts['awaitingValidation'],
        'status': opts['status'],
        'hidden_status': opts['hiddenStatus'],
        'status_category': opts['statusCategory'],
        'category': opts['category'],
        'custom_category': opts['customCategory'],
        'labels_mode': opts['labelsMode'],
        'label': opts['label'],
        'no_labels': opts['noLabels'],
        'created_from': opts['createdFrom'],
        'created_to': opts['createdTo'],
        'feedback_field.{id}': opts['feedbackFieldId'],
        'order_by': opts['orderBy'],
        'order_dir': opts['orderDir']
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
        '/feedback', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get collection of resources
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page to display
     * @param {Number} opts.count Resource per page count
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids comma separated ids list
     * @param {Boolean} opts.awaitingValidation select feedback awaiting validation only
     * @param {String} opts.status filter by status
     * @param {Number} opts.hiddenStatus limit with hidden_status
     * @param {String} opts.statusCategory filter by status category
     * @param {String} opts.category category title, or titles array
     * @param {String} opts.customCategory filter by custom category
     * @param {String} opts.labelsMode how to load labels
     * @param {String} opts.label select feedback with given lables
     * @param {Boolean} opts.noLabels select feedback have no label
     * @param {String} opts.createdFrom limit by date, interval&#x60;s start
     * @param {String} opts.createdTo limit by date, interval&#x60;s end
     * @param {String} opts.feedbackFieldId   *                  Custom feedback field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?feedback_field.1&#x3D;value to the query string
     * @param {String} opts.orderBy how to order result
     * @param {String} opts.orderDir order direction
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedback(opts) {
      return this.getFeedbackWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFeedbackById");
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
        '/feedback/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedbackById(id) {
      return this.getFeedbackByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get list of feedback categories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackCategoriesWithHttpInfo() {
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
        '/feedback_categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get list of feedback categories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedbackCategories() {
      return this.getFeedbackCategoriesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackCommentByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFeedbackCommentById");
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
        '/feedback_comments/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedbackCommentById(id) {
      return this.getFeedbackCommentByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Count list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackCommentCountWithHttpInfo() {
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
        '/feedback_comments/counts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Count list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedbackCommentCount() {
      return this.getFeedbackCommentCountWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get list of feedback comments
     * @param {Object} opts Optional parameters
     * @param {String} opts.page current page
     * @param {String} opts.count per page comments quantity
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids a comma separated list of comment&#x60;s ids
     * @param {String} opts.awaitingValidation set it if you want to fetch new comments
     * @param {String} opts.category category to search, exact name
     * @param {Number} opts.statusCategory integer represents status category
     * @param {String} opts.label a comma separated list of exact label names
     * @param {Boolean} opts.noLabels boolean value
     * @param {String} opts.customCategory an array of exact custom categories names
     * @param {Number} opts.status an integer value represents current status
     * @param {String} opts.hiddenStatus an integer value represents current hidden_status
     * @param {String} opts.createdFrom a datetime string to search comments since
     * @param {String} opts.createdTo a datetime string to search comments until
     * @param {String} opts.feedbackFieldId   *                  Custom feedback field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?feedback_field.1&#x3D;value to the query string
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackCommentsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'count': opts['count'],
        'limit': opts['limit'],
        'ids': opts['ids'],
        'awaiting_validation': opts['awaitingValidation'],
        'category': opts['category'],
        'statusCategory': opts['statusCategory'],
        'label': opts['label'],
        'no_labels': opts['noLabels'],
        'custom_category': opts['customCategory'],
        'status': opts['status'],
        'hidden_status': opts['hiddenStatus'],
        'created_from': opts['createdFrom'],
        'created_to': opts['createdTo'],
        'feedback_field.{id}': opts['feedbackFieldId']
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
        '/feedback_comments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get list of feedback comments
     * @param {Object} opts Optional parameters
     * @param {String} opts.page current page
     * @param {String} opts.count per page comments quantity
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids a comma separated list of comment&#x60;s ids
     * @param {String} opts.awaitingValidation set it if you want to fetch new comments
     * @param {String} opts.category category to search, exact name
     * @param {Number} opts.statusCategory integer represents status category
     * @param {String} opts.label a comma separated list of exact label names
     * @param {Boolean} opts.noLabels boolean value
     * @param {String} opts.customCategory an array of exact custom categories names
     * @param {Number} opts.status an integer value represents current status
     * @param {String} opts.hiddenStatus an integer value represents current hidden_status
     * @param {String} opts.createdFrom a datetime string to search comments since
     * @param {String} opts.createdTo a datetime string to search comments until
     * @param {String} opts.feedbackFieldId   *                  Custom feedback field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?feedback_field.1&#x3D;value to the query string
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedbackComments(opts) {
      return this.getFeedbackCommentsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Count list
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.awaitingValidation select feedback awaiting validation only
     * @param {String} opts.status filter by status
     * @param {Number} opts.hiddenStatus limit with hidden_status
     * @param {String} opts.statusCategory filter by status category
     * @param {String} opts.category category title, or titles array
     * @param {String} opts.customCategory filter by custom category
     * @param {String} opts.labelsMode how to load labels
     * @param {String} opts.label select feedback with given lables
     * @param {Boolean} opts.noLabels select feedback have no label
     * @param {String} opts.ids comma separated ids list
     * @param {String} opts.createdFrom limit by date, interval&#x60;s start
     * @param {String} opts.createdTo limit by date, interval&#x60;s end
     * @param {String} opts.feedbackFieldId   *                  Custom feedback field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?feedback_field.1&#x3D;value to the query string
     * @param {Boolean} opts.groupBy how to group counts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackCountWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'awaiting_validation': opts['awaitingValidation'],
        'status': opts['status'],
        'hidden_status': opts['hiddenStatus'],
        'status_category': opts['statusCategory'],
        'category': opts['category'],
        'custom_category': opts['customCategory'],
        'labels_mode': opts['labelsMode'],
        'label': opts['label'],
        'no_labels': opts['noLabels'],
        'ids': opts['ids'],
        'created_from': opts['createdFrom'],
        'created_to': opts['createdTo'],
        'feedback_field.{id}': opts['feedbackFieldId'],
        'group_by': opts['groupBy']
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
        '/feedback/counts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Count list
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.awaitingValidation select feedback awaiting validation only
     * @param {String} opts.status filter by status
     * @param {Number} opts.hiddenStatus limit with hidden_status
     * @param {String} opts.statusCategory filter by status category
     * @param {String} opts.category category title, or titles array
     * @param {String} opts.customCategory filter by custom category
     * @param {String} opts.labelsMode how to load labels
     * @param {String} opts.label select feedback with given lables
     * @param {Boolean} opts.noLabels select feedback have no label
     * @param {String} opts.ids comma separated ids list
     * @param {String} opts.createdFrom limit by date, interval&#x60;s start
     * @param {String} opts.createdTo limit by date, interval&#x60;s end
     * @param {String} opts.feedbackFieldId   *                  Custom feedback field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?feedback_field.1&#x3D;value to the query string
     * @param {Boolean} opts.groupBy how to group counts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedbackCount(opts) {
      return this.getFeedbackCountWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackTypeByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFeedbackTypeById");
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
        '/feedback_types/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a resource
     * @param {Number} id The id of the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedbackTypeById(id) {
      return this.getFeedbackTypeByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Count list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackTypeCountWithHttpInfo() {
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
        '/feedback_types/counts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Count list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedbackTypeCount() {
      return this.getFeedbackTypeCountWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get collection of resources
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page to display
     * @param {Number} opts.count Resource per page count
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids Comma separated list of IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getFeedbackTypesWithHttpInfo(opts) {
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
        '/feedback_types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get collection of resources
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page to display
     * @param {Number} opts.count Resource per page count
     * @param {Number} opts.limit Max number of resources to return
     * @param {String} opts.ids Comma separated list of IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getFeedbackTypes(opts) {
      return this.getFeedbackTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
