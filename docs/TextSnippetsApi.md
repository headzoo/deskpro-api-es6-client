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
> Response deleteContextSnippetById(Number id, String context)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContextSnippetCategoryById"></a>
# **deleteContextSnippetCategoryById**
> Response deleteContextSnippetCategoryById(Number id, String context)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetById"></a>
# **getContextSnippetById**
> Response getContextSnippetById(Number id, String context)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetByIdContent"></a>
# **getContextSnippetByIdContent**
> Response getContextSnippetByIdContent(Number id, String context, object filters)



get the snippets content

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const id = 56; // Number | the id of the snippet

const context = "context_example"; // String | 

const filters = { 
  'snippet': "snippet_example" // String | the context of the category
};
apiInstance.getContextSnippetByIdContent(id, context, filters).then((response) => {
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

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Response getContextSnippetCategories(String context, object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const context = "context_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getContextSnippetCategories(context, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**|  |

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

<a name="getContextSnippetCategoryById"></a>
# **getContextSnippetCategoryById**
> Response getContextSnippetCategoryById(Number id, String context)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetCategoryByIdSnippet"></a>
# **getContextSnippetCategoryByIdSnippet**
> Response getContextSnippetCategoryByIdSnippet(Number id, String context, object filters)



get the snippets within a category

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const id = 56; // Number | the id of the category

const context = "context_example"; // String | 

const filters = { 
  'snippet': "snippet_example" // String | the context of the category
};
apiInstance.getContextSnippetCategoryByIdSnippet(id, context, filters).then((response) => {
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

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Response getContextSnippetCategoryCount(String context)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippetCount"></a>
# **getContextSnippetCount**
> Response getContextSnippetCount(String context)



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

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContextSnippets"></a>
# **getContextSnippets**
> Response getContextSnippets(String context, object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TextSnippetsApi();

const context = "context_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getContextSnippets(context, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**|  |

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

