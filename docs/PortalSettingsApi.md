# DeskproApi.PortalSettingsApi

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
> Response getSettingBrandByBrandPortalDownload(String brand)



Get portal general settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PortalSettingsApi();

const brand = "brand_example"; // String | 

apiInstance.getSettingBrandByBrandPortalDownload(brand).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brand** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSettingBrandByBrandPortalFeedback"></a>
# **getSettingBrandByBrandPortalFeedback**
> Response getSettingBrandByBrandPortalFeedback(String brand)



Get portal general settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PortalSettingsApi();

const brand = "brand_example"; // String | 

apiInstance.getSettingBrandByBrandPortalFeedback(brand).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brand** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSettingBrandByBrandPortalGeneral"></a>
# **getSettingBrandByBrandPortalGeneral**
> Response getSettingBrandByBrandPortalGeneral(String brand)



Get portal general settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PortalSettingsApi();

const brand = "brand_example"; // String | 

apiInstance.getSettingBrandByBrandPortalGeneral(brand).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brand** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSettingBrandByBrandPortalGuide"></a>
# **getSettingBrandByBrandPortalGuide**
> Response getSettingBrandByBrandPortalGuide(String brand)



Get portal general settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PortalSettingsApi();

const brand = "brand_example"; // String | 

apiInstance.getSettingBrandByBrandPortalGuide(brand).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brand** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSettingBrandByBrandPortalKb"></a>
# **getSettingBrandByBrandPortalKb**
> Response getSettingBrandByBrandPortalKb(String brand)



Get portal general settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PortalSettingsApi();

const brand = "brand_example"; // String | 

apiInstance.getSettingBrandByBrandPortalKb(brand).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brand** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSettingBrandByBrandPortalNews"></a>
# **getSettingBrandByBrandPortalNews**
> Response getSettingBrandByBrandPortalNews(String brand)



Get portal general settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PortalSettingsApi();

const brand = "brand_example"; // String | 

apiInstance.getSettingBrandByBrandPortalNews(brand).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brand** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

