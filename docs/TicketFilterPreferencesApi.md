# DeskProApi.TicketFilterPreferencesApi

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
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFilterPreferencesApi();

let id = 56; // Number | The id of the resource

let parentId = "parentId_example"; // String | 


apiInstance.deleteNewTicketFilterByParentIdPrefById(id, parentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 
 **parentId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterByParentIdPref"></a>
# **getNewTicketFilterByParentIdPref**
> Response getNewTicketFilterByParentIdPref(parentId, opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFilterPreferencesApi();

let parentId = "parentId_example"; // String | 

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getNewTicketFilterByParentIdPref(parentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  | 
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
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFilterPreferencesApi();

let id = 56; // Number | The id of the resource

let parentId = "parentId_example"; // String | 


apiInstance.getNewTicketFilterByParentIdPrefById(id, parentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 
 **parentId** | **String**|  | 

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
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFilterPreferencesApi();

let parentId = "parentId_example"; // String | 


apiInstance.getNewTicketFilterByParentIdPrefCount(parentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

