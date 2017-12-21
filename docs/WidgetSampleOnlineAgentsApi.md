# DeskProApi.WidgetSampleOnlineAgentsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWidgetLiveDemoSampleState**](WidgetSampleOnlineAgentsApi.md#getWidgetLiveDemoSampleState) | **GET** /widget/live_demo/sample_state | 
[**setSettingBrandByBrandWidgetSendInstruction**](WidgetSampleOnlineAgentsApi.md#setSettingBrandByBrandWidgetSendInstruction) | **POST** /settings/brands/{brand}/widget/send-instructions | 


<a name="getWidgetLiveDemoSampleState"></a>
# **getWidgetLiveDemoSampleState**
> Response getWidgetLiveDemoSampleState()



get widget sample online agent

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.WidgetSampleOnlineAgentsApi();

apiInstance.getWidgetLiveDemoSampleState((error, data, response) => {
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

<a name="setSettingBrandByBrandWidgetSendInstruction"></a>
# **setSettingBrandByBrandWidgetSendInstruction**
> Response setSettingBrandByBrandWidgetSendInstruction(brand, email)



get widget sample online agent

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.WidgetSampleOnlineAgentsApi();

let brand = "brand_example"; // String | 

let email = "email_example"; // String | Email address


apiInstance.setSettingBrandByBrandWidgetSendInstruction(brand, email, (error, data, response) => {
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
 **email** | **String**| Email address | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

