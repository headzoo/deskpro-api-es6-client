# DeskproApi.WidgetSetupApi

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.WidgetSetupApi();

const brand = "brand_example"; // String | 

apiInstance.deleteSettingBrandByBrandWidgetSetup(brand).then((response) => {
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

<a name="getSettingBrandByBrandWidgetCode"></a>
# **getSettingBrandByBrandWidgetCode**
> Response getSettingBrandByBrandWidgetCode(brand)



Get the HTML code for the widget

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.WidgetSetupApi();

const brand = "brand_example"; // String | 

apiInstance.getSettingBrandByBrandWidgetCode(brand).then((response) => {
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

<a name="getSettingBrandByBrandWidgetLiveDemoCode"></a>
# **getSettingBrandByBrandWidgetLiveDemoCode**
> Response getSettingBrandByBrandWidgetLiveDemoCode(brand)



Get the HTML code for the widget

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.WidgetSetupApi();

const brand = "brand_example"; // String | 

apiInstance.getSettingBrandByBrandWidgetLiveDemoCode(brand).then((response) => {
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

<a name="getSettingBrandByBrandWidgetSetup"></a>
# **getSettingBrandByBrandWidgetSetup**
> Response getSettingBrandByBrandWidgetSetup(brand)



get widget setup

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.WidgetSetupApi();

const brand = "brand_example"; // String | 

apiInstance.getSettingBrandByBrandWidgetSetup(brand).then((response) => {
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

