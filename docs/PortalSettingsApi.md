# DeskProApi.PortalSettingsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettingBrandByBrandPortalDownload**](PortalSettingsApi.md#getSettingBrandByBrandPortalDownload) | **GET** /settings/brands/{brand}/portal/downloads | 
[**getSettingBrandByBrandPortalFeedback**](PortalSettingsApi.md#getSettingBrandByBrandPortalFeedback) | **GET** /settings/brands/{brand}/portal/feedback | 
[**getSettingBrandByBrandPortalGeneral**](PortalSettingsApi.md#getSettingBrandByBrandPortalGeneral) | **GET** /settings/brands/{brand}/portal/general | 
[**getSettingBrandByBrandPortalGuide**](PortalSettingsApi.md#getSettingBrandByBrandPortalGuide) | **GET** /settings/brands/{brand}/portal/guides | 
[**getSettingBrandByBrandPortalKb**](PortalSettingsApi.md#getSettingBrandByBrandPortalKb) | **GET** /settings/brands/{brand}/portal/kb | 
[**getSettingBrandByBrandPortalNews**](PortalSettingsApi.md#getSettingBrandByBrandPortalNews) | **GET** /settings/brands/{brand}/portal/news | 


<a name="getSettingBrandByBrandPortalDownload"></a>
# **getSettingBrandByBrandPortalDownload**
> Response getSettingBrandByBrandPortalDownload(brand)



Get portal general settings

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.PortalSettingsApi();

let brand = "brand_example"; // String | 


apiInstance.getSettingBrandByBrandPortalDownload(brand, (error, data, response) => {
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

<a name="getSettingBrandByBrandPortalFeedback"></a>
# **getSettingBrandByBrandPortalFeedback**
> Response getSettingBrandByBrandPortalFeedback(brand)



Get portal general settings

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.PortalSettingsApi();

let brand = "brand_example"; // String | 


apiInstance.getSettingBrandByBrandPortalFeedback(brand, (error, data, response) => {
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

<a name="getSettingBrandByBrandPortalGeneral"></a>
# **getSettingBrandByBrandPortalGeneral**
> Response getSettingBrandByBrandPortalGeneral(brand)



Get portal general settings

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.PortalSettingsApi();

let brand = "brand_example"; // String | 


apiInstance.getSettingBrandByBrandPortalGeneral(brand, (error, data, response) => {
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

<a name="getSettingBrandByBrandPortalGuide"></a>
# **getSettingBrandByBrandPortalGuide**
> Response getSettingBrandByBrandPortalGuide(brand)



Get portal general settings

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.PortalSettingsApi();

let brand = "brand_example"; // String | 


apiInstance.getSettingBrandByBrandPortalGuide(brand, (error, data, response) => {
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

<a name="getSettingBrandByBrandPortalKb"></a>
# **getSettingBrandByBrandPortalKb**
> Response getSettingBrandByBrandPortalKb(brand)



Get portal general settings

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.PortalSettingsApi();

let brand = "brand_example"; // String | 


apiInstance.getSettingBrandByBrandPortalKb(brand, (error, data, response) => {
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

<a name="getSettingBrandByBrandPortalNews"></a>
# **getSettingBrandByBrandPortalNews**
> Response getSettingBrandByBrandPortalNews(brand)



Get portal general settings

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.PortalSettingsApi();

let brand = "brand_example"; // String | 


apiInstance.getSettingBrandByBrandPortalNews(brand, (error, data, response) => {
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

