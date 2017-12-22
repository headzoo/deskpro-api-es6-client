# DeskproApi.TagsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiTagById**](TagsApi.md#getApiTagById) | **GET** /api_tags/{id} | 
[**getApiTagByIdFlatten**](TagsApi.md#getApiTagByIdFlatten) | **GET** /api_tags/{id}/flatten | 
[**updateApiTagById**](TagsApi.md#updateApiTagById) | **PUT** /api_tags/{id} | 


<a name="getApiTagById"></a>
# **getApiTagById**
> Response getApiTagById(id)



get api tags collection

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TagsApi();

const id = 56; // Number | The id of key

apiInstance.getApiTagById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of key |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApiTagByIdFlatten"></a>
# **getApiTagByIdFlatten**
> Response getApiTagByIdFlatten(id)



get api tags faltten collection

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TagsApi();

const id = 56; // Number | The id of key

apiInstance.getApiTagByIdFlatten(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of key |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateApiTagById"></a>
# **updateApiTagById**
> Response updateApiTagById(id, filters)



update tags for key

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TagsApi();

const id = 56; // Number | The id of key

const filters = { 
  'action': "action_example", // String | Tag name
  'value': true // Boolean | Allow|deny
};
apiInstance.updateApiTagById(id, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of key |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **String**| Tag name | [optional]
 **value** | **Boolean**| Allow|deny | [optional]

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

