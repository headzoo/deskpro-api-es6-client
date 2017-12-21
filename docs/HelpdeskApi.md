# DeskProApi.HelpdeskApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHelpdeskAgentClientInfo**](HelpdeskApi.md#getHelpdeskAgentClientInfo) | **GET** /helpdesk/agent-client/info | 
[**getHelpdeskAgentClientSetting**](HelpdeskApi.md#getHelpdeskAgentClientSetting) | **GET** /helpdesk/agent-client/settings | 
[**getHelpdeskDiscover**](HelpdeskApi.md#getHelpdeskDiscover) | **GET** /helpdesk/discover | 
[**getHelpdeskUpdaterSetting**](HelpdeskApi.md#getHelpdeskUpdaterSetting) | **GET** /helpdesk/updater/settings | 
[**getHelpdeskUpdaterStatu**](HelpdeskApi.md#getHelpdeskUpdaterStatu) | **GET** /helpdesk/updater/status | 
[**setHelpdeskUpdaterManualSchedule**](HelpdeskApi.md#setHelpdeskUpdaterManualSchedule) | **POST** /helpdesk/updater/manual-schedule | 


<a name="getHelpdeskAgentClientInfo"></a>
# **getHelpdeskAgentClientInfo**
> Response getHelpdeskAgentClientInfo()



Used by apps when they need to know general information about a helpdesk such as which features are enabled

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.HelpdeskApi();

apiInstance.getHelpdeskAgentClientInfo((error, data, response) => {
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

<a name="getHelpdeskAgentClientSetting"></a>
# **getHelpdeskAgentClientSetting**
> Response getHelpdeskAgentClientSetting()



Get current user personal settings

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.HelpdeskApi();

apiInstance.getHelpdeskAgentClientSetting((error, data, response) => {
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

<a name="getHelpdeskDiscover"></a>
# **getHelpdeskDiscover**
> Response getHelpdeskDiscover()



Used by apps to detect that this is a real helpdesk

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.HelpdeskApi();

apiInstance.getHelpdeskDiscover((error, data, response) => {
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

<a name="getHelpdeskUpdaterSetting"></a>
# **getHelpdeskUpdaterSetting**
> Response getHelpdeskUpdaterSetting()



Get the updater settings

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.HelpdeskApi();

apiInstance.getHelpdeskUpdaterSetting((error, data, response) => {
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

<a name="getHelpdeskUpdaterStatu"></a>
# **getHelpdeskUpdaterStatu**
> Response getHelpdeskUpdaterStatu()



Get the updater status

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.HelpdeskApi();

apiInstance.getHelpdeskUpdaterStatu((error, data, response) => {
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

<a name="setHelpdeskUpdaterManualSchedule"></a>
# **setHelpdeskUpdaterManualSchedule**
> Response setHelpdeskUpdaterManualSchedule(delay)



Manually schedule an upgrade to run right now

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.HelpdeskApi();

let delay = 56; // Number | delay before start


apiInstance.setHelpdeskUpdaterManualSchedule(delay, (error, data, response) => {
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
 **delay** | **Number**| delay before start | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

