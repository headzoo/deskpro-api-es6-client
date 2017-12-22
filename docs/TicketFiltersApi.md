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
> Response deleteNewTicketFilterById(Number id)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNewTicketFilterSetById"></a>
# **deleteNewTicketFilterSetById**
> Response deleteNewTicketFilterSetById(Number id)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilter"></a>
# **getNewTicketFilter**
> Response getNewTicketFilter(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getNewTicketFilter(filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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

<a name="getNewTicketFilterByFilterCount"></a>
# **getNewTicketFilterByFilterCount**
> Response getNewTicketFilterByFilterCount(Number filter, object filters)



Get a filter&#39;s count

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const filter = 56; // Number | the id of the filter

const filters = { 
  'groupBy': "groupBy_example" // String | the grouping order you want
};
apiInstance.getNewTicketFilterByFilterCount(filter, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **Number**| the id of the filter |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Response getNewTicketFilterByFilterTicket(String filter)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterById"></a>
# **getNewTicketFilterById**
> Response getNewTicketFilterById(Number id)



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

### Filters
This endpoint does not need any filters.


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
This endpoint does not need any parameters.


### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterSet"></a>
# **getNewTicketFilterSet**
> Response getNewTicketFilterSet(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getNewTicketFilterSet(filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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

<a name="getNewTicketFilterSetAllCount"></a>
# **getNewTicketFilterSetAllCount**
> Response getNewTicketFilterSetAllCount(object filters)



Get all filter set counts

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const filters = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};
apiInstance.getNewTicketFilterSetAllCount(filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupBy** | [**[String]**](../Model/String.md)| [Ticket filter ID &#x3D;&gt; group_by] map | [optional]

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterSetById"></a>
# **getNewTicketFilterSetById**
> Response getNewTicketFilterSetById(Number id)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterSetBySetCount"></a>
# **getNewTicketFilterSetBySetCount**
> Response getNewTicketFilterSetBySetCount(Number set, object filters)



Get a filter set count

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const set = 56; // Number | the id of the filter

const filters = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};
apiInstance.getNewTicketFilterSetBySetCount(set, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **set** | **Number**| the id of the filter |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupBy** | [**[String]**](../Model/String.md)| [Ticket filter ID &#x3D;&gt; group_by] map | [optional]

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFilterSetBySetFilter"></a>
# **getNewTicketFilterSetBySetFilter**
> Response getNewTicketFilterSetBySetFilter(String set, object filters)



Get the filters within a filter set

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const set = "set_example"; // String | 

const filters = { 
  'id': 56 // Number | the id of the filter set
};
apiInstance.getNewTicketFilterSetBySetFilter(set, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **set** | **String**|  |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
This endpoint does not need any parameters.


### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewTicketFiltersCount"></a>
# **getNewTicketFiltersCount**
> Response getNewTicketFiltersCount(object filters)



Get all filters counts

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersApi();

const filters = { 
  'groupBy': "groupBy_example" // String | [Ticket filter ID => group_by] map
};
apiInstance.getNewTicketFiltersCount(filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

### Filters


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

