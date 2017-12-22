# DeskproApi.UsersourceSettingsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettingUserSource**](UsersourceSettingsApi.md#getSettingUserSource) | **GET** /settings/user_source | 


<a name="getSettingUserSource"></a>
# **getSettingUserSource**
> Response getSettingUserSource()



Get usersource settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.UsersourceSettingsApi();
apiInstance.getSettingUserSource().then((response) => {
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

