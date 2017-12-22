# DeskproApi.WidgetSampleOnlineAgentsApi

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.WidgetSampleOnlineAgentsApi();
apiInstance.getWidgetLiveDemoSampleState().then((response) => {
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

<a name="setSettingBrandByBrandWidgetSendInstruction"></a>
# **setSettingBrandByBrandWidgetSendInstruction**
> Response setSettingBrandByBrandWidgetSendInstruction(String brand, String email)



get widget sample online agent

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.WidgetSampleOnlineAgentsApi();

const brand = "brand_example"; // String | 

const email = "email_example"; // String | Email address

apiInstance.setSettingBrandByBrandWidgetSendInstruction(brand, email).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brand** | **String**|  |
 **email** | **String**| Email address |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address |

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

