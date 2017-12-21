# DeskProApi.LabelsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTypeLabels**](LabelsApi.md#getTypeLabels) | **GET** /{type}_labels | 


<a name="getTypeLabels"></a>
# **getTypeLabels**
> Response getTypeLabels(type, opts)



Get all labels by types

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.LabelsApi();

let type = "type_example"; // String | Which entity type labels we are searching?

let opts = { 
  'term': "term_example" // String | Filter label by given word
};

apiInstance.getTypeLabels(type, opts, (error, data, response) => {
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
 **type** | **String**| Which entity type labels we are searching? | 
 **term** | **String**| Filter label by given word | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

