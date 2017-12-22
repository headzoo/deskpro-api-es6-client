# DeskproApi.TicketFilterPreferencesApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteNewTicketFilterByParentIdPrefById**](TicketFilterPreferencesApi.md#deleteNewTicketFilterByParentIdPrefById) | **DELETE** /new/ticket_filters/{parentId}/prefs/{id} | 
[**getNewTicketFilterByParentIdPref**](TicketFilterPreferencesApi.md#getNewTicketFilterByParentIdPref) | **GET** /new/ticket_filters/{parentId}/prefs | 
[**getNewTicketFilterByParentIdPrefById**](TicketFilterPreferencesApi.md#getNewTicketFilterByParentIdPrefById) | **GET** /new/ticket_filters/{parentId}/prefs/{id} | 
[**getNewTicketFilterByParentIdPrefCount**](TicketFilterPreferencesApi.md#getNewTicketFilterByParentIdPrefCount) | **GET** /new/ticket_filters/{parentId}/prefs/counts | 


<a name="deleteNewTicketFilterByParentIdPrefById"></a>
# **deleteNewTicketFilterByParentIdPrefById**
> Response deleteNewTicketFilterByParentIdPrefById(id, parentId)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFilterPreferencesApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.deleteNewTicketFilterByParentIdPrefById(id, parentId).then((response) => {
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

<a name="getNewTicketFilterByParentIdPref"></a>
# **getNewTicketFilterByParentIdPref**
> Response getNewTicketFilterByParentIdPref(parentId, filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFilterPreferencesApi();

const parentId = "parentId_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getNewTicketFilterByParentIdPref(parentId, filters).then((response) => {
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

<a name="getNewTicketFilterByParentIdPrefById"></a>
# **getNewTicketFilterByParentIdPrefById**
> Response getNewTicketFilterByParentIdPrefById(id, parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFilterPreferencesApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getNewTicketFilterByParentIdPrefById(id, parentId).then((response) => {
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

<a name="getNewTicketFilterByParentIdPrefCount"></a>
# **getNewTicketFilterByParentIdPrefCount**
> Response getNewTicketFilterByParentIdPrefCount(parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFilterPreferencesApi();

const parentId = "parentId_example"; // String | 

apiInstance.getNewTicketFilterByParentIdPrefCount(parentId).then((response) => {
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

