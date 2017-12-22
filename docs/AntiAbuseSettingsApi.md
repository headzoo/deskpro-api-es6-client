# DeskproApi.AntiAbuseSettingsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettingAntiAbuseCaptcha**](AntiAbuseSettingsApi.md#getSettingAntiAbuseCaptcha) | **GET** /settings/anti_abuse/captcha | 
[**getSettingAntiAbusePortal**](AntiAbuseSettingsApi.md#getSettingAntiAbusePortal) | **GET** /settings/anti_abuse/portal | 


<a name="getSettingAntiAbuseCaptcha"></a>
# **getSettingAntiAbuseCaptcha**
> Response getSettingAntiAbuseCaptcha()



Get anti-abuse settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AntiAbuseSettingsApi();
apiInstance.getSettingAntiAbuseCaptcha().then((response) => {
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

<a name="getSettingAntiAbusePortal"></a>
# **getSettingAntiAbusePortal**
> Response getSettingAntiAbusePortal()



Get anti-abuse settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.AntiAbuseSettingsApi();
apiInstance.getSettingAntiAbusePortal().then((response) => {
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

