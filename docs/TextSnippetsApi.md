# DeskProApi.TextSnippetsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteContextSnippetById**](TextSnippetsApi.md#deleteContextSnippetById) | **DELETE** /{context}_snippets/{id} | 
[**deleteContextSnippetCategoryById**](TextSnippetsApi.md#deleteContextSnippetCategoryById) | **DELETE** /{context}_snippet_categories/{id} | 
[**getContextSnippetById**](TextSnippetsApi.md#getContextSnippetById) | **GET** /{context}_snippets/{id} | 
[**getContextSnippetByIdContent**](TextSnippetsApi.md#getContextSnippetByIdContent) | **GET** /{context}_snippets/{id}/content | 
[**getContextSnippetCategories**](TextSnippetsApi.md#getContextSnippetCategories) | **GET** /{context}_snippet_categories | 
[**getContextSnippetCategoryById**](TextSnippetsApi.md#getContextSnippetCategoryById) | **GET** /{context}_snippet_categories/{id} | 
[**getContextSnippetCategoryByIdSnippet**](TextSnippetsApi.md#getContextSnippetCategoryByIdSnippet) | **GET** /{context}_snippet_categories/{id}/snippets | 
[**getContextSnippetCategoryCount**](TextSnippetsApi.md#getContextSnippetCategoryCount) | **GET** /{context}_snippet_categories/counts | 
[**getContextSnippetCount**](TextSnippetsApi.md#getContextSnippetCount) | **GET** /{context}_snippets/counts | 
[**getContextSnippets**](TextSnippetsApi.md#getContextSnippets) | **GET** /{context}_snippets | 


<a name="deleteContextSnippetById"></a>
# **deleteContextSnippetById**
> Response deleteContextSnippetById(id, context)



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

let apiInstance = new DeskProApi.TextSnippetsApi();

let id = 56; // Number | The id of the resource

let context = "context_example"; // String | 


apiInstance.deleteContextSnippetById(id, context, (error, data, response) => {
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
 **context** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContextSnippetCategoryById"></a>
# **deleteContextSnippetCategoryById**
> Response deleteContextSnippetCategoryById(id, context)



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

let apiInstance = new DeskProApi.TextSnippetsApi();

let id = 56; // Number | The id of the resource

let context = "context_example"; // String | 


apiInstance.deleteContextSnippetCategoryById(id, context, (error, data, response) => {
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
 **context** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetById"></a>
# **getContextSnippetById**
> Response getContextSnippetById(id, context)



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

let apiInstance = new DeskProApi.TextSnippetsApi();

let id = 56; // Number | The id of the resource

let context = "context_example"; // String | 


apiInstance.getContextSnippetById(id, context, (error, data, response) => {
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
 **context** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetByIdContent"></a>
# **getContextSnippetByIdContent**
> Response getContextSnippetByIdContent(id, context, opts)



get the snippets content

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TextSnippetsApi();

let id = 56; // Number | the id of the snippet

let context = "context_example"; // String | 

let opts = { 
  'snippet': "snippet_example" // String | the context of the category
};

apiInstance.getContextSnippetByIdContent(id, context, opts, (error, data, response) => {
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
 **id** | **Number**| the id of the snippet | 
 **context** | **String**|  | 
 **snippet** | **String**| the context of the category | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetCategories"></a>
# **getContextSnippetCategories**
> Response getContextSnippetCategories(context, opts)



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

let apiInstance = new DeskProApi.TextSnippetsApi();

let context = "context_example"; // String | 

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getContextSnippetCategories(context, opts, (error, data, response) => {
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
 **context** | **String**|  | 
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

<a name="getContextSnippetCategoryById"></a>
# **getContextSnippetCategoryById**
> Response getContextSnippetCategoryById(id, context)



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

let apiInstance = new DeskProApi.TextSnippetsApi();

let id = 56; // Number | The id of the resource

let context = "context_example"; // String | 


apiInstance.getContextSnippetCategoryById(id, context, (error, data, response) => {
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
 **context** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetCategoryByIdSnippet"></a>
# **getContextSnippetCategoryByIdSnippet**
> Response getContextSnippetCategoryByIdSnippet(id, context, opts)



get the snippets within a category

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TextSnippetsApi();

let id = 56; // Number | the id of the category

let context = "context_example"; // String | 

let opts = { 
  'snippet': "snippet_example" // String | the context of the category
};

apiInstance.getContextSnippetCategoryByIdSnippet(id, context, opts, (error, data, response) => {
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
 **id** | **Number**| the id of the category | 
 **context** | **String**|  | 
 **snippet** | **String**| the context of the category | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetCategoryCount"></a>
# **getContextSnippetCategoryCount**
> Response getContextSnippetCategoryCount(context)



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

let apiInstance = new DeskProApi.TextSnippetsApi();

let context = "context_example"; // String | 


apiInstance.getContextSnippetCategoryCount(context, (error, data, response) => {
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
 **context** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetCount"></a>
# **getContextSnippetCount**
> Response getContextSnippetCount(context)



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

let apiInstance = new DeskProApi.TextSnippetsApi();

let context = "context_example"; // String | 


apiInstance.getContextSnippetCount(context, (error, data, response) => {
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
 **context** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippets"></a>
# **getContextSnippets**
> Response getContextSnippets(context, opts)



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

let apiInstance = new DeskProApi.TextSnippetsApi();

let context = "context_example"; // String | 

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getContextSnippets(context, opts, (error, data, response) => {
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
 **context** | **String**|  | 
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

