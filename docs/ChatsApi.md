# DeskproApi.ChatsApi

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
> Response deleteAgentChatById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteAgentChatById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAgentChatByIdDelete"></a>
# **deleteAgentChatByIdDelete**
> Response deleteAgentChatByIdDelete(Number id)



delete group

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | a chat id

apiInstance.deleteAgentChatByIdDelete(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| a chat id |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAgentChatByIdLeave"></a>
# **deleteAgentChatByIdLeave**
> Response deleteAgentChatByIdLeave(Number id)



leave group

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | a chat id

apiInstance.deleteAgentChatByIdLeave(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| a chat id |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAgentChatByParentIdMessageById"></a>
# **deleteAgentChatByParentIdMessageById**
> Response deleteAgentChatByParentIdMessageById(Number id, String parentId)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.deleteAgentChatByParentIdMessageById(id, parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |
 **parentId** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserChatById"></a>
# **deleteUserChatById**
> Response deleteUserChatById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteUserChatById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserChatCustomFieldById"></a>
# **deleteUserChatCustomFieldById**
> Response deleteUserChatCustomFieldById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteUserChatCustomFieldById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatById"></a>
# **getAgentChatById**
> Response getAgentChatById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | The id of the resource

apiInstance.getAgentChatById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatByParentIdMessage"></a>
# **getAgentChatByParentIdMessage**
> Response getAgentChatByParentIdMessage(String parentId, object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const parentId = "parentId_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'search': "search_example", // String | 
  'order': "order_example" // String | 
};
apiInstance.getAgentChatByParentIdMessage(parentId, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Response getAgentChatByParentIdMessageById(Number id, String parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getAgentChatByParentIdMessageById(id, parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |
 **parentId** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatByParentIdMessageByIdPage"></a>
# **getAgentChatByParentIdMessageByIdPage**
> Response getAgentChatByParentIdMessageByIdPage(String parentId, String id)



get page where this message is

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const parentId = "parentId_example"; // String | 

const id = "id_example"; // String | 

apiInstance.getAgentChatByParentIdMessageByIdPage(parentId, id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  |
 **id** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChatByParentIdMessageCount"></a>
# **getAgentChatByParentIdMessageCount**
> Response getAgentChatByParentIdMessageCount(String parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const parentId = "parentId_example"; // String | 

apiInstance.getAgentChatByParentIdMessageCount(parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  |

### Filters
This endpoint does not need any filters.


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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();
apiInstance.getAgentChatCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameters.


### Filters
This endpoint does not need any filters.


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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();
apiInstance.getAgentChatGroup().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameters.


### Filters
This endpoint does not need any filters.


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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();
apiInstance.getAgentChatMessageCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameters.


### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentChats"></a>
# **getAgentChats**
> Response getAgentChats(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getAgentChats(filters).then((response) => {
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
> Response getUserChatByConversationIdMessage(String conversationId, object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const conversationId = "conversationId_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'lastMessageId': 56, // Number | 
  'agentOnly': 56 // Number | 
};
apiInstance.getUserChatByConversationIdMessage(conversationId, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**|  |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Response getUserChatByConversationIdMessageCount(String conversationId, object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const conversationId = "conversationId_example"; // String | 

const filters = { 
  'lastMessageId': 56, // Number | 
  'agentOnly': 56 // Number | 
};
apiInstance.getUserChatByConversationIdMessageCount(conversationId, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**|  |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Response getUserChatById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | The id of the resource

apiInstance.getUserChatById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserChatCount"></a>
# **getUserChatCount**
> Response getUserChatCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const filters = { 
  'dateCreated': "dateCreated_example", // String | 
  'datePeriod': "datePeriod_example", // String | 
  'agent': 56, // Number | 
  'department': 56, // Number | 
  'chatFieldId': "chatFieldId_example", // String |   *                  Custom chat field filter. To filter by a custom field with ID=1 you need to add  *                  ?chat_field.1=value to the query string
  'groupBy': true // Boolean | how to group counts
};
apiInstance.getUserChatCount(filters).then((response) => {
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
> Response getUserChatCustomFieldById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | The id of the resource

apiInstance.getUserChatCustomFieldById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserChatCustomFields"></a>
# **getUserChatCustomFields**
> Response getUserChatCustomFields(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getUserChatCustomFields(filters).then((response) => {
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
> Response getUserChats(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const filters = { 
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
apiInstance.getUserChats(filters).then((response) => {
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
> Response updateAgentChatByParentIdMessageMarkAll(String parentId)



mark message as sent/read

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const parentId = "parentId_example"; // String | 

apiInstance.updateAgentChatByParentIdMessageMarkAll(parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserChatByIdAssignByAgentId"></a>
# **updateUserChatByIdAssignByAgentId**
> Response updateUserChatByIdAssignByAgentId(Number id, Number agentId)



Assign chat to agent

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | 

const agentId = 56; // Number | 

apiInstance.updateUserChatByIdAssignByAgentId(id, agentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  |
 **agentId** | **Number**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserChatByIdEnd"></a>
# **updateUserChatByIdEnd**
> Response updateUserChatByIdEnd(Number id)



End a chat conversation

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ChatsApi();

const id = 56; // Number | 

apiInstance.updateUserChatByIdEnd(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

