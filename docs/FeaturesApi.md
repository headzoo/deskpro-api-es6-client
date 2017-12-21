# DeskProApi.FeaturesApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFeatureByFeature**](FeaturesApi.md#getFeatureByFeature) | **GET** /features/{feature} | 
[**getFeatures**](FeaturesApi.md#getFeatures) | **GET** /features | 
[**updateFeatureByFeatureDisable**](FeaturesApi.md#updateFeatureByFeatureDisable) | **PUT** /features/{feature}/disable | 
[**updateFeatureByFeatureEnable**](FeaturesApi.md#updateFeatureByFeatureEnable) | **PUT** /features/{feature}/enable | 


<a name="getFeatureByFeature"></a>
# **getFeatureByFeature**
> Response getFeatureByFeature(feature, opts)



Get specific feature.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.FeaturesApi();

let feature = "feature_example"; // String | 

let opts = { 
  'id': "id_example" // String | id of the feature
};

apiInstance.getFeatureByFeature(feature, opts, (error, data, response) => {
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
 **feature** | **String**|  | 
 **id** | **String**| id of the feature | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeatures"></a>
# **getFeatures**
> Response getFeatures()



Fetch available features list.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.FeaturesApi();

apiInstance.getFeatures((error, data, response) => {
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

<a name="updateFeatureByFeatureDisable"></a>
# **updateFeatureByFeatureDisable**
> Response updateFeatureByFeatureDisable(feature, opts)



Queue feature disabling.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.FeaturesApi();

let feature = "feature_example"; // String | 

let opts = { 
  'id': "id_example" // String | id of the feature
};

apiInstance.updateFeatureByFeatureDisable(feature, opts, (error, data, response) => {
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
 **feature** | **String**|  | 
 **id** | **String**| id of the feature | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFeatureByFeatureEnable"></a>
# **updateFeatureByFeatureEnable**
> Response updateFeatureByFeatureEnable(feature, opts)



Queue feature enabling.

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.FeaturesApi();

let feature = "feature_example"; // String | 

let opts = { 
  'id': "id_example" // String | id of the feature
};

apiInstance.updateFeatureByFeatureEnable(feature, opts, (error, data, response) => {
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
 **feature** | **String**|  | 
 **id** | **String**| id of the feature | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

