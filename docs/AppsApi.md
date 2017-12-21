# DeskProApi.AppsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAppProxyHttpByInstance**](AppsApi.md#deleteAppProxyHttpByInstance) | **DELETE** /apps/proxy-http/{instance} | 
[**deleteAppZapierHookById**](AppsApi.md#deleteAppZapierHookById) | **DELETE** /apps/zapier/hooks/{id} | 
[**getAppPackageById**](AppsApi.md#getAppPackageById) | **GET** /app_packages/{id} | 
[**getAppPackageCount**](AppsApi.md#getAppPackageCount) | **GET** /app_packages/counts | 
[**getAppPackages**](AppsApi.md#getAppPackages) | **GET** /app_packages | 
[**getAppProxyHttpByInstance**](AppsApi.md#getAppProxyHttpByInstance) | **GET** /apps/proxy-http/{instance} | 
[**getAppZapierPing**](AppsApi.md#getAppZapierPing) | **GET** /apps/zapier/ping | 
[**getApps**](AppsApi.md#getApps) | **GET** /apps | 
[**headAppProxyHttpByInstance**](AppsApi.md#headAppProxyHttpByInstance) | **HEAD** /apps/proxy-http/{instance} | 
[**optionsAppProxyHttpByInstance**](AppsApi.md#optionsAppProxyHttpByInstance) | **OPTIONS** /apps/proxy-http/{instance} | 
[**patchAppProxyHttpByInstance**](AppsApi.md#patchAppProxyHttpByInstance) | **PATCH** /apps/proxy-http/{instance} | 
[**setAppProxyHttpByInstance**](AppsApi.md#setAppProxyHttpByInstance) | **POST** /apps/proxy-http/{instance} | 
[**updateAppProxyHttpByInstance**](AppsApi.md#updateAppProxyHttpByInstance) | **PUT** /apps/proxy-http/{instance} | 


<a name="deleteAppProxyHttpByInstance"></a>
# **deleteAppProxyHttpByInstance**
> Response deleteAppProxyHttpByInstance(instance)



App http proxy

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.AppsApi();

let instance = "instance_example"; // String | 


apiInstance.deleteAppProxyHttpByInstance(instance, (error, data, response) => {
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
 **instance** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAppZapierHookById"></a>
# **deleteAppZapierHookById**
> Response deleteAppZapierHookById(id)



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

let apiInstance = new DeskProApi.AppsApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteAppZapierHookById(id, (error, data, response) => {
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

<a name="getAppPackageById"></a>
# **getAppPackageById**
> Response getAppPackageById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';

let apiInstance = new DeskProApi.AppsApi();

let id = 56; // Number | The id of the resource


apiInstance.getAppPackageById(id, (error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppPackageCount"></a>
# **getAppPackageCount**
> Response getAppPackageCount()



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';

let apiInstance = new DeskProApi.AppsApi();

apiInstance.getAppPackageCount((error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppPackages"></a>
# **getAppPackages**
> Response getAppPackages(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';

let apiInstance = new DeskProApi.AppsApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getAppPackages(opts, (error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppProxyHttpByInstance"></a>
# **getAppProxyHttpByInstance**
> Response getAppProxyHttpByInstance(instance)



App http proxy

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.AppsApi();

let instance = "instance_example"; // String | 


apiInstance.getAppProxyHttpByInstance(instance, (error, data, response) => {
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
 **instance** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppZapierPing"></a>
# **getAppZapierPing**
> Response getAppZapierPing()



ping and if it not the case install Zapier app

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.AppsApi();

apiInstance.getAppZapierPing((error, data, response) => {
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

<a name="getApps"></a>
# **getApps**
> Response getApps()



Returns a list of application instances

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.AppsApi();

apiInstance.getApps((error, data, response) => {
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

<a name="headAppProxyHttpByInstance"></a>
# **headAppProxyHttpByInstance**
> Response headAppProxyHttpByInstance(instance)



App http proxy

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.AppsApi();

let instance = "instance_example"; // String | 


apiInstance.headAppProxyHttpByInstance(instance, (error, data, response) => {
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
 **instance** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="optionsAppProxyHttpByInstance"></a>
# **optionsAppProxyHttpByInstance**
> Response optionsAppProxyHttpByInstance(instance)



App http proxy

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.AppsApi();

let instance = "instance_example"; // String | 


apiInstance.optionsAppProxyHttpByInstance(instance, (error, data, response) => {
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
 **instance** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchAppProxyHttpByInstance"></a>
# **patchAppProxyHttpByInstance**
> Response patchAppProxyHttpByInstance(instance)



App http proxy

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.AppsApi();

let instance = "instance_example"; // String | 


apiInstance.patchAppProxyHttpByInstance(instance, (error, data, response) => {
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
 **instance** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setAppProxyHttpByInstance"></a>
# **setAppProxyHttpByInstance**
> Response setAppProxyHttpByInstance(instance)



App http proxy

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.AppsApi();

let instance = "instance_example"; // String | 


apiInstance.setAppProxyHttpByInstance(instance, (error, data, response) => {
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
 **instance** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAppProxyHttpByInstance"></a>
# **updateAppProxyHttpByInstance**
> Response updateAppProxyHttpByInstance(instance)



App http proxy

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.AppsApi();

let instance = "instance_example"; // String | 


apiInstance.updateAppProxyHttpByInstance(instance, (error, data, response) => {
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
 **instance** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

