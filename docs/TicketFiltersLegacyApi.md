# DeskproApi.TicketFiltersLegacyApi

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
> Response getTicketFilterByFilterTicket(filter, filters)



Get filter&#39;s tickets. See /tickets endpoint docs for the parameter details.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();

const filter = "filter_example"; // String | 

const filters = { 
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
apiInstance.getTicketFilterByFilterTicket(filter, filters).then((response) => {
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();

const id = 56; // Number | The id of the resource

apiInstance.getTicketFilterById(id).then((response) => {
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

<a name="getTicketFilterByIdCount"></a>
# **getTicketFilterByIdCount**
> Response getTicketFilterByIdCount(id, filters)



Get a filter&#39;s count

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();

const id = 56; // Number | the id of the filter

const filters = { 
  'groupBy': "groupBy_example" // String | the grouping order you want
};
apiInstance.getTicketFilterByIdCount(id, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the id of the filter |

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

<a name="getTicketFilterCount"></a>
# **getTicketFilterCount**
> Response getTicketFilterCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();
apiInstance.getTicketFilterCount().then((response) => {
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

<a name="getTicketFilterSetAllCount"></a>
# **getTicketFilterSetAllCount**
> Response getTicketFilterSetAllCount(filters)



Get all filter set counts

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();

const filters = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};
apiInstance.getTicketFilterSetAllCount(filters).then((response) => {
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

<a name="getTicketFilterSetById"></a>
# **getTicketFilterSetById**
> Response getTicketFilterSetById(id)



get a filter set

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();

const id = 56; // Number | the id of the filter set

apiInstance.getTicketFilterSetById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the id of the filter set |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketFilterSetByIdCount"></a>
# **getTicketFilterSetByIdCount**
> Response getTicketFilterSetByIdCount(id, filters)



Get a filter set count

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();

const id = 56; // Number | the id of the filter

const filters = { 
  'groupBy': ["groupBy_example"] // [String] | [Ticket filter ID => group_by] map
};
apiInstance.getTicketFilterSetByIdCount(id, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the id of the filter |

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

<a name="getTicketFilterSetByIdFilter"></a>
# **getTicketFilterSetByIdFilter**
> Response getTicketFilterSetByIdFilter(id)



get filters belong to filter set

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();

const id = 56; // Number | the id of the filter set

apiInstance.getTicketFilterSetByIdFilter(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the id of the filter set |

### Filters
This endpoint does not need any filters.


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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();
apiInstance.getTicketFilterSets().then((response) => {
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

<a name="getTicketFilters"></a>
# **getTicketFilters**
> Response getTicketFilters(filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketFilters(filters).then((response) => {
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

<a name="getTicketFiltersCounts"></a>
# **getTicketFiltersCounts**
> Response getTicketFiltersCounts(filters)



Get all filters counts

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketFiltersLegacyApi();

const filters = { 
  'groupBy': "groupBy_example" // String | [Ticket filter ID => group_by] map
};
apiInstance.getTicketFiltersCounts(filters).then((response) => {
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

