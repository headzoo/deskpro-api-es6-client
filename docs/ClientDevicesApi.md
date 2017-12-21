# DeskProApi.ClientDevicesApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteClientDeviceByAppTypeById**](ClientDevicesApi.md#deleteClientDeviceByAppTypeById) | **DELETE** /client_devices/{app_type}/{id} | 
[**getClientDeviceByAppType**](ClientDevicesApi.md#getClientDeviceByAppType) | **GET** /client_devices/{app_type} | 
[**getClientDeviceByAppTypeById**](ClientDevicesApi.md#getClientDeviceByAppTypeById) | **GET** /client_devices/{app_type}/{id} | 
[**getClientDeviceByAppTypeCount**](ClientDevicesApi.md#getClientDeviceByAppTypeCount) | **GET** /client_devices/{app_type}/counts | 


<a name="deleteClientDeviceByAppTypeById"></a>
# **deleteClientDeviceByAppTypeById**
> Response deleteClientDeviceByAppTypeById(id, appType)



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

let apiInstance = new DeskProApi.ClientDevicesApi();

let id = 56; // Number | The id or device_id of the resource

let appType = "appType_example"; // String | 


apiInstance.deleteClientDeviceByAppTypeById(id, appType, (error, data, response) => {
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
 **id** | **Number**| The id or device_id of the resource | 
 **appType** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientDeviceByAppType"></a>
# **getClientDeviceByAppType**
> Response getClientDeviceByAppType(appType, opts)



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

let apiInstance = new DeskProApi.ClientDevicesApi();

let appType = "appType_example"; // String | 

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getClientDeviceByAppType(appType, opts, (error, data, response) => {
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
 **appType** | **String**|  | 
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

<a name="getClientDeviceByAppTypeById"></a>
# **getClientDeviceByAppTypeById**
> Response getClientDeviceByAppTypeById(id, appType)



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

let apiInstance = new DeskProApi.ClientDevicesApi();

let id = 56; // Number | The id or device_id of the resource

let appType = "appType_example"; // String | 


apiInstance.getClientDeviceByAppTypeById(id, appType, (error, data, response) => {
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
 **id** | **Number**| The id or device_id of the resource | 
 **appType** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientDeviceByAppTypeCount"></a>
# **getClientDeviceByAppTypeCount**
> Response getClientDeviceByAppTypeCount(appType)



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

let apiInstance = new DeskProApi.ClientDevicesApi();

let appType = "appType_example"; // String | 


apiInstance.getClientDeviceByAppTypeCount(appType, (error, data, response) => {
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
 **appType** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

