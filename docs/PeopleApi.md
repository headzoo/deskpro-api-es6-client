# DeskproApi.PeopleApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePeopleById**](PeopleApi.md#deletePeopleById) | **DELETE** /people/{id} | 
[**deletePeopleByParentIdNoteById**](PeopleApi.md#deletePeopleByParentIdNoteById) | **DELETE** /people/{parentId}/notes/{id} | 
[**deletePersonCustomFieldById**](PeopleApi.md#deletePersonCustomFieldById) | **DELETE** /person_custom_fields/{id} | 
[**getPeople**](PeopleApi.md#getPeople) | **GET** /people | 
[**getPeopleById**](PeopleApi.md#getPeopleById) | **GET** /people/{id} | 
[**getPeopleByIdTicket**](PeopleApi.md#getPeopleByIdTicket) | **GET** /people/{id}/tickets | 
[**getPeopleByParentIdContactData**](PeopleApi.md#getPeopleByParentIdContactData) | **GET** /people/{parentId}/contact_data | 
[**getPeopleByParentIdContactDataById**](PeopleApi.md#getPeopleByParentIdContactDataById) | **GET** /people/{parentId}/contact_data/{id} | 
[**getPeopleByParentIdContactDataCount**](PeopleApi.md#getPeopleByParentIdContactDataCount) | **GET** /people/{parentId}/contact_data/counts | 
[**getPeopleByParentIdNote**](PeopleApi.md#getPeopleByParentIdNote) | **GET** /people/{parentId}/notes | 
[**getPeopleByParentIdNoteById**](PeopleApi.md#getPeopleByParentIdNoteById) | **GET** /people/{parentId}/notes/{id} | 
[**getPeopleByParentIdNoteCount**](PeopleApi.md#getPeopleByParentIdNoteCount) | **GET** /people/{parentId}/notes/counts | 
[**getPeopleCount**](PeopleApi.md#getPeopleCount) | **GET** /people/counts | 
[**getPeopleOnboardingNew**](PeopleApi.md#getPeopleOnboardingNew) | **GET** /people/onboarding/new | 
[**getPeopleOnboardingPending**](PeopleApi.md#getPeopleOnboardingPending) | **GET** /people/onboarding/pending | 
[**getPersonCustomFieldById**](PeopleApi.md#getPersonCustomFieldById) | **GET** /person_custom_fields/{id} | 
[**getPersonCustomFields**](PeopleApi.md#getPersonCustomFields) | **GET** /person_custom_fields | 
[**updatePeopleByIdPermission**](PeopleApi.md#updatePeopleByIdPermission) | **PUT** /people/{id}/permissions | 


<a name="deletePeopleById"></a>
# **deletePeopleById**
> Response deletePeopleById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const id = 56; // Number | The id of the resource

apiInstance.deletePeopleById(id).then((response) => {
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

<a name="deletePeopleByParentIdNoteById"></a>
# **deletePeopleByParentIdNoteById**
> Response deletePeopleByParentIdNoteById(id, parentId)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.deletePeopleByParentIdNoteById(id, parentId).then((response) => {
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

<a name="deletePersonCustomFieldById"></a>
# **deletePersonCustomFieldById**
> Response deletePersonCustomFieldById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const id = 56; // Number | The id of the resource

apiInstance.deletePersonCustomFieldById(id).then((response) => {
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

<a name="getPeople"></a>
# **getPeople**
> Response getPeople(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'orderBy': "orderBy_example", // String | people list sort
  'orderDir': "orderDir_example", // String | list sort order
  'primaryEmail': "primaryEmail_example", // String | primary email filter
  'organization': "organization_example", // String | Comma separated list of IDs
  'isAgent': true, // Boolean | agents filter
  'isDeleted': true, // Boolean | deleted filter
  'notMe': true, // Boolean | exclude yourself filter
  'agentTeam': ["agentTeam_example"], // [String] | agent teams filter
  'userGroup': ["userGroup_example"], // [String] | usergroups filter
  'label': ["label_example"], // [String] | labels filter option
  'personFieldId': "personFieldId_example" // String |   *                  Custom person field filter. To filter by a custom field with ID=1 you need to add  *                  ?person_field.1=value to the query string
};
apiInstance.getPeople(opts).then((response) => {
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
 **orderBy** | **String**| people list sort | [optional] 
 **orderDir** | **String**| list sort order | [optional] 
 **primaryEmail** | **String**| primary email filter | [optional] 
 **organization** | **String**| Comma separated list of IDs | [optional] 
 **isAgent** | **Boolean**| agents filter | [optional] 
 **isDeleted** | **Boolean**| deleted filter | [optional] 
 **notMe** | **Boolean**| exclude yourself filter | [optional] 
 **agentTeam** | [**[String]**](String.md)| agent teams filter | [optional] 
 **userGroup** | [**[String]**](String.md)| usergroups filter | [optional] 
 **label** | [**[String]**](String.md)| labels filter option | [optional] 
 **personFieldId** | **String**|   *                  Custom person field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?person_field.1&#x3D;value to the query string | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPeopleById"></a>
# **getPeopleById**
> Response getPeopleById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const id = 56; // Number | The id of the resource

apiInstance.getPeopleById(id).then((response) => {
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

<a name="getPeopleByIdTicket"></a>
# **getPeopleByIdTicket**
> Response getPeopleByIdTicket(id)



Get tickets of the given person

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const id = "id_example"; // String | Person ID

apiInstance.getPeopleByIdTicket(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Person ID | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPeopleByParentIdContactData"></a>
# **getPeopleByParentIdContactData**
> Response getPeopleByParentIdContactData(parentId, opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const parentId = "parentId_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getPeopleByParentIdContactData(parentId, opts).then((response) => {
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

<a name="getPeopleByParentIdContactDataById"></a>
# **getPeopleByParentIdContactDataById**
> Response getPeopleByParentIdContactDataById(id, parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getPeopleByParentIdContactDataById(id, parentId).then((response) => {
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

<a name="getPeopleByParentIdContactDataCount"></a>
# **getPeopleByParentIdContactDataCount**
> Response getPeopleByParentIdContactDataCount(parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const parentId = "parentId_example"; // String | 

apiInstance.getPeopleByParentIdContactDataCount(parentId).then((response) => {
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

<a name="getPeopleByParentIdNote"></a>
# **getPeopleByParentIdNote**
> Response getPeopleByParentIdNote(parentId, opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const parentId = "parentId_example"; // String | 

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getPeopleByParentIdNote(parentId, opts).then((response) => {
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

<a name="getPeopleByParentIdNoteById"></a>
# **getPeopleByParentIdNoteById**
> Response getPeopleByParentIdNoteById(id, parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getPeopleByParentIdNoteById(id, parentId).then((response) => {
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

<a name="getPeopleByParentIdNoteCount"></a>
# **getPeopleByParentIdNoteCount**
> Response getPeopleByParentIdNoteCount(parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const parentId = "parentId_example"; // String | 

apiInstance.getPeopleByParentIdNoteCount(parentId).then((response) => {
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

<a name="getPeopleCount"></a>
# **getPeopleCount**
> Response getPeopleCount(opts)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const opts = { 
  'orderBy': "orderBy_example", // String | people list sort
  'orderDir': "orderDir_example", // String | list sort order
  'primaryEmail': "primaryEmail_example", // String | primary email filter
  'organization': "organization_example", // String | Comma separated list of IDs
  'isAgent': true, // Boolean | agents filter
  'isDeleted': true, // Boolean | deleted filter
  'notMe': true, // Boolean | exclude yourself filter
  'agentTeam': ["agentTeam_example"], // [String] | agent teams filter
  'userGroup': ["userGroup_example"], // [String] | usergroups filter
  'label': ["label_example"], // [String] | labels filter option
  'personFieldId': "personFieldId_example" // String |   *                  Custom person field filter. To filter by a custom field with ID=1 you need to add  *                  ?person_field.1=value to the query string
};
apiInstance.getPeopleCount(opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderBy** | **String**| people list sort | [optional] 
 **orderDir** | **String**| list sort order | [optional] 
 **primaryEmail** | **String**| primary email filter | [optional] 
 **organization** | **String**| Comma separated list of IDs | [optional] 
 **isAgent** | **Boolean**| agents filter | [optional] 
 **isDeleted** | **Boolean**| deleted filter | [optional] 
 **notMe** | **Boolean**| exclude yourself filter | [optional] 
 **agentTeam** | [**[String]**](String.md)| agent teams filter | [optional] 
 **userGroup** | [**[String]**](String.md)| usergroups filter | [optional] 
 **label** | [**[String]**](String.md)| labels filter option | [optional] 
 **personFieldId** | **String**|   *                  Custom person field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?person_field.1&#x3D;value to the query string | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPeopleOnboardingNew"></a>
# **getPeopleOnboardingNew**
> Response getPeopleOnboardingNew()



Get current user available onboardings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();
apiInstance.getPeopleOnboardingNew().then((response) => {
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

<a name="getPeopleOnboardingPending"></a>
# **getPeopleOnboardingPending**
> Response getPeopleOnboardingPending()



Get current user pending onboardings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();
apiInstance.getPeopleOnboardingPending().then((response) => {
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

<a name="getPersonCustomFieldById"></a>
# **getPersonCustomFieldById**
> Response getPersonCustomFieldById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const id = 56; // Number | The id of the resource

apiInstance.getPersonCustomFieldById(id).then((response) => {
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

<a name="getPersonCustomFields"></a>
# **getPersonCustomFields**
> Response getPersonCustomFields(opts)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getPersonCustomFields(opts).then((response) => {
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

<a name="updatePeopleByIdPermission"></a>
# **updatePeopleByIdPermission**
> Response updatePeopleByIdPermission(id, agent)



adds permissions (for now only accepts {agent: true} to add agent permissions)

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PeopleApi();

const id = "id_example"; // String | 

const agent = true; // Boolean | set as agent

apiInstance.updatePeopleByIdPermission(id, agent).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **agent** | **Boolean**| set as agent | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

