# DeskproApi.AppsApi

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const instance = "instance_example"; // String | 

apiInstance.deleteAppProxyHttpByInstance(instance).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteAppZapierHookById(id).then((response) => {
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

<a name="getAppPackageById"></a>
# **getAppPackageById**
> Response getAppPackageById(id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const id = 56; // Number | The id of the resource

apiInstance.getAppPackageById(id).then((response) => {
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();
apiInstance.getAppPackageCount().then((response) => {
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getAppPackages(opts).then((response) => {
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const instance = "instance_example"; // String | 

apiInstance.getAppProxyHttpByInstance(instance).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();
apiInstance.getAppZapierPing().then((response) => {
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

<a name="getApps"></a>
# **getApps**
> Response getApps()



Returns a list of application instances

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();
apiInstance.getApps().then((response) => {
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

<a name="headAppProxyHttpByInstance"></a>
# **headAppProxyHttpByInstance**
> Response headAppProxyHttpByInstance(instance)



App http proxy

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const instance = "instance_example"; // String | 

apiInstance.headAppProxyHttpByInstance(instance).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const instance = "instance_example"; // String | 

apiInstance.optionsAppProxyHttpByInstance(instance).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const instance = "instance_example"; // String | 

apiInstance.patchAppProxyHttpByInstance(instance).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const instance = "instance_example"; // String | 

apiInstance.setAppProxyHttpByInstance(instance).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AppsApi();

const instance = "instance_example"; // String | 

apiInstance.updateAppProxyHttpByInstance(instance).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

