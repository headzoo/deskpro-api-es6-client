# DeskProApi.TicketFiltersApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteNewTicketFilterById**](TicketFiltersApi.md#deleteNewTicketFilterById) | **DELETE** /new/ticket_filters/{id} | 
[**deleteNewTicketFilterSetById**](TicketFiltersApi.md#deleteNewTicketFilterSetById) | **DELETE** /new/ticket_filter_sets/{id} | 
[**getNewTicketFilter**](TicketFiltersApi.md#getNewTicketFilter) | **GET** /new/ticket_filters | 
[**getNewTicketFilterByFilterCount**](TicketFiltersApi.md#getNewTicketFilterByFilterCount) | **GET** /new/ticket_filters/{filter}/count | 
[**getNewTicketFilterByFilterTicket**](TicketFiltersApi.md#getNewTicketFilterByFilterTicket) | **GET** /new/ticket_filters/{filter}/tickets | 
[**getNewTicketFilterById**](TicketFiltersApi.md#getNewTicketFilterById) | **GET** /new/ticket_filters/{id} | 
[**getNewTicketFilterCount**](TicketFiltersApi.md#getNewTicketFilterCount) | **GET** /new/ticket_filters/counts | 
[**getNewTicketFilterSet**](TicketFiltersApi.md#getNewTicketFilterSet) | **GET** /new/ticket_filter_sets | 
[**getNewTicketFilterSetAllCount**](TicketFiltersApi.md#getNewTicketFilterSetAllCount) | **GET** /new/ticket_filter_sets/all/counts | 
[**getNewTicketFilterSetById**](TicketFiltersApi.md#getNewTicketFilterSetById) | **GET** /new/ticket_filter_sets/{id} | 
[**getNewTicketFilterSetBySetCount**](TicketFiltersApi.md#getNewTicketFilterSetBySetCount) | **GET** /new/ticket_filter_sets/{set}/count | 
[**getNewTicketFilterSetBySetFilter**](TicketFiltersApi.md#getNewTicketFilterSetBySetFilter) | **GET** /new/ticket_filter_sets/{set}/filters | 
[**getNewTicketFilterSetCount**](TicketFiltersApi.md#getNewTicketFilterSetCount) | **GET** /new/ticket_filter_sets/counts | 
[**getNewTicketFiltersCount**](TicketFiltersApi.md#getNewTicketFiltersCount) | **GET** /new/ticket_filters_counts | 


<a name="deleteNewTicketFilterById"></a>
# **deleteNewTicketFilterById**
> Response deleteNewTicketFilterById(id)



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

let apiInstance = new DeskProApi.TicketFiltersApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteNewTicketFilterById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNewTicketFilterSetById"></a>
# **deleteNewTicketFilterSetById**
> Response deleteNewTicketFilterSetById(id)



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

let apiInstance = new DeskProApi.TicketFiltersApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteNewTicketFilterSetById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilter"></a>
# **getNewTicketFilter**
> Response getNewTicketFilter(opts)



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

let apiInstance = new DeskProApi.TicketFiltersApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getNewTicketFilter(opts, (error, data, response) => {
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

<a name="getNewTicketFilterByFilterCount"></a>
# **getNewTicketFilterByFilterCount**
> Response getNewTicketFilterByFilterCount(filter, opts)



Get a filter&#39;s count

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersApi();

let filter = 56; // Number | the id of the filter

let opts = { 
  'groupBy': "groupBy_example" // String | the grouping order you want
};

apiInstance.getNewTicketFilterByFilterCount(filter, opts, (error, data, response) => {
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
 **filter** | **Number**| the id of the filter | 
 **groupBy** | **String**| the grouping order you want | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterByFilterTicket"></a>
# **getNewTicketFilterByFilterTicket**
> Response getNewTicketFilterByFilterTicket(filter)



get filtered tickets

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersApi();

let filter = "filter_example"; // String | 


apiInstance.getNewTicketFilterByFilterTicket(filter, (error, data, response) => {
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
 **filter** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterById"></a>
# **getNewTicketFilterById**
> Response getNewTicketFilterById(id)



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

let apiInstance = new DeskProApi.TicketFiltersApi();

let id = 56; // Number | The id of the resource


apiInstance.getNewTicketFilterById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterCount"></a>
# **getNewTicketFilterCount**
> Response getNewTicketFilterCount()



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

let apiInstance = new DeskProApi.TicketFiltersApi();

apiInstance.getNewTicketFilterCount((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

<a name="getNewTicketFilterSet"></a>
# **getNewTicketFilterSet**
> Response getNewTicketFilterSet(opts)



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

let apiInstance = new DeskProApi.TicketFiltersApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getNewTicketFilterSet(opts, (error, data, response) => {
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

<a name="getNewTicketFilterSetAllCount"></a>
# **getNewTicketFilterSetAllCount**
> Response getNewTicketFilterSetAllCount(opts)



Get all filter set counts

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersApi();

let opts = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};

apiInstance.getNewTicketFilterSetAllCount(opts, (error, data, response) => {
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
 **groupBy** | [**[String]**](String.md)| [Ticket filter ID &#x3D;&gt; group_by] map | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterSetById"></a>
# **getNewTicketFilterSetById**
> Response getNewTicketFilterSetById(id)



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

let apiInstance = new DeskProApi.TicketFiltersApi();

let id = 56; // Number | The id of the resource


apiInstance.getNewTicketFilterSetById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterSetBySetCount"></a>
# **getNewTicketFilterSetBySetCount**
> Response getNewTicketFilterSetBySetCount(set, opts)



Get a filter set count

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersApi();

let set = 56; // Number | the id of the filter

let opts = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};

apiInstance.getNewTicketFilterSetBySetCount(set, opts, (error, data, response) => {
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
 **set** | **Number**| the id of the filter | 
 **groupBy** | [**[String]**](String.md)| [Ticket filter ID &#x3D;&gt; group_by] map | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterSetBySetFilter"></a>
# **getNewTicketFilterSetBySetFilter**
> Response getNewTicketFilterSetBySetFilter(set, opts)



Get the filters within a filter set

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersApi();

let set = "set_example"; // String | 

let opts = { 
  'id': 56 // Number | the id of the filter set
};

apiInstance.getNewTicketFilterSetBySetFilter(set, opts, (error, data, response) => {
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
 **set** | **String**|  | 
 **id** | **Number**| the id of the filter set | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterSetCount"></a>
# **getNewTicketFilterSetCount**
> Response getNewTicketFilterSetCount()



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

let apiInstance = new DeskProApi.TicketFiltersApi();

apiInstance.getNewTicketFilterSetCount((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

<a name="getNewTicketFiltersCount"></a>
# **getNewTicketFiltersCount**
> Response getNewTicketFiltersCount(opts)



Get all filters counts

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersApi();

let opts = { 
  'groupBy': "groupBy_example" // String | [Ticket filter ID => group_by] map
};

apiInstance.getNewTicketFiltersCount(opts, (error, data, response) => {
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
 **groupBy** | **String**| [Ticket filter ID &#x3D;&gt; group_by] map | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

