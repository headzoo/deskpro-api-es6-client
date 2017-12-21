# DeskproApi.FeedbackApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFeedbackById**](FeedbackApi.md#deleteFeedbackById) | **DELETE** /feedback/{id} | 
[**deleteFeedbackCommentById**](FeedbackApi.md#deleteFeedbackCommentById) | **DELETE** /feedback_comments/{id} | 
[**getFeedback**](FeedbackApi.md#getFeedback) | **GET** /feedback | 
[**getFeedbackById**](FeedbackApi.md#getFeedbackById) | **GET** /feedback/{id} | 
[**getFeedbackCategories**](FeedbackApi.md#getFeedbackCategories) | **GET** /feedback_categories | 
[**getFeedbackCommentById**](FeedbackApi.md#getFeedbackCommentById) | **GET** /feedback_comments/{id} | 
[**getFeedbackCommentCount**](FeedbackApi.md#getFeedbackCommentCount) | **GET** /feedback_comments/counts | 
[**getFeedbackComments**](FeedbackApi.md#getFeedbackComments) | **GET** /feedback_comments | 
[**getFeedbackCount**](FeedbackApi.md#getFeedbackCount) | **GET** /feedback/counts | 
[**getFeedbackTypeById**](FeedbackApi.md#getFeedbackTypeById) | **GET** /feedback_types/{id} | 
[**getFeedbackTypeCount**](FeedbackApi.md#getFeedbackTypeCount) | **GET** /feedback_types/counts | 
[**getFeedbackTypes**](FeedbackApi.md#getFeedbackTypes) | **GET** /feedback_types | 


<a name="deleteFeedbackById"></a>
# **deleteFeedbackById**
> Response deleteFeedbackById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteFeedbackById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFeedbackCommentById"></a>
# **deleteFeedbackCommentById**
> Response deleteFeedbackCommentById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteFeedbackCommentById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedback"></a>
# **getFeedback**
> Response getFeedback(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | comma separated ids list
  'awaitingValidation': true, // Boolean | select feedback awaiting validation only
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | limit with hidden_status
  'statusCategory': "statusCategory_example", // String | filter by status category
  'category': "category_example", // String | category title, or titles array
  'customCategory': "customCategory_example", // String | filter by custom category
  'labelsMode': "labelsMode_example", // String | how to load labels
  'label': "label_example", // String | select feedback with given lables
  'noLabels': true, // Boolean | select feedback have no label
  'createdFrom': "createdFrom_example", // String | limit by date, interval`s start
  'createdTo': "createdTo_example", // String | limit by date, interval`s end
  'feedbackFieldId': "feedbackFieldId_example", // String |   *                  Custom feedback field filter. To filter by a custom field with ID=1 you need to add  *                  ?feedback_field.1=value to the query string
  'orderBy': "orderBy_example", // String | how to order result
  'orderDir': "orderDir_example" // String | order direction
};
apiInstance.getFeedback(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| comma separated ids list | [optional] 
 **awaitingValidation** | **Boolean**| select feedback awaiting validation only | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| limit with hidden_status | [optional] 
 **statusCategory** | **String**| filter by status category | [optional] 
 **category** | **String**| category title, or titles array | [optional] 
 **customCategory** | **String**| filter by custom category | [optional] 
 **labelsMode** | **String**| how to load labels | [optional] 
 **label** | **String**| select feedback with given lables | [optional] 
 **noLabels** | **Boolean**| select feedback have no label | [optional] 
 **createdFrom** | **String**| limit by date, interval&#x60;s start | [optional] 
 **createdTo** | **String**| limit by date, interval&#x60;s end | [optional] 
 **feedbackFieldId** | **String**|   *                  Custom feedback field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?feedback_field.1&#x3D;value to the query string | [optional] 
 **orderBy** | **String**| how to order result | [optional] 
 **orderDir** | **String**| order direction | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackById"></a>
# **getFeedbackById**
> Response getFeedbackById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();

const id = 56; // Number | The id of the resource

apiInstance.getFeedbackById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackCategories"></a>
# **getFeedbackCategories**
> Response getFeedbackCategories()



get list of feedback categories

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();
apiInstance.getFeedbackCategories().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackCommentById"></a>
# **getFeedbackCommentById**
> Response getFeedbackCommentById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();

const id = 56; // Number | The id of the resource

apiInstance.getFeedbackCommentById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackCommentCount"></a>
# **getFeedbackCommentCount**
> Response getFeedbackCommentCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();
apiInstance.getFeedbackCommentCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackComments"></a>
# **getFeedbackComments**
> Response getFeedbackComments(opts)



get list of feedback comments

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();

const opts = { 
  'page': "page_example", // String | current page
  'count': "count_example", // String | per page comments quantity
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | a comma separated list of comment`s ids
  'awaitingValidation': "awaitingValidation_example", // String | set it if you want to fetch new comments
  'category': "category_example", // String | category to search, exact name
  'statusCategory': 56, // Number | integer represents status category
  'label': "label_example", // String | a comma separated list of exact label names
  'noLabels': true, // Boolean | boolean value
  'customCategory': "customCategory_example", // String | an array of exact custom categories names
  'status': 56, // Number | an integer value represents current status
  'hiddenStatus': "hiddenStatus_example", // String | an integer value represents current hidden_status
  'createdFrom': "createdFrom_example", // String | a datetime string to search comments since
  'createdTo': "createdTo_example", // String | a datetime string to search comments until
  'feedbackFieldId': "feedbackFieldId_example" // String |   *                  Custom feedback field filter. To filter by a custom field with ID=1 you need to add  *                  ?feedback_field.1=value to the query string
};
apiInstance.getFeedbackComments(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **String**| current page | [optional] 
 **count** | **String**| per page comments quantity | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| a comma separated list of comment&#x60;s ids | [optional] 
 **awaitingValidation** | **String**| set it if you want to fetch new comments | [optional] 
 **category** | **String**| category to search, exact name | [optional] 
 **statusCategory** | **Number**| integer represents status category | [optional] 
 **label** | **String**| a comma separated list of exact label names | [optional] 
 **noLabels** | **Boolean**| boolean value | [optional] 
 **customCategory** | **String**| an array of exact custom categories names | [optional] 
 **status** | **Number**| an integer value represents current status | [optional] 
 **hiddenStatus** | **String**| an integer value represents current hidden_status | [optional] 
 **createdFrom** | **String**| a datetime string to search comments since | [optional] 
 **createdTo** | **String**| a datetime string to search comments until | [optional] 
 **feedbackFieldId** | **String**|   *                  Custom feedback field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?feedback_field.1&#x3D;value to the query string | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackCount"></a>
# **getFeedbackCount**
> Response getFeedbackCount(opts)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();

const opts = { 
  'awaitingValidation': true, // Boolean | select feedback awaiting validation only
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | limit with hidden_status
  'statusCategory': "statusCategory_example", // String | filter by status category
  'category': "category_example", // String | category title, or titles array
  'customCategory': "customCategory_example", // String | filter by custom category
  'labelsMode': "labelsMode_example", // String | how to load labels
  'label': "label_example", // String | select feedback with given lables
  'noLabels': true, // Boolean | select feedback have no label
  'ids': "ids_example", // String | comma separated ids list
  'createdFrom': "createdFrom_example", // String | limit by date, interval`s start
  'createdTo': "createdTo_example", // String | limit by date, interval`s end
  'feedbackFieldId': "feedbackFieldId_example", // String |   *                  Custom feedback field filter. To filter by a custom field with ID=1 you need to add  *                  ?feedback_field.1=value to the query string
  'groupBy': true // Boolean | how to group counts
};
apiInstance.getFeedbackCount(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awaitingValidation** | **Boolean**| select feedback awaiting validation only | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| limit with hidden_status | [optional] 
 **statusCategory** | **String**| filter by status category | [optional] 
 **category** | **String**| category title, or titles array | [optional] 
 **customCategory** | **String**| filter by custom category | [optional] 
 **labelsMode** | **String**| how to load labels | [optional] 
 **label** | **String**| select feedback with given lables | [optional] 
 **noLabels** | **Boolean**| select feedback have no label | [optional] 
 **ids** | **String**| comma separated ids list | [optional] 
 **createdFrom** | **String**| limit by date, interval&#x60;s start | [optional] 
 **createdTo** | **String**| limit by date, interval&#x60;s end | [optional] 
 **feedbackFieldId** | **String**|   *                  Custom feedback field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?feedback_field.1&#x3D;value to the query string | [optional] 
 **groupBy** | **Boolean**| how to group counts | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackTypeById"></a>
# **getFeedbackTypeById**
> Response getFeedbackTypeById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();

const id = 56; // Number | The id of the resource

apiInstance.getFeedbackTypeById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackTypeCount"></a>
# **getFeedbackTypeCount**
> Response getFeedbackTypeCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();
apiInstance.getFeedbackTypeCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackTypes"></a>
# **getFeedbackTypes**
> Response getFeedbackTypes(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeedbackApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getFeedbackTypes(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

