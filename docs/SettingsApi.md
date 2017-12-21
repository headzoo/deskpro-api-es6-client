# DeskProApi.SettingsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettingDepartmentDefault**](SettingsApi.md#getSettingDepartmentDefault) | **GET** /settings/departments/default | 


<a name="getSettingDepartmentDefault"></a>
# **getSettingDepartmentDefault**
> Response getSettingDepartmentDefault()



list if default departments grouped by brand

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.SettingsApi();

apiInstance.getSettingDepartmentDefault((error, data, response) => {
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

