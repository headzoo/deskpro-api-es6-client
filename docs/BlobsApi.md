# DeskproApi.BlobsApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBlobByAuthId**](BlobsApi.md#deleteBlobByAuthId) | **DELETE** /blobs/{authId} | 
[**getBlobByAuthId**](BlobsApi.md#getBlobByAuthId) | **GET** /blobs/{authId} | 
[**getBlobByAuthIdArchive**](BlobsApi.md#getBlobByAuthIdArchive) | **GET** /blobs/{authId}/archive | 
[**getBlobByAuthIdDownloadByPath**](BlobsApi.md#getBlobByAuthIdDownloadByPath) | **GET** /blobs/{authId}/download/{path} | 
[**getBlobByAuthIdFile**](BlobsApi.md#getBlobByAuthIdFile) | **GET** /blobs/{authId}/files | 
[**getBlobs**](BlobsApi.md#getBlobs) | **GET** /blobs | 


<a name="deleteBlobByAuthId"></a>
# **deleteBlobByAuthId**
> Response deleteBlobByAuthId(Number authId)



Delete a blob

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.BlobsApi();

const authId = 56; // Number | The id of the resource

apiInstance.deleteBlobByAuthId(authId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authId** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlobByAuthId"></a>
# **getBlobByAuthId**
> Response getBlobByAuthId(Number authId)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.BlobsApi();

const authId = 56; // Number | The id of the resource

apiInstance.getBlobByAuthId(authId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authId** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlobByAuthIdArchive"></a>
# **getBlobByAuthIdArchive**
> Response getBlobByAuthIdArchive(Number authId)



See archive info

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.BlobsApi();

const authId = 56; // Number | The id of the resource

apiInstance.getBlobByAuthIdArchive(authId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authId** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlobByAuthIdDownloadByPath"></a>
# **getBlobByAuthIdDownloadByPath**
> Response getBlobByAuthIdDownloadByPath(Number authId, String path)



Serve archived content

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.BlobsApi();

const authId = 56; // Number | The id of the resource

const path = "path_example"; // String | The path of the file

apiInstance.getBlobByAuthIdDownloadByPath(authId, path).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authId** | **Number**| The id of the resource |
 **path** | **String**| The path of the file |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlobByAuthIdFile"></a>
# **getBlobByAuthIdFile**
> Response getBlobByAuthIdFile(Number authId)



See archive content

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.BlobsApi();

const authId = 56; // Number | The id of the resource

apiInstance.getBlobByAuthIdFile(authId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authId** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlobs"></a>
# **getBlobs**
> Response getBlobs(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.BlobsApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'authIds': "authIds_example" // String | Comma separated list of AuthIDs
};
apiInstance.getBlobs(filters).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Which page to display | [optional]
 **count** | **Number**| Resource per page count | [optional]
 **limit** | **Number**| Max number of resources to return | [optional]
 **authIds** | **String**| Comma separated list of AuthIDs | [optional]

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

