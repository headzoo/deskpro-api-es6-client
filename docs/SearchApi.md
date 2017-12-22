# DeskproApi.SearchApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSearch**](SearchApi.md#getSearch) | **GET** /search | 
[**getSearchByType**](SearchApi.md#getSearchByType) | **GET** /search/{type} | 
[**getSearchPeopleAndOrg**](SearchApi.md#getSearchPeopleAndOrg) | **GET** /search/people_and_orgs | 


<a name="getSearch"></a>
# **getSearch**
> Response getSearch(filters)



Search through articles, downloads, feedback, news, tickets, chatconversations, people and organizations.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SearchApi();

const filters = { 
  'q': "q_example", // String | search term
  'sort': "sort_example", // String | how to sort
  'types': "types_example" // String | comma separated list of types
};
apiInstance.getSearch(filters).then((response) => {
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
 **q** | **String**| search term | [optional]
 **sort** | **String**| how to sort | [optional]
 **types** | **String**| comma separated list of types | [optional]

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSearchByType"></a>
# **getSearchByType**
> Response getSearchByType(type, filters)



Search by entity type.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SearchApi();

const type = "type_example"; // String | 

const filters = { 
  'q': "q_example", // String | search term
  'sort': "sort_example" // String | how to sort
};
apiInstance.getSearchByType(type, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| search term | [optional]
 **sort** | **String**| how to sort | [optional]

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSearchPeopleAndOrg"></a>
# **getSearchPeopleAndOrg**
> Response getSearchPeopleAndOrg(filters)



Search only organizations and people.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SearchApi();

const filters = { 
  'q': "q_example", // String | search term
  'sort': "sort_example" // String | how to sort
};
apiInstance.getSearchPeopleAndOrg(filters).then((response) => {
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
 **q** | **String**| search term | [optional]
 **sort** | **String**| how to sort | [optional]

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

