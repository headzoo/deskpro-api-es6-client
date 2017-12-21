# DeskProApi.SearchApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSearch**](SearchApi.md#getSearch) | **GET** /search | 
[**getSearchByType**](SearchApi.md#getSearchByType) | **GET** /search/{type} | 
[**getSearchPeopleAndOrg**](SearchApi.md#getSearchPeopleAndOrg) | **GET** /search/people_and_orgs | 


<a name="getSearch"></a>
# **getSearch**
> Response getSearch(opts)



Search through articles, downloads, feedback, news, tickets, chatconversations, people and organizations.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.SearchApi();

let opts = { 
  'q': "q_example", // String | search term
  'sort': "sort_example", // String | how to sort
  'types': "types_example" // String | comma separated list of types
};

apiInstance.getSearch(opts, (error, data, response) => {
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
> Response getSearchByType(type, opts)



Search by entity type.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.SearchApi();

let type = "type_example"; // String | 

let opts = { 
  'q': "q_example", // String | search term
  'sort': "sort_example" // String | how to sort
};

apiInstance.getSearchByType(type, opts, (error, data, response) => {
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
 **type** | **String**|  | 
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
> Response getSearchPeopleAndOrg(opts)



Search only organizations and people.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.SearchApi();

let opts = { 
  'q': "q_example", // String | search term
  'sort': "sort_example" // String | how to sort
};

apiInstance.getSearchPeopleAndOrg(opts, (error, data, response) => {
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
 **q** | **String**| search term | [optional] 
 **sort** | **String**| how to sort | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

