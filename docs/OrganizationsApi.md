# DeskproApi.OrganizationsApi

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
> Response deleteOrganizationById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteOrganizationById(id).then((response) => {
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

<a name="deleteOrganizationByParentIdMemberByPerson"></a>
# **deleteOrganizationByParentIdMemberByPerson**
> Response deleteOrganizationByParentIdMemberByPerson(String parentId, String person, object filters)



delete an organization member

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const parentId = "parentId_example"; // String | 

const person = "person_example"; // String | 

const filters = { 
  'id': "id_example" // String | 
};
apiInstance.deleteOrganizationByParentIdMemberByPerson(parentId, person, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  |
 **person** | **String**|  |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Response deleteOrganizationByParentIdNoteById(Number id, String parentId)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.deleteOrganizationByParentIdNoteById(id, parentId).then((response) => {
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

<a name="deleteOrganizationCustomFieldById"></a>
# **deleteOrganizationCustomFieldById**
> Response deleteOrganizationCustomFieldById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteOrganizationCustomFieldById(id).then((response) => {
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

<a name="getOrganizationById"></a>
# **getOrganizationById**
> Response getOrganizationById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const id = 56; // Number | The id of the resource

apiInstance.getOrganizationById(id).then((response) => {
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

<a name="getOrganizationByIdTicket"></a>
# **getOrganizationByIdTicket**
> Response getOrganizationByIdTicket(String id)



Get tickets of the given organization

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const id = "id_example"; // String | 

apiInstance.getOrganizationByIdTicket(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="getOrganizationByParentIdContactData"></a>
# **getOrganizationByParentIdContactData**
> Response getOrganizationByParentIdContactData(String parentId, object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const parentId = "parentId_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getOrganizationByParentIdContactData(parentId, filters).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationByParentIdContactDataById"></a>
# **getOrganizationByParentIdContactDataById**
> Response getOrganizationByParentIdContactDataById(Number id, String parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getOrganizationByParentIdContactDataById(id, parentId).then((response) => {
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

<a name="getOrganizationByParentIdContactDataCount"></a>
# **getOrganizationByParentIdContactDataCount**
> Response getOrganizationByParentIdContactDataCount(String parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const parentId = "parentId_example"; // String | 

apiInstance.getOrganizationByParentIdContactDataCount(parentId).then((response) => {
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

<a name="getOrganizationByParentIdMember"></a>
# **getOrganizationByParentIdMember**
> Response getOrganizationByParentIdMember(String parentId, object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const parentId = "parentId_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getOrganizationByParentIdMember(parentId, filters).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationByParentIdNote"></a>
# **getOrganizationByParentIdNote**
> Response getOrganizationByParentIdNote(String parentId, object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const parentId = "parentId_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getOrganizationByParentIdNote(parentId, filters).then((response) => {
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

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationByParentIdNoteById"></a>
# **getOrganizationByParentIdNoteById**
> Response getOrganizationByParentIdNoteById(Number id, String parentId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const id = 56; // Number | The id of the resource

const parentId = "parentId_example"; // String | 

apiInstance.getOrganizationByParentIdNoteById(id, parentId).then((response) => {
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

<a name="getOrganizationByParentIdNoteCount"></a>
# **getOrganizationByParentIdNoteCount**
> Response getOrganizationByParentIdNoteCount(String parentId)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const parentId = "parentId_example"; // String | 

apiInstance.getOrganizationByParentIdNoteCount(parentId).then((response) => {
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

<a name="getOrganizationCount"></a>
# **getOrganizationCount**
> Response getOrganizationCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const filters = { 
  'name': "name_example", // String | name filter
  'periodCreated': "periodCreated_example", // String | period created filter
  'userGroup': ["userGroup_example"], // [String] | usergroups filter
  'labels': ["labels_example"], // [String] | labels filter option
  'orgFieldId': "orgFieldId_example" // String |   *                  Custom organization field filter. To filter by a custom field with ID=1 you need to add  *                  ?org_field.1=value to the query string
};
apiInstance.getOrganizationCount(filters).then((response) => {
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
 **name** | **String**| name filter | [optional]
 **periodCreated** | **String**| period created filter | [optional]
 **userGroup** | [**[String]**](../Model/String.md)| usergroups filter | [optional]
 **labels** | [**[String]**](../Model/String.md)| labels filter option | [optional]
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
> Response getOrganizationCustomFieldById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const id = 56; // Number | The id of the resource

apiInstance.getOrganizationCustomFieldById(id).then((response) => {
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

<a name="getOrganizationCustomFields"></a>
# **getOrganizationCustomFields**
> Response getOrganizationCustomFields(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getOrganizationCustomFields(filters).then((response) => {
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

<a name="getOrganizations"></a>
# **getOrganizations**
> Response getOrganizations(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.OrganizationsApi();

const filters = { 
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
apiInstance.getOrganizations(filters).then((response) => {
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
 **name** | **String**| name filter | [optional]
 **periodCreated** | **String**| period created filter | [optional]
 **userGroup** | [**[String]**](../Model/String.md)| usergroups filter | [optional]
 **labels** | [**[String]**](../Model/String.md)| labels filter option | [optional]
 **orgFieldId** | **String**|   *                  Custom organization field filter. To filter by a custom field with ID&#x3D;1 you need to add  *                  ?org_field.1&#x3D;value to the query string | [optional]

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

