# DeskproApi.LabelsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTypeLabels**](LabelsApi.md#getTypeLabels) | **GET** /{type}_labels | 


<a name="getTypeLabels"></a>
# **getTypeLabels**
> Response getTypeLabels(String type, object filters)



Get all labels by types

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.LabelsApi();

const type = "type_example"; // String | Which entity type labels we are searching?

const filters = { 
  'term': "term_example" // String | Filter label by given word
};
apiInstance.getTypeLabels(type, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Which entity type labels we are searching? |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| Filter label by given word | [optional]

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

