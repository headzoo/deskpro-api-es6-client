# DeskproApi.FeaturesApi

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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeaturesApi();

const feature = "feature_example"; // String | 

const opts = { 
  'id': "id_example" // String | id of the feature
};
apiInstance.getFeatureByFeature(feature, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeaturesApi();
apiInstance.getFeatures().then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeaturesApi();

const feature = "feature_example"; // String | 

const opts = { 
  'id': "id_example" // String | id of the feature
};
apiInstance.updateFeatureByFeatureDisable(feature, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.FeaturesApi();

const feature = "feature_example"; // String | 

const opts = { 
  'id': "id_example" // String | id of the feature
};
apiInstance.updateFeatureByFeatureEnable(feature, opts).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
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

