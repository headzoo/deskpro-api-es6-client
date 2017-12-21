# DeskproApi.SnippetsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSnippetById**](SnippetsApi.md#deleteSnippetById) | **DELETE** /snippets/{id} | 
[**getSnippetById**](SnippetsApi.md#getSnippetById) | **GET** /snippets/{id} | 
[**getSnippetCount**](SnippetsApi.md#getSnippetCount) | **GET** /snippets/counts | 
[**getSnippetCsv**](SnippetsApi.md#getSnippetCsv) | **GET** /snippets/csv | 
[**getSnippetLabel**](SnippetsApi.md#getSnippetLabel) | **GET** /snippets/labels | 
[**getSnippetRenderByIdByTypeByObjectId**](SnippetsApi.md#getSnippetRenderByIdByTypeByObjectId) | **GET** /snippets/render/{id}/{type}/{objectId} | 
[**getSnippets**](SnippetsApi.md#getSnippets) | **GET** /snippets | 
[**getSnippetsChangeLogs**](SnippetsApi.md#getSnippetsChangeLogs) | **GET** /snippets_change_logs | 
[**getSnippetsUse**](SnippetsApi.md#getSnippetsUse) | **GET** /snippets_use | 


<a name="deleteSnippetById"></a>
# **deleteSnippetById**
> Response deleteSnippetById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SnippetsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteSnippetById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSnippetById"></a>
# **getSnippetById**
> Response getSnippetById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SnippetsApi();

const id = 56; // Number | The id of the resource

apiInstance.getSnippetById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSnippetCount"></a>
# **getSnippetCount**
> Response getSnippetCount(opts)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SnippetsApi();

const opts = { 
  'inlineSideloads': "inlineSideloads_example", // String | sideload entities
  'include': "include_example", // String | entities to sideload (ex: snippet_translation)
  'type': "type_example", // String | type to limit result
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getSnippetCount(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineSideloads** | **String**| sideload entities | [optional] 
 **include** | **String**| entities to sideload (ex: snippet_translation) | [optional] 
 **type** | **String**| type to limit result | [optional] 
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

<a name="getSnippetCsv"></a>
# **getSnippetCsv**
> Response getSnippetCsv(opts)



Get an export of snippets

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SnippetsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getSnippetCsv(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

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

<a name="getSnippetLabel"></a>
# **getSnippetLabel**
> Response getSnippetLabel(opts)



Get collection of snippet labels

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SnippetsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getSnippetLabel(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

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

<a name="getSnippetRenderByIdByTypeByObjectId"></a>
# **getSnippetRenderByIdByTypeByObjectId**
> Response getSnippetRenderByIdByTypeByObjectId(id, type, objectId)



Render a snippet for an object

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SnippetsApi();

const id = 56; // Number | The id of the object

const type = "type_example"; // String | The type of object to render the snippet for

const objectId = "objectId_example"; // String | 

apiInstance.getSnippetRenderByIdByTypeByObjectId(id, type, objectId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the object | 
 **type** | **String**| The type of object to render the snippet for | 
 **objectId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSnippets"></a>
# **getSnippets**
> Response getSnippets(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SnippetsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'inlineSideloads': "inlineSideloads_example", // String | sideload entities
  'include': "include_example", // String | entities to sideload (ex: snippet_translation)
  'type': "type_example" // String | type to limit result
};
apiInstance.getSnippets(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **inlineSideloads** | **String**| sideload entities | [optional] 
 **include** | **String**| entities to sideload (ex: snippet_translation) | [optional] 
 **type** | **String**| type to limit result | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSnippetsChangeLogs"></a>
# **getSnippetsChangeLogs**
> Response getSnippetsChangeLogs(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SnippetsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'inlineSideloads': "inlineSideloads_example", // String | sideload entities
  'include': "include_example", // String | entities to sideload (ex: ticket_message)
  'snippetId': "snippetId_example", // String | Snippet Id
  'languageId': "languageId_example", // String | Language Id
  'type': "type_example" // String | Type
};
apiInstance.getSnippetsChangeLogs(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **inlineSideloads** | **String**| sideload entities | [optional] 
 **include** | **String**| entities to sideload (ex: ticket_message) | [optional] 
 **snippetId** | **String**| Snippet Id | [optional] 
 **languageId** | **String**| Language Id | [optional] 
 **type** | **String**| Type | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSnippetsUse"></a>
# **getSnippetsUse**
> Response getSnippetsUse(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SnippetsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'inlineSideloads': "inlineSideloads_example", // String | sideload entities
  'include': "include_example", // String | entities to sideload (ex: ticket_message)
  'snippetId': "snippetId_example" // String | Snippet Id
};
apiInstance.getSnippetsUse(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **inlineSideloads** | **String**| sideload entities | [optional] 
 **include** | **String**| entities to sideload (ex: ticket_message) | [optional] 
 **snippetId** | **String**| Snippet Id | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

