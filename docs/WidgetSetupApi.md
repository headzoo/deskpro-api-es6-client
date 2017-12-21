# DeskProApi.WidgetSetupApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSettingBrandByBrandWidgetSetup**](WidgetSetupApi.md#deleteSettingBrandByBrandWidgetSetup) | **DELETE** /settings/brands/{brand}/widget/setup | 
[**getSettingBrandByBrandWidgetCode**](WidgetSetupApi.md#getSettingBrandByBrandWidgetCode) | **GET** /settings/brands/{brand}/widget/code | 
[**getSettingBrandByBrandWidgetLiveDemoCode**](WidgetSetupApi.md#getSettingBrandByBrandWidgetLiveDemoCode) | **GET** /settings/brands/{brand}/widget/live_demo_code | 
[**getSettingBrandByBrandWidgetSetup**](WidgetSetupApi.md#getSettingBrandByBrandWidgetSetup) | **GET** /settings/brands/{brand}/widget/setup | 


<a name="deleteSettingBrandByBrandWidgetSetup"></a>
# **deleteSettingBrandByBrandWidgetSetup**
> Response deleteSettingBrandByBrandWidgetSetup(brand)



reset widget settings

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.WidgetSetupApi();

let brand = "brand_example"; // String | 


apiInstance.deleteSettingBrandByBrandWidgetSetup(brand, (error, data, response) => {
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
 **brand** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSettingBrandByBrandWidgetCode"></a>
# **getSettingBrandByBrandWidgetCode**
> Response getSettingBrandByBrandWidgetCode(brand)



Get the HTML code for the widget

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.WidgetSetupApi();

let brand = "brand_example"; // String | 


apiInstance.getSettingBrandByBrandWidgetCode(brand, (error, data, response) => {
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
 **brand** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSettingBrandByBrandWidgetLiveDemoCode"></a>
# **getSettingBrandByBrandWidgetLiveDemoCode**
> Response getSettingBrandByBrandWidgetLiveDemoCode(brand)



Get the HTML code for the widget

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.WidgetSetupApi();

let brand = "brand_example"; // String | 


apiInstance.getSettingBrandByBrandWidgetLiveDemoCode(brand, (error, data, response) => {
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
 **brand** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSettingBrandByBrandWidgetSetup"></a>
# **getSettingBrandByBrandWidgetSetup**
> Response getSettingBrandByBrandWidgetSetup(brand)



get widget setup

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.WidgetSetupApi();

let brand = "brand_example"; // String | 


apiInstance.getSettingBrandByBrandWidgetSetup(brand, (error, data, response) => {
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
 **brand** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

