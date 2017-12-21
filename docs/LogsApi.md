# DeskproApi.LogsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiLogById**](LogsApi.md#getApiLogById) | **GET** /api_logs/{id} | 
[**getApiLogs**](LogsApi.md#getApiLogs) | **GET** /api_logs | 
[**getApiLogsOptions**](LogsApi.md#getApiLogsOptions) | **GET** /api_logs_options | 
[**setApiLogByIdReplay**](LogsApi.md#setApiLogByIdReplay) | **POST** /api_logs/{id}/replay | 
[**updateApiLogsOptions**](LogsApi.md#updateApiLogsOptions) | **PUT** /api_logs_options | 


<a name="getApiLogById"></a>
# **getApiLogById**
> Response getApiLogById(id, opts)



get api log

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.LogsApi();

const id = "id_example"; // String | 

const opts = { 
  'page': "page_example" // String | 
};
apiInstance.getApiLogById(id, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **page** | **String**|  | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApiLogs"></a>
# **getApiLogs**
> Response getApiLogs()



get api logs collection

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.LogsApi();
apiInstance.getApiLogs().then((response) => {
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

<a name="getApiLogsOptions"></a>
# **getApiLogsOptions**
> Response getApiLogsOptions()



get logging options

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.LogsApi();
apiInstance.getApiLogsOptions().then((response) => {
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

<a name="setApiLogByIdReplay"></a>
# **setApiLogByIdReplay**
> Response setApiLogByIdReplay(id, opts)



update logging options

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.LogsApi();

const id = 56; // Number | id of entry to replay

const opts = { 
  'mode': "mode_example" // String | how to replay
};
apiInstance.setApiLogByIdReplay(id, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id of entry to replay | 
 **mode** | **String**| how to replay | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateApiLogsOptions"></a>
# **updateApiLogsOptions**
> Response updateApiLogsOptions(requestLength, responseLength, opts)



update logging options

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.LogsApi();

const requestLength = 56; // Number | 

const responseLength = 56; // Number | 

const opts = { 
  'enabled': true, // Boolean | provide 1 if you want to enable logging
  'modes': ["modes_example"] // [String] | strings array, values are session, key, token
};
apiInstance.updateApiLogsOptions(requestLength, responseLength, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestLength** | **Number**|  | 
 **responseLength** | **Number**|  | 
 **enabled** | **Boolean**| provide 1 if you want to enable logging | [optional] 
 **modes** | [**[String]**](String.md)| strings array, values are session, key, token | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

