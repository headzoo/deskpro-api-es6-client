# DeskproApi.TicketsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTicketById**](TicketsApi.md#deleteTicketById) | **DELETE** /tickets/{id} | 
[**deleteTicketByParentIdCcById**](TicketsApi.md#deleteTicketByParentIdCcById) | **DELETE** /tickets/{parentId}/cc/{id} | 
[**deleteTicketByParentIdMessageById**](TicketsApi.md#deleteTicketByParentIdMessageById) | **DELETE** /tickets/{parentId}/messages/{id} | 
[**deleteTicketByParentIdTicketSlaById**](TicketsApi.md#deleteTicketByParentIdTicketSlaById) | **DELETE** /tickets/{parentId}/ticket_slas/{id} | 
[**deleteTicketByParentIdTicketSlaBySlaBySlaId**](TicketsApi.md#deleteTicketByParentIdTicketSlaBySlaBySlaId) | **DELETE** /tickets/{parentId}/ticket_slas/by_sla/{slaId} | 
[**deleteTicketByTicketFollowUpById**](TicketsApi.md#deleteTicketByTicketFollowUpById) | **DELETE** /tickets/{ticket}/follow-ups/{id} | 
[**deleteTicketByTicketLink**](TicketsApi.md#deleteTicketByTicketLink) | **DELETE** /tickets/{ticket}/links | 
[**deleteTicketCustomFieldById**](TicketsApi.md#deleteTicketCustomFieldById) | **DELETE** /ticket_custom_fields/{id} | 
[**deleteTicketProblemById**](TicketsApi.md#deleteTicketProblemById) | **DELETE** /ticket_problems/{id} | 
[**get20170401TicketLayoutByContext**](TicketsApi.md#get20170401TicketLayoutByContext) | **GET** /20170401/ticket_layouts/{context} | 
[**get20170401TicketLayoutByContextByDepartment**](TicketsApi.md#get20170401TicketLayoutByContextByDepartment) | **GET** /20170401/ticket_layouts/{context}/{department} | 
[**get20170401TicketLayoutByContextDepartmentJ**](TicketsApi.md#get20170401TicketLayoutByContextDepartmentJ) | **GET** /20170401/ticket_layouts/{context}/{department}.js | 
[**get20170401TicketLayoutContextJ**](TicketsApi.md#get20170401TicketLayoutContextJ) | **GET** /20170401/ticket_layouts/{context}.js | 
[**getTicketById**](TicketsApi.md#getTicketById) | **GET** /tickets/{id} | 
[**getTicketByParentIdAttachment**](TicketsApi.md#getTicketByParentIdAttachment) | **GET** /tickets/{parentId}/attachments | 
[**getTicketByParentIdCc**](TicketsApi.md#getTicketByParentIdCc) | **GET** /tickets/{parentId}/cc | 
[**getTicketByParentIdCcById**](TicketsApi.md#getTicketByParentIdCcById) | **GET** /tickets/{parentId}/cc/{id} | 
[**getTicketByParentIdLog**](TicketsApi.md#getTicketByParentIdLog) | **GET** /tickets/{parentId}/logs | 
[**getTicketByParentIdLogById**](TicketsApi.md#getTicketByParentIdLogById) | **GET** /tickets/{parentId}/logs/{id} | 
[**getTicketByParentIdLogCount**](TicketsApi.md#getTicketByParentIdLogCount) | **GET** /tickets/{parentId}/logs/counts | 
[**getTicketByParentIdMessage**](TicketsApi.md#getTicketByParentIdMessage) | **GET** /tickets/{parentId}/messages | 
[**getTicketByParentIdMessageById**](TicketsApi.md#getTicketByParentIdMessageById) | **GET** /tickets/{parentId}/messages/{id} | 
[**getTicketByParentIdMessageByIdAttachment**](TicketsApi.md#getTicketByParentIdMessageByIdAttachment) | **GET** /tickets/{parentId}/messages/{id}/attachments | 
[**getTicketByParentIdMessageCount**](TicketsApi.md#getTicketByParentIdMessageCount) | **GET** /tickets/{parentId}/messages/counts | 
[**getTicketByParentIdTicketSla**](TicketsApi.md#getTicketByParentIdTicketSla) | **GET** /tickets/{parentId}/ticket_slas | 
[**getTicketByParentIdTicketSlaById**](TicketsApi.md#getTicketByParentIdTicketSlaById) | **GET** /tickets/{parentId}/ticket_slas/{id} | 
[**getTicketByParentIdTicketSlaBySlaBySlaId**](TicketsApi.md#getTicketByParentIdTicketSlaBySlaBySlaId) | **GET** /tickets/{parentId}/ticket_slas/by_sla/{slaId} | 
[**getTicketByParentIdTicketSlaCount**](TicketsApi.md#getTicketByParentIdTicketSlaCount) | **GET** /tickets/{parentId}/ticket_slas/counts | 
[**getTicketByTicketFollowUp**](TicketsApi.md#getTicketByTicketFollowUp) | **GET** /tickets/{ticket}/follow-ups | 
[**getTicketByTicketFollowUpById**](TicketsApi.md#getTicketByTicketFollowUpById) | **GET** /tickets/{ticket}/follow-ups/{id} | 
[**getTicketByTicketFollowUpCount**](TicketsApi.md#getTicketByTicketFollowUpCount) | **GET** /tickets/{ticket}/follow-ups/counts | 
[**getTicketByTicketLink**](TicketsApi.md#getTicketByTicketLink) | **GET** /tickets/{ticket}/links | 
[**getTicketCategories**](TicketsApi.md#getTicketCategories) | **GET** /ticket_categories | 
[**getTicketCategoryById**](TicketsApi.md#getTicketCategoryById) | **GET** /ticket_categories/{id} | 
[**getTicketCategoryCount**](TicketsApi.md#getTicketCategoryCount) | **GET** /ticket_categories/counts | 
[**getTicketCount**](TicketsApi.md#getTicketCount) | **GET** /tickets/counts | 
[**getTicketCustomFieldById**](TicketsApi.md#getTicketCustomFieldById) | **GET** /ticket_custom_fields/{id} | 
[**getTicketCustomFields**](TicketsApi.md#getTicketCustomFields) | **GET** /ticket_custom_fields | 
[**getTicketLabelByLabelTicket**](TicketsApi.md#getTicketLabelByLabelTicket) | **GET** /ticket_labels/{label}/tickets | 
[**getTicketLayoutByContext**](TicketsApi.md#getTicketLayoutByContext) | **GET** /ticket_layouts/{context} | 
[**getTicketLayoutByContextByDepartment**](TicketsApi.md#getTicketLayoutByContextByDepartment) | **GET** /ticket_layouts/{context}/{department} | 
[**getTicketLayoutByContextDepartmentJ**](TicketsApi.md#getTicketLayoutByContextDepartmentJ) | **GET** /ticket_layouts/{context}/{department}.js | 
[**getTicketLayoutContextJ**](TicketsApi.md#getTicketLayoutContextJ) | **GET** /ticket_layouts/{context}.js | 
[**getTicketMacroById**](TicketsApi.md#getTicketMacroById) | **GET** /ticket_macros/{id} | 
[**getTicketMacros**](TicketsApi.md#getTicketMacros) | **GET** /ticket_macros | 
[**getTicketPriorities**](TicketsApi.md#getTicketPriorities) | **GET** /ticket_priorities | 
[**getTicketPriorityById**](TicketsApi.md#getTicketPriorityById) | **GET** /ticket_priorities/{id} | 
[**getTicketPriorityCount**](TicketsApi.md#getTicketPriorityCount) | **GET** /ticket_priorities/counts | 
[**getTicketProblemById**](TicketsApi.md#getTicketProblemById) | **GET** /ticket_problems/{id} | 
[**getTicketProblemByIdTicket**](TicketsApi.md#getTicketProblemByIdTicket) | **GET** /ticket_problems/{id}/tickets | 
[**getTicketProblemCount**](TicketsApi.md#getTicketProblemCount) | **GET** /ticket_problems/counts | 
[**getTicketProblems**](TicketsApi.md#getTicketProblems) | **GET** /ticket_problems | 
[**getTicketProductById**](TicketsApi.md#getTicketProductById) | **GET** /ticket_products/{id} | 
[**getTicketProductCount**](TicketsApi.md#getTicketProductCount) | **GET** /ticket_products/counts | 
[**getTicketProducts**](TicketsApi.md#getTicketProducts) | **GET** /ticket_products | 
[**getTicketStarByStarTicket**](TicketsApi.md#getTicketStarByStarTicket) | **GET** /ticket_stars/{star}/tickets | 
[**getTicketStarCount**](TicketsApi.md#getTicketStarCount) | **GET** /ticket_stars/counts | 
[**getTicketStars**](TicketsApi.md#getTicketStars) | **GET** /ticket_stars | 
[**getTicketStatuseByStatuTicket**](TicketsApi.md#getTicketStatuseByStatuTicket) | **GET** /ticket_statuses/{status}/tickets | 
[**getTicketStatuses**](TicketsApi.md#getTicketStatuses) | **GET** /ticket_statuses | 
[**getTicketWorkflowById**](TicketsApi.md#getTicketWorkflowById) | **GET** /ticket_workflows/{id} | 
[**getTicketWorkflowCount**](TicketsApi.md#getTicketWorkflowCount) | **GET** /ticket_workflows/counts | 
[**getTicketWorkflows**](TicketsApi.md#getTicketWorkflows) | **GET** /ticket_workflows | 
[**getTickets**](TicketsApi.md#getTickets) | **GET** /tickets | 
[**setTicketMacroByIdApplyByTicket**](TicketsApi.md#setTicketMacroByIdApplyByTicket) | **POST** /ticket_macros/{id}/apply/{ticket} | 
[**updateTicketByTicketActionLock**](TicketsApi.md#updateTicketByTicketActionLock) | **PUT** /tickets/{ticket}/actions/lock | 
[**updateTicketByTicketActionUnlock**](TicketsApi.md#updateTicketByTicketActionUnlock) | **PUT** /tickets/{ticket}/actions/unlock | 


<a name="deleteTicketById"></a>
# **deleteTicketById**
> Response deleteTicketById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteTicketById(id).then((response) => {
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

<a name="deleteTicketByParentIdCcById"></a>
# **deleteTicketByParentIdCcById**
> Response deleteTicketByParentIdCcById(id, parentId)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.deleteTicketByParentIdCcById(id, parentId).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTicketByParentIdMessageById"></a>
# **deleteTicketByParentIdMessageById**
> Response deleteTicketByParentIdMessageById(id, parentId)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.deleteTicketByParentIdMessageById(id, parentId).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTicketByParentIdTicketSlaById"></a>
# **deleteTicketByParentIdTicketSlaById**
> Response deleteTicketByParentIdTicketSlaById(id, parentId)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.deleteTicketByParentIdTicketSlaById(id, parentId).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTicketByParentIdTicketSlaBySlaBySlaId"></a>
# **deleteTicketByParentIdTicketSlaBySlaBySlaId**
> Response deleteTicketByParentIdTicketSlaBySlaBySlaId(parentId, slaId)



Delete single Ticket SLA.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = 56; // Number | the id of parent ticket

const slaId = 56; // Number | the id of parent SLA

apiInstance.deleteTicketByParentIdTicketSlaBySlaBySlaId(parentId, slaId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **Number**| the id of parent ticket | 
 **slaId** | **Number**| the id of parent SLA | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTicketByTicketFollowUpById"></a>
# **deleteTicketByTicketFollowUpById**
> Response deleteTicketByTicketFollowUpById(id, ticket)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

const ticket = "ticket_example"; // String | 

apiInstance.deleteTicketByTicketFollowUpById(id, ticket).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 
 **ticket** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTicketByTicketLink"></a>
# **deleteTicketByTicketLink**
> Response deleteTicketByTicketLink(ticket, opts)



delete relation between two tickets

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const ticket = "ticket_example"; // String | 

const opts = { 
  'ticketId': 56, // Number | base ticket
  'unlinkTicketId': 56, // Number | ticket to unlink
  'linkType': "linkType_example" // String | you have to specify relation type to unlink tickets properly
};
apiInstance.deleteTicketByTicketLink(ticket, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket** | **String**|  | 
 **ticketId** | **Number**| base ticket | [optional] 
 **unlinkTicketId** | **Number**| ticket to unlink | [optional] 
 **linkType** | **String**| you have to specify relation type to unlink tickets properly | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTicketCustomFieldById"></a>
# **deleteTicketCustomFieldById**
> Response deleteTicketCustomFieldById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteTicketCustomFieldById(id).then((response) => {
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

<a name="deleteTicketProblemById"></a>
# **deleteTicketProblemById**
> Response deleteTicketProblemById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteTicketProblemById(id).then((response) => {
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

<a name="get20170401TicketLayoutByContext"></a>
# **get20170401TicketLayoutByContext**
> Response get20170401TicketLayoutByContext(context)



Get ticket layouts

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const context = "context_example"; // String | context for layout

apiInstance.get20170401TicketLayoutByContext(context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**| context for layout | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="get20170401TicketLayoutByContextByDepartment"></a>
# **get20170401TicketLayoutByContextByDepartment**
> Response get20170401TicketLayoutByContextByDepartment(department, context)



Get ticket department layout for given context

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const department = 56; // Number | department id for which you want to get layout

const context = "context_example"; // String | context of layout

apiInstance.get20170401TicketLayoutByContextByDepartment(department, context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department** | **Number**| department id for which you want to get layout | 
 **context** | **String**| context of layout | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="get20170401TicketLayoutByContextDepartmentJ"></a>
# **get20170401TicketLayoutByContextDepartmentJ**
> Response get20170401TicketLayoutByContextDepartmentJ(department, context)



Get ticket department layout JS with compiled fields criteria for given context

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const department = 56; // Number | department id for which you want to get layout

const context = "context_example"; // String | context of layout

apiInstance.get20170401TicketLayoutByContextDepartmentJ(department, context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department** | **Number**| department id for which you want to get layout | 
 **context** | **String**| context of layout | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="get20170401TicketLayoutContextJ"></a>
# **get20170401TicketLayoutContextJ**
> Response get20170401TicketLayoutContextJ(context)



Get ticket layouts JS with compiled fields criteria

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const context = "context_example"; // String | context for layout

apiInstance.get20170401TicketLayoutContextJ(context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**| context for layout | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketById"></a>
# **getTicketById**
> Response getTicketById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.getTicketById(id).then((response) => {
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

<a name="getTicketByParentIdAttachment"></a>
# **getTicketByParentIdAttachment**
> Response getTicketByParentIdAttachment(parentId, opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = "parentId_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketByParentIdAttachment(parentId, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdCc"></a>
# **getTicketByParentIdCc**
> Response getTicketByParentIdCc(parentId, opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = "parentId_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketByParentIdCc(parentId, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdCcById"></a>
# **getTicketByParentIdCcById**
> Response getTicketByParentIdCcById(id, parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getTicketByParentIdCcById(id, parentId).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdLog"></a>
# **getTicketByParentIdLog**
> Response getTicketByParentIdLog(parentId, opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = "parentId_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketByParentIdLog(parentId, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdLogById"></a>
# **getTicketByParentIdLogById**
> Response getTicketByParentIdLogById(id, parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getTicketByParentIdLogById(id, parentId).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdLogCount"></a>
# **getTicketByParentIdLogCount**
> Response getTicketByParentIdLogCount(parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = "parentId_example"; // String | 

apiInstance.getTicketByParentIdLogCount(parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketByParentIdMessage"></a>
# **getTicketByParentIdMessage**
> Response getTicketByParentIdMessage(parentId, opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = "parentId_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketByParentIdMessage(parentId, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdMessageById"></a>
# **getTicketByParentIdMessageById**
> Response getTicketByParentIdMessageById(id, parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getTicketByParentIdMessageById(id, parentId).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdMessageByIdAttachment"></a>
# **getTicketByParentIdMessageByIdAttachment**
> Response getTicketByParentIdMessageByIdAttachment(parentId, id, opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = "parentId_example"; // String | 

const id = "id_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketByParentIdMessageByIdAttachment(parentId, id, opts).then((response) => {
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

<a name="getTicketByParentIdMessageCount"></a>
# **getTicketByParentIdMessageCount**
> Response getTicketByParentIdMessageCount(parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = "parentId_example"; // String | 

apiInstance.getTicketByParentIdMessageCount(parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketByParentIdTicketSla"></a>
# **getTicketByParentIdTicketSla**
> Response getTicketByParentIdTicketSla(parentId, opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = "parentId_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketByParentIdTicketSla(parentId, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdTicketSlaById"></a>
# **getTicketByParentIdTicketSlaById**
> Response getTicketByParentIdTicketSlaById(id, parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getTicketByParentIdTicketSlaById(id, parentId).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdTicketSlaBySlaBySlaId"></a>
# **getTicketByParentIdTicketSlaBySlaBySlaId**
> Response getTicketByParentIdTicketSlaBySlaBySlaId(parentId, slaId)



Retrieve single SLA for ticket by parent SLA&#39;s ID.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = 56; // Number | the id of parent ticket

const slaId = 56; // Number | the id of parent SLA

apiInstance.getTicketByParentIdTicketSlaBySlaBySlaId(parentId, slaId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **Number**| the id of parent ticket | 
 **slaId** | **Number**| the id of parent SLA | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByParentIdTicketSlaCount"></a>
# **getTicketByParentIdTicketSlaCount**
> Response getTicketByParentIdTicketSlaCount(parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const parentId = "parentId_example"; // String | 

apiInstance.getTicketByParentIdTicketSlaCount(parentId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketByTicketFollowUp"></a>
# **getTicketByTicketFollowUp**
> Response getTicketByTicketFollowUp(ticket, opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const ticket = "ticket_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketByTicketFollowUp(ticket, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket** | **String**|  | 
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByTicketFollowUpById"></a>
# **getTicketByTicketFollowUpById**
> Response getTicketByTicketFollowUpById(id, ticket)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

const ticket = "ticket_example"; // String | 

apiInstance.getTicketByTicketFollowUpById(id, ticket).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource | 
 **ticket** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByTicketFollowUpCount"></a>
# **getTicketByTicketFollowUpCount**
> Response getTicketByTicketFollowUpCount(ticket)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const ticket = "ticket_example"; // String | 

apiInstance.getTicketByTicketFollowUpCount(ticket).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketByTicketLink"></a>
# **getTicketByTicketLink**
> Response getTicketByTicketLink(ticket, opts)



get tickets linked with ticket under provided id

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const ticket = "ticket_example"; // String | 

const opts = { 
  'ticketId': 56 // Number | ticket to find id
};
apiInstance.getTicketByTicketLink(ticket, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket** | **String**|  | 
 **ticketId** | **Number**| ticket to find id | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketCategories"></a>
# **getTicketCategories**
> Response getTicketCategories(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketCategories(opts).then((response) => {
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

<a name="getTicketCategoryById"></a>
# **getTicketCategoryById**
> Response getTicketCategoryById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.getTicketCategoryById(id).then((response) => {
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

<a name="getTicketCategoryCount"></a>
# **getTicketCategoryCount**
> Response getTicketCategoryCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();
apiInstance.getTicketCategoryCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketCount"></a>
# **getTicketCount**
> Response getTicketCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();
apiInstance.getTicketCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketCustomFieldById"></a>
# **getTicketCustomFieldById**
> Response getTicketCustomFieldById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.getTicketCustomFieldById(id).then((response) => {
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

<a name="getTicketCustomFields"></a>
# **getTicketCustomFields**
> Response getTicketCustomFields(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketCustomFields(opts).then((response) => {
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

<a name="getTicketLabelByLabelTicket"></a>
# **getTicketLabelByLabelTicket**
> Response getTicketLabelByLabelTicket(label)



Get tickets with the given label

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const label = "label_example"; // String | label to filter tickets

apiInstance.getTicketLabelByLabelTicket(label).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **String**| label to filter tickets | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketLayoutByContext"></a>
# **getTicketLayoutByContext**
> Response getTicketLayoutByContext(context)



Get ticket layouts

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const context = "context_example"; // String | context for layout

apiInstance.getTicketLayoutByContext(context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**| context for layout | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketLayoutByContextByDepartment"></a>
# **getTicketLayoutByContextByDepartment**
> Response getTicketLayoutByContextByDepartment(department, context)



Get ticket department layout for given context

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const department = 56; // Number | department id for which you want to get layout

const context = "context_example"; // String | context of layout

apiInstance.getTicketLayoutByContextByDepartment(department, context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department** | **Number**| department id for which you want to get layout | 
 **context** | **String**| context of layout | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketLayoutByContextDepartmentJ"></a>
# **getTicketLayoutByContextDepartmentJ**
> Response getTicketLayoutByContextDepartmentJ(department, context)



Get ticket department layout JS with compiled fields criteria for given context

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const department = 56; // Number | department id for which you want to get layout

const context = "context_example"; // String | context of layout

apiInstance.getTicketLayoutByContextDepartmentJ(department, context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department** | **Number**| department id for which you want to get layout | 
 **context** | **String**| context of layout | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketLayoutContextJ"></a>
# **getTicketLayoutContextJ**
> Response getTicketLayoutContextJ(context)



Get ticket layouts JS with compiled fields criteria

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const context = "context_example"; // String | context for layout

apiInstance.getTicketLayoutContextJ(context).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**| context for layout | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketMacroById"></a>
# **getTicketMacroById**
> Response getTicketMacroById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.getTicketMacroById(id).then((response) => {
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

<a name="getTicketMacros"></a>
# **getTicketMacros**
> Response getTicketMacros(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketMacros(opts).then((response) => {
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

<a name="getTicketPriorities"></a>
# **getTicketPriorities**
> Response getTicketPriorities(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketPriorities(opts).then((response) => {
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

<a name="getTicketPriorityById"></a>
# **getTicketPriorityById**
> Response getTicketPriorityById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.getTicketPriorityById(id).then((response) => {
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

<a name="getTicketPriorityCount"></a>
# **getTicketPriorityCount**
> Response getTicketPriorityCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();
apiInstance.getTicketPriorityCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketProblemById"></a>
# **getTicketProblemById**
> Response getTicketProblemById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.getTicketProblemById(id).then((response) => {
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

<a name="getTicketProblemByIdTicket"></a>
# **getTicketProblemByIdTicket**
> Response getTicketProblemByIdTicket(id)



Get tickets associated with the given problem

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | problem id

apiInstance.getTicketProblemByIdTicket(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| problem id | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketProblemCount"></a>
# **getTicketProblemCount**
> Response getTicketProblemCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();
apiInstance.getTicketProblemCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketProblems"></a>
# **getTicketProblems**
> Response getTicketProblems(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketProblems(opts).then((response) => {
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

<a name="getTicketProductById"></a>
# **getTicketProductById**
> Response getTicketProductById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.getTicketProductById(id).then((response) => {
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

<a name="getTicketProductCount"></a>
# **getTicketProductCount**
> Response getTicketProductCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();
apiInstance.getTicketProductCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketProducts"></a>
# **getTicketProducts**
> Response getTicketProducts(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketProducts(opts).then((response) => {
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

<a name="getTicketStarByStarTicket"></a>
# **getTicketStarByStarTicket**
> Response getTicketStarByStarTicket(star)



Get the tickets for a star

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const star = 56; // Number | the id of star to filter by

apiInstance.getTicketStarByStarTicket(star).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **star** | **Number**| the id of star to filter by | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketStarCount"></a>
# **getTicketStarCount**
> Response getTicketStarCount()



Get the counts of tickets marked with each star

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();
apiInstance.getTicketStarCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketStars"></a>
# **getTicketStars**
> Response getTicketStars()



get a list of ticket stars

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();
apiInstance.getTicketStars().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketStatuseByStatuTicket"></a>
# **getTicketStatuseByStatuTicket**
> Response getTicketStatuseByStatuTicket(status)



Get tickets with the given status

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const status = "status_example"; // String | provide a status to filter

apiInstance.getTicketStatuseByStatuTicket(status).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| provide a status to filter | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicketStatuses"></a>
# **getTicketStatuses**
> Response getTicketStatuses()



Get all available statuses for tickets, sorted alphabetically

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();
apiInstance.getTicketStatuses().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketWorkflowById"></a>
# **getTicketWorkflowById**
> Response getTicketWorkflowById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | The id of the resource

apiInstance.getTicketWorkflowById(id).then((response) => {
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

<a name="getTicketWorkflowCount"></a>
# **getTicketWorkflowCount**
> Response getTicketWorkflowCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();
apiInstance.getTicketWorkflowCount().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

<a name="getTicketWorkflows"></a>
# **getTicketWorkflows**
> Response getTicketWorkflows(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getTicketWorkflows(opts).then((response) => {
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

<a name="getTickets"></a>
# **getTickets**
> Response getTickets(opts)



Get a list of tickets (see parameters description for additional information)

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const opts = { 
  'orderBy': "orderBy_example", // String | tickets list sort
  'ids': "ids_example", // String | ticket list to fetch, comma separated list
  'orderDir': "orderDir_example", // String | tickets list sort order
  'page': 56, // Number | pagination page parameter
  'count': 56, // Number | pagination results per page parameter.
  'filter': 56, // Number | TicketFilter ID option
  'labels': ["labels_example"], // [String] | labels filter option
  'star': 56, // Number | star filter
  'status': 56, // Number | status filter
  'notStatus': 56, // Number | not status filter
  'agent': 56, // Number | agent filter
  'person': 56, // Number | person filter
  'language': 56, // Number | language filter
  'organization': 56, // Number | organization filter
  'problem': 56, // Number | problem filter
  'department': 56, // Number | department filter
  'sla': 56, // Number | sla id filter
  'slaStatus': 56, // Number | sla status filter
  'ticketFieldId': "ticketFieldId_example" // String |       *                  Custom ticket field filter. To filter by a custom field with ID=1 you need to add      *                  ?ticket_field.1=value to the query string
};
apiInstance.getTickets(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderBy** | **String**| tickets list sort | [optional] 
 **ids** | **String**| ticket list to fetch, comma separated list | [optional] 
 **orderDir** | **String**| tickets list sort order | [optional] 
 **page** | **Number**| pagination page parameter | [optional] 
 **count** | **Number**| pagination results per page parameter. | [optional] 
 **filter** | **Number**| TicketFilter ID option | [optional] 
 **labels** | [**[String]**](String.md)| labels filter option | [optional] 
 **star** | **Number**| star filter | [optional] 
 **status** | **Number**| status filter | [optional] 
 **notStatus** | **Number**| not status filter | [optional] 
 **agent** | **Number**| agent filter | [optional] 
 **person** | **Number**| person filter | [optional] 
 **language** | **Number**| language filter | [optional] 
 **organization** | **Number**| organization filter | [optional] 
 **problem** | **Number**| problem filter | [optional] 
 **department** | **Number**| department filter | [optional] 
 **sla** | **Number**| sla id filter | [optional] 
 **slaStatus** | **Number**| sla status filter | [optional] 
 **ticketFieldId** | **String**|       *                  Custom ticket field filter. To filter by a custom field with ID&#x3D;1 you need to add      *                  ?ticket_field.1&#x3D;value to the query string | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setTicketMacroByIdApplyByTicket"></a>
# **setTicketMacroByIdApplyByTicket**
> Response setTicketMacroByIdApplyByTicket(id, ticket, opts)



apply macro to ticket

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const id = 56; // Number | the macro identity

const ticket = "ticket_example"; // String | 

const opts = { 
  'ticketId': 56 // Number | the ticket identity
};
apiInstance.setTicketMacroByIdApplyByTicket(id, ticket, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the macro identity | 
 **ticket** | **String**|  | 
 **ticketId** | **Number**| the ticket identity | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTicketByTicketActionLock"></a>
# **updateTicketByTicketActionLock**
> Response updateTicketByTicketActionLock(ticket, force, opts)



Lock a ticket.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const ticket = "ticket_example"; // String | 

const force = true; // Boolean | force apply

const opts = { 
  'id': 56 // Number | The id of the resource
};
apiInstance.updateTicketByTicketActionLock(ticket, force, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket** | **String**|  | 
 **force** | **Boolean**| force apply | 
 **id** | **Number**| The id of the resource | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTicketByTicketActionUnlock"></a>
# **updateTicketByTicketActionUnlock**
> Response updateTicketByTicketActionUnlock(ticket, force, opts)



Unlock a ticket.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.TicketsApi();

const ticket = "ticket_example"; // String | 

const force = true; // Boolean | force apply

const opts = { 
  'id': 56 // Number | The id of the resource
};
apiInstance.updateTicketByTicketActionUnlock(ticket, force, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket** | **String**|  | 
 **force** | **Boolean**| force apply | 
 **id** | **Number**| The id of the resource | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

