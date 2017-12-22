# DeskproApi.PersonSettingsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPersonSetting**](PersonSettingsApi.md#getPersonSetting) | **GET** /person_setting | 
[**getPersonSettingByName**](PersonSettingsApi.md#getPersonSettingByName) | **GET** /person_setting/{name} | 
[**setPersonSetting**](PersonSettingsApi.md#setPersonSetting) | **POST** /person_setting | 
[**updatePersonSetting**](PersonSettingsApi.md#updatePersonSetting) | **PUT** /person_setting | 


<a name="getPersonSetting"></a>
# **getPersonSetting**
> Response getPersonSetting()



get person settings

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PersonSettingsApi();
apiInstance.getPersonSetting().then((response) => {
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

<a name="getPersonSettingByName"></a>
# **getPersonSettingByName**
> Response getPersonSettingByName(String name)



get a person setting

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PersonSettingsApi();

const name = "name_example"; // String | the name of the setting

apiInstance.getPersonSettingByName(name).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| the name of the setting |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setPersonSetting"></a>
# **setPersonSetting**
> Response setPersonSetting(String name, String value)



create a new person setting

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PersonSettingsApi();

const name = "name_example"; // String | setting name

const value = "value_example"; // String | setting value

apiInstance.setPersonSetting(name, value).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| setting name |
 **value** | **String**| setting value |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| setting name |
 **value** | **String**| setting value |

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePersonSetting"></a>
# **updatePersonSetting**
> Response updatePersonSetting(String name, String value)



update person setting

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.PersonSettingsApi();

const name = "name_example"; // String | setting name

const value = "value_example"; // String | setting value

apiInstance.updatePersonSetting(name, value).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| setting name |
 **value** | **String**| setting value |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| setting name |
 **value** | **String**| setting value |

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

