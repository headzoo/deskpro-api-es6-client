# DeskProApi.TicketFormWidgetApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTicketFormWidgetCode**](TicketFormWidgetApi.md#getTicketFormWidgetCode) | **GET** /ticket-form-widget/code | 


<a name="getTicketFormWidgetCode"></a>
# **getTicketFormWidgetCode**
> Response getTicketFormWidgetCode()



Get ticket form widget JS code

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.TicketFormWidgetApi();

apiInstance.getTicketFormWidgetCode((error, data, response) => {
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

