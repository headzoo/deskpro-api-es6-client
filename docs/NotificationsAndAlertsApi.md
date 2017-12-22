# DeskproApi.NotificationsAndAlertsApi

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
> Response deleteMeNotificationById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteMeNotificationById(id).then((response) => {
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

<a name="getMeNotification"></a>
# **getMeNotification**
> Response getMeNotification(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getMeNotification(filters).then((response) => {
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

<a name="getMeNotificationById"></a>
# **getMeNotificationById**
> Response getMeNotificationById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();

const id = 56; // Number | The id of the resource

apiInstance.getMeNotificationById(id).then((response) => {
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

<a name="getMeNotificationCount"></a>
# **getMeNotificationCount**
> Response getMeNotificationCount()



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();
apiInstance.getMeNotificationCount().then((response) => {
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

<a name="getNotifySetupActionAlert"></a>
# **getNotifySetupActionAlert**
> Response getNotifySetupActionAlert()



You can use this endpoint to gather information about clients you need to obtain notifications and alerts.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();
apiInstance.getNotifySetupActionAlert().then((response) => {
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

<a name="getNotifySetupActionAlertClient"></a>
# **getNotifySetupActionAlertClient**
> Response getNotifySetupActionAlertClient(Number userId, String channelName, String socketId)



This endpoint provide you an ability to get pusher credentials you are using (admin only).

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();

const userId = 56; // Number | 

const channelName = "channelName_example"; // String | 

const socketId = "socketId_example"; // String | 

apiInstance.getNotifySetupActionAlertClient(userId, channelName, socketId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  |
 **channelName** | **String**|  |
 **socketId** | **String**|  |

### Filters


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
> Response setMeNotificationDismi([String] alertIds)



Dismiss set of alerts

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();

const alertIds = ["alertIds_example"]; // [String] | 

apiInstance.setMeNotificationDismi(alertIds).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertIds** | [**[String]**](../Model/String.md)|  |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertIds** | [**[String]**](../Model/String.md)|  |

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();
apiInstance.setMeNotificationDismiAll().then((response) => {
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

<a name="setPusherAuth"></a>
# **setPusherAuth**
> Response setPusherAuth(Number userId, String channelName, String socketId)



This endpoint provide you an ability to authenticate pusher app.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();

const userId = 56; // Number | 

const channelName = "channelName_example"; // String | 

const socketId = "socketId_example"; // String | 

apiInstance.setPusherAuth(userId, channelName, socketId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  |
 **channelName** | **String**|  |
 **socketId** | **String**|  |

### Filters


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
> Response updateNotifySetupActionAlertClient(String id, String key, String secret, String host, String port, String mode)



Save pusher credentials and enable/disable it.

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.NotificationsAndAlertsApi();

const id = "id_example"; // String | 

const key = "key_example"; // String | 

const secret = "secret_example"; // String | 

const host = "host_example"; // String | 

const port = "port_example"; // String | 

const mode = "mode_example"; // String | 

apiInstance.updateNotifySetupActionAlertClient(id, key, secret, host, port, mode).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

### Filters


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

