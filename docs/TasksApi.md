# DeskproApi.TasksApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaskByParentIdCommentById**](TasksApi.md#deleteTaskByParentIdCommentById) | **DELETE** /tasks/{parentId}/comments/{id} | 
[**getTaskByParentIdComment**](TasksApi.md#getTaskByParentIdComment) | **GET** /tasks/{parentId}/comments | 
[**getTaskByParentIdCommentById**](TasksApi.md#getTaskByParentIdCommentById) | **GET** /tasks/{parentId}/comments/{id} | 
[**getTaskByParentIdCommentCount**](TasksApi.md#getTaskByParentIdCommentCount) | **GET** /tasks/{parentId}/comments/counts | 


<a name="deleteTaskByParentIdCommentById"></a>
# **deleteTaskByParentIdCommentById**
> Response deleteTaskByParentIdCommentById(Number id, String parentId)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TasksApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.deleteTaskByParentIdCommentById(id, parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |
 **parentId** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskByParentIdComment"></a>
# **getTaskByParentIdComment**
> Response getTaskByParentIdComment(String parentId, object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TasksApi();

const parentId = "parentId_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTaskByParentIdComment(parentId, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  |

### Filters


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

<a name="getTaskByParentIdCommentById"></a>
# **getTaskByParentIdCommentById**
> Response getTaskByParentIdCommentById(Number id, String parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TasksApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getTaskByParentIdCommentById(id, parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |
 **parentId** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskByParentIdCommentCount"></a>
# **getTaskByParentIdCommentCount**
> Response getTaskByParentIdCommentCount(String parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TasksApi();

const parentId = "parentId_example"; // String | 

apiInstance.getTaskByParentIdCommentCount(parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

