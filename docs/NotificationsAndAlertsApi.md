# DeskProApi.NotificationsAndAlertsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMeNotificationById**](NotificationsAndAlertsApi.md#deleteMeNotificationById) | **DELETE** /me/notifications/{id} | 
[**getMeNotification**](NotificationsAndAlertsApi.md#getMeNotification) | **GET** /me/notifications | 
[**getMeNotificationById**](NotificationsAndAlertsApi.md#getMeNotificationById) | **GET** /me/notifications/{id} | 
[**getMeNotificationCount**](NotificationsAndAlertsApi.md#getMeNotificationCount) | **GET** /me/notifications/counts | 
[**getNotifySetupActionAlert**](NotificationsAndAlertsApi.md#getNotifySetupActionAlert) | **GET** /notify/setup/action-alerts | 
[**getNotifySetupActionAlertClient**](NotificationsAndAlertsApi.md#getNotifySetupActionAlertClient) | **GET** /notify/setup/action-alerts/clients | 
[**setMeNotificationDismi**](NotificationsAndAlertsApi.md#setMeNotificationDismi) | **POST** /me/notifications/dismiss | 
[**setMeNotificationDismiAll**](NotificationsAndAlertsApi.md#setMeNotificationDismiAll) | **POST** /me/notifications/dismiss/all | 
[**setPusherAuth**](NotificationsAndAlertsApi.md#setPusherAuth) | **POST** /pusher/auth | 
[**updateNotifySetupActionAlertClient**](NotificationsAndAlertsApi.md#updateNotifySetupActionAlertClient) | **PUT** /notify/setup/action-alerts/clients | 


<a name="deleteMeNotificationById"></a>
# **deleteMeNotificationById**
> Response deleteMeNotificationById(id)



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

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteMeNotificationById(id, (error, data, response) => {
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

<a name="getMeNotification"></a>
# **getMeNotification**
> Response getMeNotification(opts)



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

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getMeNotification(opts, (error, data, response) => {
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

<a name="getMeNotificationById"></a>
# **getMeNotificationById**
> Response getMeNotificationById(id)



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

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

let id = 56; // Number | The id of the resource


apiInstance.getMeNotificationById(id, (error, data, response) => {
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

<a name="getMeNotificationCount"></a>
# **getMeNotificationCount**
> Response getMeNotificationCount()



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

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

apiInstance.getMeNotificationCount((error, data, response) => {
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

<a name="getNotifySetupActionAlert"></a>
# **getNotifySetupActionAlert**
> Response getNotifySetupActionAlert()



You can use this endpoint to gather information about clients you need to obtain notifications and alerts.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

apiInstance.getNotifySetupActionAlert((error, data, response) => {
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

<a name="getNotifySetupActionAlertClient"></a>
# **getNotifySetupActionAlertClient**
> Response getNotifySetupActionAlertClient(userId, channelName, socketId)



This endpoint provide you an ability to get pusher credentials you are using (admin only).

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

let userId = 56; // Number | 

let channelName = "channelName_example"; // String | 

let socketId = "socketId_example"; // String | 


apiInstance.getNotifySetupActionAlertClient(userId, channelName, socketId, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **channelName** | **String**|  | 
 **socketId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setMeNotificationDismi"></a>
# **setMeNotificationDismi**
> Response setMeNotificationDismi(alertIds)



Dismiss set of alerts

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

let alertIds = ["alertIds_example"]; // [String] | 


apiInstance.setMeNotificationDismi(alertIds, (error, data, response) => {
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
 **alertIds** | [**[String]**](String.md)|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setMeNotificationDismiAll"></a>
# **setMeNotificationDismiAll**
> Response setMeNotificationDismiAll()



dismiss all alerts for the current user

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

apiInstance.setMeNotificationDismiAll((error, data, response) => {
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

<a name="setPusherAuth"></a>
# **setPusherAuth**
> Response setPusherAuth(userId, channelName, socketId)



This endpoint provide you an ability to authenticate pusher app.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

let userId = 56; // Number | 

let channelName = "channelName_example"; // String | 

let socketId = "socketId_example"; // String | 


apiInstance.setPusherAuth(userId, channelName, socketId, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **channelName** | **String**|  | 
 **socketId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNotifySetupActionAlertClient"></a>
# **updateNotifySetupActionAlertClient**
> Response updateNotifySetupActionAlertClient(id, key, secret, host, port, mode)



Save pusher credentials and enable/disable it.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.NotificationsAndAlertsApi();

let id = "id_example"; // String | 

let key = "key_example"; // String | 

let secret = "secret_example"; // String | 

let host = "host_example"; // String | 

let port = "port_example"; // String | 

let mode = "mode_example"; // String | 


apiInstance.updateNotifySetupActionAlertClient(id, key, secret, host, port, mode, (error, data, response) => {
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
 **key** | **String**|  | 
 **secret** | **String**|  | 
 **host** | **String**|  | 
 **port** | **String**|  | 
 **mode** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

