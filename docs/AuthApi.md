# DeskproApi.AuthApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOauthClientById**](AuthApi.md#deleteOauthClientById) | **DELETE** /oauth_clients/{id} | 
[**getApiTokenDeviceSetupByAuth**](AuthApi.md#getApiTokenDeviceSetupByAuth) | **GET** /api_tokens/device_setup/{auth} | 
[**getApiTokenSession**](AuthApi.md#getApiTokenSession) | **GET** /api_tokens/session | 
[**getApiTokenUserSourceByUsersourceCallbackByFormat**](AuthApi.md#getApiTokenUserSourceByUsersourceCallbackByFormat) | **GET** /api_tokens/user_sources/{usersource}/callback/{format} | 
[**getApiTokenUserSourceByUsersourceLogin**](AuthApi.md#getApiTokenUserSourceByUsersourceLogin) | **GET** /api_tokens/user_sources/{usersource}/login | 
[**getApiTokenUserSourceContextFormat**](AuthApi.md#getApiTokenUserSourceContextFormat) | **GET** /api_tokens/user_sources/{context}.{_format} | 
[**getMe**](AuthApi.md#getMe) | **GET** /me | 
[**getMeDeviceSetupToken**](AuthApi.md#getMeDeviceSetupToken) | **GET** /me/device-setup-token | 
[**getMeProfile**](AuthApi.md#getMeProfile) | **GET** /me/profile | 
[**getOauthClientById**](AuthApi.md#getOauthClientById) | **GET** /oauth_clients/{id} | 
[**getOauthClientCount**](AuthApi.md#getOauthClientCount) | **GET** /oauth_clients/counts | 
[**getOauthClients**](AuthApi.md#getOauthClients) | **GET** /oauth_clients | 
[**setApiTokenUserSourceByUsersourceCallbackByFormat**](AuthApi.md#setApiTokenUserSourceByUsersourceCallbackByFormat) | **POST** /api_tokens/user_sources/{usersource}/callback/{format} | 


<a name="deleteOauthClientById"></a>
# **deleteOauthClientById**
> Response deleteOauthClientById(id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteOauthClientById(id).then((response) => {
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

<a name="getApiTokenDeviceSetupByAuth"></a>
# **getApiTokenDeviceSetupByAuth**
> Response getApiTokenDeviceSetupByAuth(auth)



Authenticate device by authorization code and return auth tokens

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();

const auth = "auth_example"; // String | 

apiInstance.getApiTokenDeviceSetupByAuth(auth).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApiTokenSession"></a>
# **getApiTokenSession**
> Response getApiTokenSession()



creates a new api token based on the authenticated user&#39;s session

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();
apiInstance.getApiTokenSession().then((response) => {
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

<a name="getApiTokenUserSourceByUsersourceCallbackByFormat"></a>
# **getApiTokenUserSourceByUsersourceCallbackByFormat**
> Response getApiTokenUserSourceByUsersourceCallbackByFormat(format, usersource)



Returns api token on usersource callback

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();

const format = "format_example"; // String | 

const usersource = "usersource_example"; // String | 

apiInstance.getApiTokenUserSourceByUsersourceCallbackByFormat(format, usersource).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  |
 **usersource** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApiTokenUserSourceByUsersourceLogin"></a>
# **getApiTokenUserSourceByUsersourceLogin**
> getApiTokenUserSourceByUsersourceLogin(usersource)



Login via usersource.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();

const usersource = "usersource_example"; // String | 

apiInstance.getApiTokenUserSourceByUsersourceLogin(usersource).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersource** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

null (empty response body)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApiTokenUserSourceContextFormat"></a>
# **getApiTokenUserSourceContextFormat**
> getApiTokenUserSourceContextFormat(context, format)



Get list of api token usersources.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();

const context = "context_example"; // String | 

const format = "format_example"; // String | 

apiInstance.getApiTokenUserSourceContextFormat(context, format).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**|  |
 **format** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

null (empty response body)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMe"></a>
# **getMe**
> Response getMe()



get information about the authenticated user

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();
apiInstance.getMe().then((response) => {
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

<a name="getMeDeviceSetupToken"></a>
# **getMeDeviceSetupToken**
> Response getMeDeviceSetupToken()



get my profile action

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();
apiInstance.getMeDeviceSetupToken().then((response) => {
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

<a name="getMeProfile"></a>
# **getMeProfile**
> Response getMeProfile()



get my profile action

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();
apiInstance.getMeProfile().then((response) => {
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

<a name="getOauthClientById"></a>
# **getOauthClientById**
> Response getOauthClientById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();

const id = 56; // Number | The id of the resource

apiInstance.getOauthClientById(id).then((response) => {
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

<a name="getOauthClientCount"></a>
# **getOauthClientCount**
> Response getOauthClientCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();
apiInstance.getOauthClientCount().then((response) => {
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

<a name="getOauthClients"></a>
# **getOauthClients**
> Response getOauthClients(filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getOauthClients(filters).then((response) => {
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

<a name="setApiTokenUserSourceByUsersourceCallbackByFormat"></a>
# **setApiTokenUserSourceByUsersourceCallbackByFormat**
> Response setApiTokenUserSourceByUsersourceCallbackByFormat(format, usersource)



Returns api token on usersource callback

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AuthApi();

const format = "format_example"; // String | 

const usersource = "usersource_example"; // String | 

apiInstance.setApiTokenUserSourceByUsersourceCallbackByFormat(format, usersource).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**|  |
 **usersource** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

