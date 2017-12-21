# DeskProApi.TicketFiltersLegacyApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTicketFilterByFilterTicket**](TicketFiltersLegacyApi.md#getTicketFilterByFilterTicket) | **GET** /ticket_filters/{filter}/tickets | 
[**getTicketFilterById**](TicketFiltersLegacyApi.md#getTicketFilterById) | **GET** /ticket_filters/{id} | 
[**getTicketFilterByIdCount**](TicketFiltersLegacyApi.md#getTicketFilterByIdCount) | **GET** /ticket_filters/{id}/count | 
[**getTicketFilterCount**](TicketFiltersLegacyApi.md#getTicketFilterCount) | **GET** /ticket_filters/counts | 
[**getTicketFilterSetAllCount**](TicketFiltersLegacyApi.md#getTicketFilterSetAllCount) | **GET** /ticket_filter_sets/all/counts | 
[**getTicketFilterSetById**](TicketFiltersLegacyApi.md#getTicketFilterSetById) | **GET** /ticket_filter_sets/{id} | 
[**getTicketFilterSetByIdCount**](TicketFiltersLegacyApi.md#getTicketFilterSetByIdCount) | **GET** /ticket_filter_sets/{id}/count | 
[**getTicketFilterSetByIdFilter**](TicketFiltersLegacyApi.md#getTicketFilterSetByIdFilter) | **GET** /ticket_filter_sets/{id}/filters | 
[**getTicketFilterSets**](TicketFiltersLegacyApi.md#getTicketFilterSets) | **GET** /ticket_filter_sets | 
[**getTicketFilters**](TicketFiltersLegacyApi.md#getTicketFilters) | **GET** /ticket_filters | 
[**getTicketFiltersCounts**](TicketFiltersLegacyApi.md#getTicketFiltersCounts) | **GET** /ticket_filters_counts | 


<a name="getTicketFilterByFilterTicket"></a>
# **getTicketFilterByFilterTicket**
> Response getTicketFilterByFilterTicket(filter, opts)



Get filter&#39;s tickets. See /tickets endpoint docs for the parameter details.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

let filter = "filter_example"; // String | 

let opts = { 
  'sort': "sort_example", // String | tickets list sort
  'order': "order_example", // String | tickets list sort order
  'page': 56, // Number | pagination page parameter
  'count': 56, // Number | pagination results per page parameter.
  'department': 56, // Number | department filter
  'organization': 56, // Number | organization filter
  'person': 56, // Number | person filter
  'language': 56, // Number | language filter
  'urgency': 56, // Number | urgency filter
  'agent': 56, // Number | agent filter
  'agentTeam': 56, // Number | agent team filter
  'waitingTime': 56, // Number | user waiting time filter
  'allWaitingTime': 56, // Number | total user waiting time filter
  'dateCreated': 56, // Number | date created filter
  'ticketFieldId': "ticketFieldId_example" // String |       *                 Custom ticket field filter. To filter by a custom field with ID=1 you need to add      *                 ?ticket_field.1=value to the query string
};

apiInstance.getTicketFilterByFilterTicket(filter, opts, (error, data, response) => {
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
 **sort** | **String**| tickets list sort | [optional] 
 **order** | **String**| tickets list sort order | [optional] 
 **page** | **Number**| pagination page parameter | [optional] 
 **count** | **Number**| pagination results per page parameter. | [optional] 
 **department** | **Number**| department filter | [optional] 
 **organization** | **Number**| organization filter | [optional] 
 **person** | **Number**| person filter | [optional] 
 **language** | **Number**| language filter | [optional] 
 **urgency** | **Number**| urgency filter | [optional] 
 **agent** | **Number**| agent filter | [optional] 
 **agentTeam** | **Number**| agent team filter | [optional] 
 **waitingTime** | **Number**| user waiting time filter | [optional] 
 **allWaitingTime** | **Number**| total user waiting time filter | [optional] 
 **dateCreated** | **Number**| date created filter | [optional] 
 **ticketFieldId** | **String**|       *                 Custom ticket field filter. To filter by a custom field with ID&#x3D;1 you need to add      *                 ?ticket_field.1&#x3D;value to the query string | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketFilterById"></a>
# **getTicketFilterById**
> Response getTicketFilterById(id)



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

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

let id = 56; // Number | The id of the resource


apiInstance.getTicketFilterById(id, (error, data, response) => {
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

<a name="getTicketFilterByIdCount"></a>
# **getTicketFilterByIdCount**
> Response getTicketFilterByIdCount(id, opts)



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

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

let id = 56; // Number | the id of the filter

let opts = { 
  'groupBy': "groupBy_example" // String | the grouping order you want
};

apiInstance.getTicketFilterByIdCount(id, opts, (error, data, response) => {
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
 **id** | **Number**| the id of the filter | 
 **groupBy** | **String**| the grouping order you want | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketFilterCount"></a>
# **getTicketFilterCount**
> Response getTicketFilterCount()



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

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

apiInstance.getTicketFilterCount((error, data, response) => {
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

<a name="getTicketFilterSetAllCount"></a>
# **getTicketFilterSetAllCount**
> Response getTicketFilterSetAllCount(opts)



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

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

let opts = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};

apiInstance.getTicketFilterSetAllCount(opts, (error, data, response) => {
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

<a name="getTicketFilterSetById"></a>
# **getTicketFilterSetById**
> Response getTicketFilterSetById(id)



get a filter set

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

let id = 56; // Number | the id of the filter set


apiInstance.getTicketFilterSetById(id, (error, data, response) => {
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
 **id** | **Number**| the id of the filter set | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketFilterSetByIdCount"></a>
# **getTicketFilterSetByIdCount**
> Response getTicketFilterSetByIdCount(id, opts)



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

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

let id = 56; // Number | the id of the filter

let opts = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};

apiInstance.getTicketFilterSetByIdCount(id, opts, (error, data, response) => {
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
 **id** | **Number**| the id of the filter | 
 **groupBy** | [**[String]**](String.md)| [Ticket filter ID &#x3D;&gt; group_by] map | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketFilterSetByIdFilter"></a>
# **getTicketFilterSetByIdFilter**
> Response getTicketFilterSetByIdFilter(id)



get filters belong to filter set

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

let id = 56; // Number | the id of the filter set


apiInstance.getTicketFilterSetByIdFilter(id, (error, data, response) => {
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
 **id** | **Number**| the id of the filter set | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketFilterSets"></a>
# **getTicketFilterSets**
> Response getTicketFilterSets()



get filter sets

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

apiInstance.getTicketFilterSets((error, data, response) => {
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

<a name="getTicketFilters"></a>
# **getTicketFilters**
> Response getTicketFilters(opts)



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

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getTicketFilters(opts, (error, data, response) => {
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

<a name="getTicketFiltersCounts"></a>
# **getTicketFiltersCounts**
> Response getTicketFiltersCounts(opts)



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

let apiInstance = new DeskProApi.TicketFiltersLegacyApi();

let opts = { 
  'groupBy': "groupBy_example" // String | [Ticket filter ID => group_by] map
};

apiInstance.getTicketFiltersCounts(opts, (error, data, response) => {
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
