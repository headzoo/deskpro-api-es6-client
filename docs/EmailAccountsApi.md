# DeskProApi.EmailAccountsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEmailAccountByIdCertificate**](EmailAccountsApi.md#deleteEmailAccountByIdCertificate) | **DELETE** /email_accounts/{id}/certificate | 
[**deleteEmailAccountByIdKey**](EmailAccountsApi.md#deleteEmailAccountByIdKey) | **DELETE** /email_accounts/{id}/key | 
[**setEmailAccountByIdEncryption**](EmailAccountsApi.md#setEmailAccountByIdEncryption) | **POST** /email_accounts/{id}/encryption | 


<a name="deleteEmailAccountByIdCertificate"></a>
# **deleteEmailAccountByIdCertificate**
> Response deleteEmailAccountByIdCertificate(id)



Delete a certificate

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.EmailAccountsApi();

let id = 56; // Number | The id of the email account


apiInstance.deleteEmailAccountByIdCertificate(id, (error, data, response) => {
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
 **id** | **Number**| The id of the email account | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEmailAccountByIdKey"></a>
# **deleteEmailAccountByIdKey**
> Response deleteEmailAccountByIdKey(id)



Delete a key

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.EmailAccountsApi();

let id = 56; // Number | The id of the email account


apiInstance.deleteEmailAccountByIdKey(id, (error, data, response) => {
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
 **id** | **Number**| The id of the email account | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setEmailAccountByIdEncryption"></a>
# **setEmailAccountByIdEncryption**
> Response setEmailAccountByIdEncryption(id)



Upload a certificate and a key

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.EmailAccountsApi();

let id = 56; // Number | The id of the email account


apiInstance.setEmailAccountByIdEncryption(id, (error, data, response) => {
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
 **id** | **Number**| The id of the email account | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

