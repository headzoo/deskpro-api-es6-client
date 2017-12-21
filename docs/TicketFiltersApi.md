# DeskproApi.TicketFiltersApi

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteNewTicketFilterById(id).then((response) => {
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

<a name="deleteNewTicketFilterSetById"></a>
# **deleteNewTicketFilterSetById**
> Response deleteNewTicketFilterSetById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteNewTicketFilterSetById(id).then((response) => {
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

<a name="getNewTicketFilter"></a>
# **getNewTicketFilter**
> Response getNewTicketFilter(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getNewTicketFilter(opts).then((response) => {
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

<a name="getNewTicketFilterByFilterCount"></a>
# **getNewTicketFilterByFilterCount**
> Response getNewTicketFilterByFilterCount(filter, opts)



Get a filter&#39;s count

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const filter = 56; // Number | the id of the filter

const opts = { 
  'groupBy': "groupBy_example" // String | the grouping order you want
};
apiInstance.getNewTicketFilterByFilterCount(filter, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const filter = "filter_example"; // String | 

apiInstance.getNewTicketFilterByFilterTicket(filter).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const id = 56; // Number | The id of the resource

apiInstance.getNewTicketFilterById(id).then((response) => {
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

<a name="getNewTicketFilterCount"></a>
# **getNewTicketFilterCount**
> Response getNewTicketFilterCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();
apiInstance.getNewTicketFilterCount().then((response) => {
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

<a name="getNewTicketFilterSet"></a>
# **getNewTicketFilterSet**
> Response getNewTicketFilterSet(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getNewTicketFilterSet(opts).then((response) => {
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

<a name="getNewTicketFilterSetAllCount"></a>
# **getNewTicketFilterSetAllCount**
> Response getNewTicketFilterSetAllCount(opts)



Get all filter set counts

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const opts = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};
apiInstance.getNewTicketFilterSetAllCount(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const id = 56; // Number | The id of the resource

apiInstance.getNewTicketFilterSetById(id).then((response) => {
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

<a name="getNewTicketFilterSetBySetCount"></a>
# **getNewTicketFilterSetBySetCount**
> Response getNewTicketFilterSetBySetCount(set, opts)



Get a filter set count

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const set = 56; // Number | the id of the filter

const opts = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};
apiInstance.getNewTicketFilterSetBySetCount(set, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const set = "set_example"; // String | 

const opts = { 
  'id': 56 // Number | the id of the filter set
};
apiInstance.getNewTicketFilterSetBySetFilter(set, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();
apiInstance.getNewTicketFilterSetCount().then((response) => {
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

<a name="getNewTicketFiltersCount"></a>
# **getNewTicketFiltersCount**
> Response getNewTicketFiltersCount(opts)



Get all filters counts

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const opts = { 
  'groupBy': "groupBy_example" // String | [Ticket filter ID => group_by] map
};
apiInstance.getNewTicketFiltersCount(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

