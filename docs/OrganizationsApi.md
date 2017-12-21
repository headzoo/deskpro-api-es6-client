# DeskProApi.OrganizationsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrganizationById**](OrganizationsApi.md#deleteOrganizationById) | **DELETE** /organizations/{id} | 
[**deleteOrganizationByParentIdMemberByPerson**](OrganizationsApi.md#deleteOrganizationByParentIdMemberByPerson) | **DELETE** /organizations/{parentId}/members/{person} | 
[**deleteOrganizationByParentIdNoteById**](OrganizationsApi.md#deleteOrganizationByParentIdNoteById) | **DELETE** /organizations/{parentId}/notes/{id} | 
[**deleteOrganizationCustomFieldById**](OrganizationsApi.md#deleteOrganizationCustomFieldById) | **DELETE** /organization_custom_fields/{id} | 
[**getOrganizationById**](OrganizationsApi.md#getOrganizationById) | **GET** /organizations/{id} | 
[**getOrganizationByIdTicket**](OrganizationsApi.md#getOrganizationByIdTicket) | **GET** /organizations/{id}/tickets | 
[**getOrganizationByParentIdContactData**](OrganizationsApi.md#getOrganizationByParentIdContactData) | **GET** /organizations/{parentId}/contact_data | 
[**getOrganizationByParentIdContactDataById**](OrganizationsApi.md#getOrganizationByParentIdContactDataById) | **GET** /organizations/{parentId}/contact_data/{id} | 
[**getOrganizationByParentIdContactDataCount**](OrganizationsApi.md#getOrganizationByParentIdContactDataCount) | **GET** /organizations/{parentId}/contact_data/counts | 
[**getOrganizationByParentIdMember**](OrganizationsApi.md#getOrganizationByParentIdMember) | **GET** /organizations/{parentId}/members | 
[**getOrganizationByParentIdNote**](OrganizationsApi.md#getOrganizationByParentIdNote) | **GET** /organizations/{parentId}/notes | 
[**getOrganizationByParentIdNoteById**](OrganizationsApi.md#getOrganizationByParentIdNoteById) | **GET** /organizations/{parentId}/notes/{id} | 
[**getOrganizationByParentIdNoteCount**](OrganizationsApi.md#getOrganizationByParentIdNoteCount) | **GET** /organizations/{parentId}/notes/counts | 
[**getOrganizationCount**](OrganizationsApi.md#getOrganizationCount) | **GET** /organizations/counts | 
[**getOrganizationCustomFieldById**](OrganizationsApi.md#getOrganizationCustomFieldById) | **GET** /organization_custom_fields/{id} | 
[**getOrganizationCustomFields**](OrganizationsApi.md#getOrganizationCustomFields) | **GET** /organization_custom_fields | 
[**getOrganizations**](OrganizationsApi.md#getOrganizations) | **GET** /organizations | 


<a name="deleteOrganizationById"></a>
# **deleteOrganizationById**
> Response deleteOrganizationById(id)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteOrganizationById(id, (error, data, response) => {
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

<a name="deleteOrganizationByParentIdMemberByPerson"></a>
# **deleteOrganizationByParentIdMemberByPerson**
> Response deleteOrganizationByParentIdMemberByPerson(parentId, person, opts)



delete an organization member

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.OrganizationsApi();

let parentId = "parentId_example"; // String | 

let person = "person_example"; // String | 

let opts = { 
  'id': "id_example" // String | 
};

apiInstance.deleteOrganizationByParentIdMemberByPerson(parentId, person, opts, (error, data, response) => {
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
 **person** | **String**|  | 
 **id** | **String**|  | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationByParentIdNoteById"></a>
# **deleteOrganizationByParentIdNoteById**
> Response deleteOrganizationByParentIdNoteById(id, parentId)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let id = 56; // Number | The id of the resource

let parentId = "parentId_example"; // String | 


apiInstance.deleteOrganizationByParentIdNoteById(id, parentId, (error, data, response) => {
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

<a name="deleteOrganizationCustomFieldById"></a>
# **deleteOrganizationCustomFieldById**
> Response deleteOrganizationCustomFieldById(id)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteOrganizationCustomFieldById(id, (error, data, response) => {
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

<a name="getOrganizationById"></a>
# **getOrganizationById**
> Response getOrganizationById(id)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let id = 56; // Number | The id of the resource


apiInstance.getOrganizationById(id, (error, data, response) => {
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

<a name="getOrganizationByIdTicket"></a>
# **getOrganizationByIdTicket**
> Response getOrganizationByIdTicket(id)



Get tickets of the given organization

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.OrganizationsApi();

let id = "id_example"; // String | 


apiInstance.getOrganizationByIdTicket(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationByParentIdContactData"></a>
# **getOrganizationByParentIdContactData**
> Response getOrganizationByParentIdContactData(parentId, opts)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let parentId = "parentId_example"; // String | 

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getOrganizationByParentIdContactData(parentId, opts, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationByParentIdContactDataById"></a>
# **getOrganizationByParentIdContactDataById**
> Response getOrganizationByParentIdContactDataById(id, parentId)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let id = 56; // Number | The id of the resource

let parentId = "parentId_example"; // String | 


apiInstance.getOrganizationByParentIdContactDataById(id, parentId, (error, data, response) => {
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

<a name="getOrganizationByParentIdContactDataCount"></a>
# **getOrganizationByParentIdContactDataCount**
> Response getOrganizationByParentIdContactDataCount(parentId)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let parentId = "parentId_example"; // String | 


apiInstance.getOrganizationByParentIdContactDataCount(parentId, (error, data, response) => {
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

<a name="getOrganizationByParentIdMember"></a>
# **getOrganizationByParentIdMember**
> Response getOrganizationByParentIdMember(parentId, opts)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let parentId = "parentId_example"; // String | 

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getOrganizationByParentIdMember(parentId, opts, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationByParentIdNote"></a>
# **getOrganizationByParentIdNote**
> Response getOrganizationByParentIdNote(parentId, opts)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let parentId = "parentId_example"; // String | 

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getOrganizationByParentIdNote(parentId, opts, (error, data, response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationByParentIdNoteById"></a>
# **getOrganizationByParentIdNoteById**
> Response getOrganizationByParentIdNoteById(id, parentId)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let id = 56; // Number | The id of the resource

let parentId = "parentId_example"; // String | 


apiInstance.getOrganizationByParentIdNoteById(id, parentId, (error, data, response) => {
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

<a name="getOrganizationByParentIdNoteCount"></a>
# **getOrganizationByParentIdNoteCount**
> Response getOrganizationByParentIdNoteCount(parentId)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let parentId = "parentId_example"; // String | 


apiInstance.getOrganizationByParentIdNoteCount(parentId, (error, data, response) => {
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

<a name="getOrganizationCount"></a>
# **getOrganizationCount**
> Response getOrganizationCount(opts)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let opts = { 
  'name': "name_example", // String | name filter
  'periodCreated': "periodCreated_example", // String | period created filter
  'userGroup': ["userGroup_example"], // [String] | usergroups filter
  'labels': ["labels_example"], // [String] | labels filter option
  'orgFieldId': "orgFieldId_example" // String |   *                  Custom organization field filter. To filter by a custom field with ID=1 you need to add  *                  ?org_field.1=value to the query string
};

apiInstance.getOrganizationCount(opts, (error, data, response) => {
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
 **name** | **String**| name filter | [optional] 
 **periodCreated** | **String**| period created filter | [optional] 
 **userGroup** | [**[String]**](String.md)| usergroups filter | [optional] 
 **labels** | [**[String]**](String.md)| labels filter option | [optional] 
 **orgFieldId** | **String**|   *                  Custom organization field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?org_field.1&#x3D;value to the query string | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationCustomFieldById"></a>
# **getOrganizationCustomFieldById**
> Response getOrganizationCustomFieldById(id)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let id = 56; // Number | The id of the resource


apiInstance.getOrganizationCustomFieldById(id, (error, data, response) => {
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

<a name="getOrganizationCustomFields"></a>
# **getOrganizationCustomFields**
> Response getOrganizationCustomFields(opts)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getOrganizationCustomFields(opts, (error, data, response) => {
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

<a name="getOrganizations"></a>
# **getOrganizations**
> Response getOrganizations(opts)



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

let apiInstance = new DeskProApi.OrganizationsApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'name': "name_example", // String | name filter
  'periodCreated': "periodCreated_example", // String | period created filter
  'userGroup': ["userGroup_example"], // [String] | usergroups filter
  'labels': ["labels_example"], // [String] | labels filter option
  'orgFieldId': "orgFieldId_example" // String |   *                  Custom organization field filter. To filter by a custom field with ID=1 you need to add  *                  ?org_field.1=value to the query string
};

apiInstance.getOrganizations(opts, (error, data, response) => {
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
 **name** | **String**| name filter | [optional] 
 **periodCreated** | **String**| period created filter | [optional] 
 **userGroup** | [**[String]**](String.md)| usergroups filter | [optional] 
 **labels** | [**[String]**](String.md)| labels filter option | [optional] 
 **orgFieldId** | **String**|   *                  Custom organization field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?org_field.1&#x3D;value to the query string | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

