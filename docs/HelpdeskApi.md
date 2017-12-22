# DeskproApi.HelpdeskApi

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.HelpdeskApi();
apiInstance.getHelpdeskAgentClientInfo().then((response) => {
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

<a name="getHelpdeskAgentClientSetting"></a>
# **getHelpdeskAgentClientSetting**
> Response getHelpdeskAgentClientSetting()



Get current user personal settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.HelpdeskApi();
apiInstance.getHelpdeskAgentClientSetting().then((response) => {
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

<a name="getHelpdeskDiscover"></a>
# **getHelpdeskDiscover**
> Response getHelpdeskDiscover()



Used by apps to detect that this is a real helpdesk

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.HelpdeskApi();
apiInstance.getHelpdeskDiscover().then((response) => {
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

<a name="getHelpdeskUpdaterSetting"></a>
# **getHelpdeskUpdaterSetting**
> Response getHelpdeskUpdaterSetting()



Get the updater settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.HelpdeskApi();
apiInstance.getHelpdeskUpdaterSetting().then((response) => {
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

<a name="getHelpdeskUpdaterStatu"></a>
# **getHelpdeskUpdaterStatu**
> Response getHelpdeskUpdaterStatu()



Get the updater status

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.HelpdeskApi();
apiInstance.getHelpdeskUpdaterStatu().then((response) => {
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

<a name="setHelpdeskUpdaterManualSchedule"></a>
# **setHelpdeskUpdaterManualSchedule**
> Response setHelpdeskUpdaterManualSchedule(delay)



Manually schedule an upgrade to run right now

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.HelpdeskApi();

const delay = 56; // Number | delay before start

apiInstance.setHelpdeskUpdaterManualSchedule(delay).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delay** | **Number**| delay before start |

### Filters


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

