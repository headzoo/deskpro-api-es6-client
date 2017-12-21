# DeskproApi.SettingsApi

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.SettingsApi();
apiInstance.getSettingDepartmentDefault().then((response) => {
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

