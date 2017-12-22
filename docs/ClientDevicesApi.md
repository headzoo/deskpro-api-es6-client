# DeskproApi.ClientDevicesApi

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ClientDevicesApi();

const id = 56; // Number | The id or device_id of the resource

const appType = "appType_example"; // String | 

apiInstance.deleteClientDeviceByAppTypeById(id, appType).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id or device_id of the resource |
 **appType** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClientDeviceByAppType"></a>
# **getClientDeviceByAppType**
> Response getClientDeviceByAppType(appType, filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ClientDevicesApi();

const appType = "appType_example"; // String | 

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getClientDeviceByAppType(appType, filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appType** | **String**|  |

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

<a name="getClientDeviceByAppTypeById"></a>
# **getClientDeviceByAppTypeById**
> Response getClientDeviceByAppTypeById(id, appType)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ClientDevicesApi();

const id = 56; // Number | The id or device_id of the resource

const appType = "appType_example"; // String | 

apiInstance.getClientDeviceByAppTypeById(id, appType).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id or device_id of the resource |
 **appType** | **String**|  |

### Filters
This endpoint does not need any filters.


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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ClientDevicesApi();

const appType = "appType_example"; // String | 

apiInstance.getClientDeviceByAppTypeCount(appType).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appType** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

