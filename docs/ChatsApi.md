# DeskProApi.ChatsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAgentChatById**](ChatsApi.md#deleteAgentChatById) | **DELETE** /agent_chats/{id} | 
[**deleteAgentChatByIdDelete**](ChatsApi.md#deleteAgentChatByIdDelete) | **DELETE** /agent_chats/{id}/delete | 
[**deleteAgentChatByIdLeave**](ChatsApi.md#deleteAgentChatByIdLeave) | **DELETE** /agent_chats/{id}/leave | 
[**deleteAgentChatByParentIdMessageById**](ChatsApi.md#deleteAgentChatByParentIdMessageById) | **DELETE** /agent_chats/{parentId}/messages/{id} | 
[**deleteUserChatById**](ChatsApi.md#deleteUserChatById) | **DELETE** /user_chats/{id} | 
[**deleteUserChatCustomFieldById**](ChatsApi.md#deleteUserChatCustomFieldById) | **DELETE** /user_chat_custom_fields/{id} | 
[**getAgentChatById**](ChatsApi.md#getAgentChatById) | **GET** /agent_chats/{id} | 
[**getAgentChatByParentIdMessage**](ChatsApi.md#getAgentChatByParentIdMessage) | **GET** /agent_chats/{parentId}/messages | 
[**getAgentChatByParentIdMessageById**](ChatsApi.md#getAgentChatByParentIdMessageById) | **GET** /agent_chats/{parentId}/messages/{id} | 
[**getAgentChatByParentIdMessageByIdPage**](ChatsApi.md#getAgentChatByParentIdMessageByIdPage) | **GET** /agent_chats/{parentId}/messages/{id}/page | 
[**getAgentChatByParentIdMessageCount**](ChatsApi.md#getAgentChatByParentIdMessageCount) | **GET** /agent_chats/{parentId}/messages/counts | 
[**getAgentChatCount**](ChatsApi.md#getAgentChatCount) | **GET** /agent_chats/counts | 
[**getAgentChatGroup**](ChatsApi.md#getAgentChatGroup) | **GET** /agent_chats/groups | 
[**getAgentChatMessageCount**](ChatsApi.md#getAgentChatMessageCount) | **GET** /agent_chats/messages/counts | 
[**getAgentChats**](ChatsApi.md#getAgentChats) | **GET** /agent_chats | 
[**getUserChatByConversationIdMessage**](ChatsApi.md#getUserChatByConversationIdMessage) | **GET** /user_chats/{conversationId}/messages | 
[**getUserChatByConversationIdMessageCount**](ChatsApi.md#getUserChatByConversationIdMessageCount) | **GET** /user_chats/{conversationId}/messages/counts | 
[**getUserChatById**](ChatsApi.md#getUserChatById) | **GET** /user_chats/{id} | 
[**getUserChatCount**](ChatsApi.md#getUserChatCount) | **GET** /user_chats/counts | 
[**getUserChatCustomFieldById**](ChatsApi.md#getUserChatCustomFieldById) | **GET** /user_chat_custom_fields/{id} | 
[**getUserChatCustomFields**](ChatsApi.md#getUserChatCustomFields) | **GET** /user_chat_custom_fields | 
[**getUserChats**](ChatsApi.md#getUserChats) | **GET** /user_chats | 
[**updateAgentChatByParentIdMessageMarkAll**](ChatsApi.md#updateAgentChatByParentIdMessageMarkAll) | **PUT** /agent_chats/{parentId}/messages/mark_all | 
[**updateUserChatByIdAssignByAgentId**](ChatsApi.md#updateUserChatByIdAssignByAgentId) | **PUT** /user_chats/{id}/assign/{agentId} | 
[**updateUserChatByIdEnd**](ChatsApi.md#updateUserChatByIdEnd) | **PUT** /user_chats/{id}/end | 


<a name="deleteAgentChatById"></a>
# **deleteAgentChatById**
> Response deleteAgentChatById(id)



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

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteAgentChatById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAgentChatByIdDelete"></a>
# **deleteAgentChatByIdDelete**
> Response deleteAgentChatByIdDelete(id)



delete group

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | a chat id


apiInstance.deleteAgentChatByIdDelete(id, (error, data, response) => {
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
 **id** | **Number**| a chat id | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAgentChatByIdLeave"></a>
# **deleteAgentChatByIdLeave**
> Response deleteAgentChatByIdLeave(id)



leave group

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | a chat id


apiInstance.deleteAgentChatByIdLeave(id, (error, data, response) => {
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
 **id** | **Number**| a chat id | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAgentChatByParentIdMessageById"></a>
# **deleteAgentChatByParentIdMessageById**
> Response deleteAgentChatByParentIdMessageById(id, parentId)



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

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | The id of the resource

let parentId = "parentId_example"; // String | 


apiInstance.deleteAgentChatByParentIdMessageById(id, parentId, (error, data, response) => {
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
 **parentId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserChatById"></a>
# **deleteUserChatById**
> Response deleteUserChatById(id)



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

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteUserChatById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserChatCustomFieldById"></a>
# **deleteUserChatCustomFieldById**
> Response deleteUserChatCustomFieldById(id)



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

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteUserChatCustomFieldById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatById"></a>
# **getAgentChatById**
> Response getAgentChatById(id)



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

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | The id of the resource


apiInstance.getAgentChatById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatByParentIdMessage"></a>
# **getAgentChatByParentIdMessage**
> Response getAgentChatByParentIdMessage(parentId, opts)



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

let apiInstance = new DeskProApi.ChatsApi();

let parentId = "parentId_example"; // String | 

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'search': "search_example", // String | 
  'order': "order_example" // String | 
};

apiInstance.getAgentChatByParentIdMessage(parentId, opts, (error, data, response) => {
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
 **parentId** | **String**|  | 
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **search** | **String**|  | [optional] 
 **order** | **String**|  | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatByParentIdMessageById"></a>
# **getAgentChatByParentIdMessageById**
> Response getAgentChatByParentIdMessageById(id, parentId)



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

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | The id of the resource

let parentId = "parentId_example"; // String | 


apiInstance.getAgentChatByParentIdMessageById(id, parentId, (error, data, response) => {
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
 **parentId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatByParentIdMessageByIdPage"></a>
# **getAgentChatByParentIdMessageByIdPage**
> Response getAgentChatByParentIdMessageByIdPage(parentId, id)



get page where this message is

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ChatsApi();

let parentId = "parentId_example"; // String | 

let id = "id_example"; // String | 


apiInstance.getAgentChatByParentIdMessageByIdPage(parentId, id, (error, data, response) => {
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
 **parentId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatByParentIdMessageCount"></a>
# **getAgentChatByParentIdMessageCount**
> Response getAgentChatByParentIdMessageCount(parentId)



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

let apiInstance = new DeskProApi.ChatsApi();

let parentId = "parentId_example"; // String | 


apiInstance.getAgentChatByParentIdMessageCount(parentId, (error, data, response) => {
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
 **parentId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatCount"></a>
# **getAgentChatCount**
> Response getAgentChatCount()



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

let apiInstance = new DeskProApi.ChatsApi();

apiInstance.getAgentChatCount((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatGroup"></a>
# **getAgentChatGroup**
> Response getAgentChatGroup()



get agent chat groups

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ChatsApi();

apiInstance.getAgentChatGroup((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatMessageCount"></a>
# **getAgentChatMessageCount**
> Response getAgentChatMessageCount()



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

let apiInstance = new DeskProApi.ChatsApi();

apiInstance.getAgentChatMessageCount((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChats"></a>
# **getAgentChats**
> Response getAgentChats(opts)



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

let apiInstance = new DeskProApi.ChatsApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getAgentChats(opts, (error, data, response) => {
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

<a name="getUserChatByConversationIdMessage"></a>
# **getUserChatByConversationIdMessage**
> Response getUserChatByConversationIdMessage(conversationId, opts)



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

let apiInstance = new DeskProApi.ChatsApi();

let conversationId = "conversationId_example"; // String | 

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'lastMessageId': 56, // Number | 
  'agentOnly': 56 // Number | 
};

apiInstance.getUserChatByConversationIdMessage(conversationId, opts, (error, data, response) => {
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
 **conversationId** | **String**|  | 
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **lastMessageId** | **Number**|  | [optional] 
 **agentOnly** | **Number**|  | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserChatByConversationIdMessageCount"></a>
# **getUserChatByConversationIdMessageCount**
> Response getUserChatByConversationIdMessageCount(conversationId, opts)



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

let apiInstance = new DeskProApi.ChatsApi();

let conversationId = "conversationId_example"; // String | 

let opts = { 
  'lastMessageId': 56, // Number | 
  'agentOnly': 56 // Number | 
};

apiInstance.getUserChatByConversationIdMessageCount(conversationId, opts, (error, data, response) => {
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
 **conversationId** | **String**|  | 
 **lastMessageId** | **Number**|  | [optional] 
 **agentOnly** | **Number**|  | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserChatById"></a>
# **getUserChatById**
> Response getUserChatById(id)



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

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | The id of the resource


apiInstance.getUserChatById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserChatCount"></a>
# **getUserChatCount**
> Response getUserChatCount(opts)



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

let apiInstance = new DeskProApi.ChatsApi();

let opts = { 
  'dateCreated': "dateCreated_example", // String | 
  'datePeriod': "datePeriod_example", // String | 
  'agent': 56, // Number | 
  'department': 56, // Number | 
  'chatFieldId': "chatFieldId_example", // String |   *                  Custom chat field filter. To filter by a custom field with ID=1 you need to add  *                  ?chat_field.1=value to the query string
  'groupBy': true // Boolean | how to group counts
};

apiInstance.getUserChatCount(opts, (error, data, response) => {
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
 **dateCreated** | **String**|  | [optional] 
 **datePeriod** | **String**|  | [optional] 
 **agent** | **Number**|  | [optional] 
 **department** | **Number**|  | [optional] 
 **chatFieldId** | **String**|   *                  Custom chat field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?chat_field.1&#x3D;value to the query string | [optional] 
 **groupBy** | **Boolean**| how to group counts | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserChatCustomFieldById"></a>
# **getUserChatCustomFieldById**
> Response getUserChatCustomFieldById(id)



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

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | The id of the resource


apiInstance.getUserChatCustomFieldById(id, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserChatCustomFields"></a>
# **getUserChatCustomFields**
> Response getUserChatCustomFields(opts)



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

let apiInstance = new DeskProApi.ChatsApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getUserChatCustomFields(opts, (error, data, response) => {
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

<a name="getUserChats"></a>
# **getUserChats**
> Response getUserChats(opts)



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

let apiInstance = new DeskProApi.ChatsApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'dateCreated': "dateCreated_example", // String | 
  'datePeriod': "datePeriod_example", // String | 
  'agent': 56, // Number | 
  'department': 56, // Number | 
  'chatFieldId': "chatFieldId_example" // String |   *                  Custom chat field filter. To filter by a custom field with ID=1 you need to add  *                  ?chat_field.1=value to the query string
};

apiInstance.getUserChats(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **dateCreated** | **String**|  | [optional] 
 **datePeriod** | **String**|  | [optional] 
 **agent** | **Number**|  | [optional] 
 **department** | **Number**|  | [optional] 
 **chatFieldId** | **String**|   *                  Custom chat field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?chat_field.1&#x3D;value to the query string | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAgentChatByParentIdMessageMarkAll"></a>
# **updateAgentChatByParentIdMessageMarkAll**
> Response updateAgentChatByParentIdMessageMarkAll(parentId)



mark message as sent/read

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ChatsApi();

let parentId = "parentId_example"; // String | 


apiInstance.updateAgentChatByParentIdMessageMarkAll(parentId, (error, data, response) => {
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
 **parentId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserChatByIdAssignByAgentId"></a>
# **updateUserChatByIdAssignByAgentId**
> Response updateUserChatByIdAssignByAgentId(id, agentId)



Assign chat to agent

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | 

let agentId = 56; // Number | 


apiInstance.updateUserChatByIdAssignByAgentId(id, agentId, (error, data, response) => {
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
 **id** | **Number**|  | 
 **agentId** | **Number**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserChatByIdEnd"></a>
# **updateUserChatByIdEnd**
> Response updateUserChatByIdEnd(id)



End a chat conversation

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ChatsApi();

let id = 56; // Number | 


apiInstance.updateUserChatByIdEnd(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

