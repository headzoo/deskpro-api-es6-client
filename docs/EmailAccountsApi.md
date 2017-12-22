# DeskproApi.EmailAccountsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEmailAccountByIdCertificate**](EmailAccountsApi.md#deleteEmailAccountByIdCertificate) | **DELETE** /email_accounts/{id}/certificate | 
[**deleteEmailAccountByIdKey**](EmailAccountsApi.md#deleteEmailAccountByIdKey) | **DELETE** /email_accounts/{id}/key | 
[**setEmailAccountByIdEncryption**](EmailAccountsApi.md#setEmailAccountByIdEncryption) | **POST** /email_accounts/{id}/encryption | 


<a name="deleteEmailAccountByIdCertificate"></a>
# **deleteEmailAccountByIdCertificate**
> Response deleteEmailAccountByIdCertificate(Number id)



Delete a certificate

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.EmailAccountsApi();

const id = 56; // Number | The id of the email account

apiInstance.deleteEmailAccountByIdCertificate(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the email account |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEmailAccountByIdKey"></a>
# **deleteEmailAccountByIdKey**
> Response deleteEmailAccountByIdKey(Number id)



Delete a key

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.EmailAccountsApi();

const id = 56; // Number | The id of the email account

apiInstance.deleteEmailAccountByIdKey(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the email account |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setEmailAccountByIdEncryption"></a>
# **setEmailAccountByIdEncryption**
> Response setEmailAccountByIdEncryption(Number id)



Upload a certificate and a key

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.EmailAccountsApi();

const id = 56; // Number | The id of the email account

apiInstance.setEmailAccountByIdEncryption(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the email account |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

