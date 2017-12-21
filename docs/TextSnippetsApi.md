# DeskproApi.TextSnippetsApi

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const id = 56; // Number | The id of the resource

const context = "context_example"; // String | 

apiInstance.deleteContextSnippetById(id, context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const id = 56; // Number | The id of the resource

const context = "context_example"; // String | 

apiInstance.deleteContextSnippetCategoryById(id, context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const id = 56; // Number | The id of the resource

const context = "context_example"; // String | 

apiInstance.getContextSnippetById(id, context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const id = 56; // Number | the id of the snippet

const context = "context_example"; // String | 

const opts = { 
  'snippet': "snippet_example" // String | the context of the category
};
apiInstance.getContextSnippetByIdContent(id, context, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const context = "context_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getContextSnippetCategories(context, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const id = 56; // Number | The id of the resource

const context = "context_example"; // String | 

apiInstance.getContextSnippetCategoryById(id, context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const id = 56; // Number | the id of the category

const context = "context_example"; // String | 

const opts = { 
  'snippet': "snippet_example" // String | the context of the category
};
apiInstance.getContextSnippetCategoryByIdSnippet(id, context, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const context = "context_example"; // String | 

apiInstance.getContextSnippetCategoryCount(context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const context = "context_example"; // String | 

apiInstance.getContextSnippetCount(context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const context = "context_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getContextSnippets(context, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

