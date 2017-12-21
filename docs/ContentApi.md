# DeskProApi.ContentApi

All URIs are relative to *http://deskpro-dev.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteArticleById**](ContentApi.md#deleteArticleById) | **DELETE** /articles/{id} | 
[**deleteArticleCategoryById**](ContentApi.md#deleteArticleCategoryById) | **DELETE** /article_categories/{id} | 
[**deleteArticleCommentById**](ContentApi.md#deleteArticleCommentById) | **DELETE** /article_comments/{id} | 
[**deleteArticlePendingCreateById**](ContentApi.md#deleteArticlePendingCreateById) | **DELETE** /article_pending_creates/{id} | 
[**deleteDownloadById**](ContentApi.md#deleteDownloadById) | **DELETE** /downloads/{id} | 
[**deleteDownloadCategoryById**](ContentApi.md#deleteDownloadCategoryById) | **DELETE** /download_categories/{id} | 
[**deleteDownloadCommentById**](ContentApi.md#deleteDownloadCommentById) | **DELETE** /download_comments/{id} | 
[**deleteGuideById**](ContentApi.md#deleteGuideById) | **DELETE** /guides/{id} | 
[**deleteNewsById**](ContentApi.md#deleteNewsById) | **DELETE** /news/{id} | 
[**deleteNewsCategoryById**](ContentApi.md#deleteNewsCategoryById) | **DELETE** /news_categories/{id} | 
[**deleteNewsCommentById**](ContentApi.md#deleteNewsCommentById) | **DELETE** /news_comments/{id} | 
[**deleteTopicById**](ContentApi.md#deleteTopicById) | **DELETE** /topics/{id} | 
[**getArticleById**](ContentApi.md#getArticleById) | **GET** /articles/{id} | 
[**getArticleCategories**](ContentApi.md#getArticleCategories) | **GET** /article_categories | 
[**getArticleCategoryById**](ContentApi.md#getArticleCategoryById) | **GET** /article_categories/{id} | 
[**getArticleCategoryCount**](ContentApi.md#getArticleCategoryCount) | **GET** /article_categories/counts | 
[**getArticleCommentById**](ContentApi.md#getArticleCommentById) | **GET** /article_comments/{id} | 
[**getArticleCommentCount**](ContentApi.md#getArticleCommentCount) | **GET** /article_comments/counts | 
[**getArticleComments**](ContentApi.md#getArticleComments) | **GET** /article_comments | 
[**getArticleCount**](ContentApi.md#getArticleCount) | **GET** /articles/counts | 
[**getArticlePendingCreateById**](ContentApi.md#getArticlePendingCreateById) | **GET** /article_pending_creates/{id} | 
[**getArticlePendingCreateCount**](ContentApi.md#getArticlePendingCreateCount) | **GET** /article_pending_creates/counts | 
[**getArticlePendingCreates**](ContentApi.md#getArticlePendingCreates) | **GET** /article_pending_creates | 
[**getArticles**](ContentApi.md#getArticles) | **GET** /articles | 
[**getContentCategories**](ContentApi.md#getContentCategories) | **GET** /content_categories | 
[**getDownloadById**](ContentApi.md#getDownloadById) | **GET** /downloads/{id} | 
[**getDownloadCategories**](ContentApi.md#getDownloadCategories) | **GET** /download_categories | 
[**getDownloadCategoryById**](ContentApi.md#getDownloadCategoryById) | **GET** /download_categories/{id} | 
[**getDownloadCategoryCount**](ContentApi.md#getDownloadCategoryCount) | **GET** /download_categories/counts | 
[**getDownloadCommentById**](ContentApi.md#getDownloadCommentById) | **GET** /download_comments/{id} | 
[**getDownloadCommentCount**](ContentApi.md#getDownloadCommentCount) | **GET** /download_comments/counts | 
[**getDownloadComments**](ContentApi.md#getDownloadComments) | **GET** /download_comments | 
[**getDownloadCount**](ContentApi.md#getDownloadCount) | **GET** /downloads/counts | 
[**getDownloads**](ContentApi.md#getDownloads) | **GET** /downloads | 
[**getGuideByGuideIdExport**](ContentApi.md#getGuideByGuideIdExport) | **GET** /guides/{guideId}/export | 
[**getGuideByGuideIdTree**](ContentApi.md#getGuideByGuideIdTree) | **GET** /guides/{guideId}/tree | 
[**getGuideById**](ContentApi.md#getGuideById) | **GET** /guides/{id} | 
[**getGuideCount**](ContentApi.md#getGuideCount) | **GET** /guides/counts | 
[**getGuides**](ContentApi.md#getGuides) | **GET** /guides | 
[**getNews**](ContentApi.md#getNews) | **GET** /news | 
[**getNewsById**](ContentApi.md#getNewsById) | **GET** /news/{id} | 
[**getNewsCategories**](ContentApi.md#getNewsCategories) | **GET** /news_categories | 
[**getNewsCategoryById**](ContentApi.md#getNewsCategoryById) | **GET** /news_categories/{id} | 
[**getNewsCategoryCount**](ContentApi.md#getNewsCategoryCount) | **GET** /news_categories/counts | 
[**getNewsCommentById**](ContentApi.md#getNewsCommentById) | **GET** /news_comments/{id} | 
[**getNewsCommentCount**](ContentApi.md#getNewsCommentCount) | **GET** /news_comments/counts | 
[**getNewsComments**](ContentApi.md#getNewsComments) | **GET** /news_comments | 
[**getNewsCount**](ContentApi.md#getNewsCount) | **GET** /news/counts | 
[**getTopicById**](ContentApi.md#getTopicById) | **GET** /topics/{id} | 
[**getTopicCount**](ContentApi.md#getTopicCount) | **GET** /topics/counts | 
[**getTopics**](ContentApi.md#getTopics) | **GET** /topics | 
[**updateGuideByGuideIdTree**](ContentApi.md#updateGuideByGuideIdTree) | **PUT** /guides/{guideId}/tree | 


<a name="deleteArticleById"></a>
# **deleteArticleById**
> Response deleteArticleById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteArticleById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArticleCategoryById"></a>
# **deleteArticleCategoryById**
> Response deleteArticleCategoryById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteArticleCategoryById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArticleCommentById"></a>
# **deleteArticleCommentById**
> Response deleteArticleCommentById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteArticleCommentById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArticlePendingCreateById"></a>
# **deleteArticlePendingCreateById**
> Response deleteArticlePendingCreateById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteArticlePendingCreateById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDownloadById"></a>
# **deleteDownloadById**
> Response deleteDownloadById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteDownloadById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDownloadCategoryById"></a>
# **deleteDownloadCategoryById**
> Response deleteDownloadCategoryById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteDownloadCategoryById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDownloadCommentById"></a>
# **deleteDownloadCommentById**
> Response deleteDownloadCommentById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteDownloadCommentById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGuideById"></a>
# **deleteGuideById**
> Response deleteGuideById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteGuideById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNewsById"></a>
# **deleteNewsById**
> Response deleteNewsById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteNewsById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNewsCategoryById"></a>
# **deleteNewsCategoryById**
> Response deleteNewsCategoryById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteNewsCategoryById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNewsCommentById"></a>
# **deleteNewsCommentById**
> Response deleteNewsCommentById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteNewsCommentById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTopicById"></a>
# **deleteTopicById**
> Response deleteTopicById(id)



Delete a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.deleteTopicById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleById"></a>
# **getArticleById**
> Response getArticleById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getArticleById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleCategories"></a>
# **getArticleCategories**
> Response getArticleCategories(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getArticleCategories(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleCategoryById"></a>
# **getArticleCategoryById**
> Response getArticleCategoryById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getArticleCategoryById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleCategoryCount"></a>
# **getArticleCategoryCount**
> Response getArticleCategoryCount()



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

apiInstance.getArticleCategoryCount((error, data, response) => {
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

<a name="getArticleCommentById"></a>
# **getArticleCommentById**
> Response getArticleCommentById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getArticleCommentById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleCommentCount"></a>
# **getArticleCommentCount**
> Response getArticleCommentCount(opts)



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'status': "status_example", // String | filter by status
  'isReviewed': 56, // Number | filter by reviewed status
  'periodCreated': "periodCreated_example", // String | filter by period
  'article': 56, // Number | select comments for article with given id
  'download': 56, // Number | select comments for download with given id
  'news': 56, // Number | select comments for news with given id
  'groupBy': "groupBy_example" // String | how to groups comments
};

apiInstance.getArticleCommentCount(opts, (error, data, response) => {
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
 **status** | **String**| filter by status | [optional] 
 **isReviewed** | **Number**| filter by reviewed status | [optional] 
 **periodCreated** | **String**| filter by period | [optional] 
 **article** | **Number**| select comments for article with given id | [optional] 
 **download** | **Number**| select comments for download with given id | [optional] 
 **news** | **Number**| select comments for news with given id | [optional] 
 **groupBy** | **String**| how to groups comments | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleComments"></a>
# **getArticleComments**
> Response getArticleComments(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'status': "status_example", // String | filter by status
  'isReviewed': 56, // Number | filter by reviewed status
  'periodCreated': "periodCreated_example", // String | filter by period
  'article': 56, // Number | select comments for article with given id
  'download': 56, // Number | select comments for download with given id
  'news': 56, // Number | select comments for news with given id
  'orderBy': "orderBy_example" // String | how to order comments
};

apiInstance.getArticleComments(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **status** | **String**| filter by status | [optional] 
 **isReviewed** | **Number**| filter by reviewed status | [optional] 
 **periodCreated** | **String**| filter by period | [optional] 
 **article** | **Number**| select comments for article with given id | [optional] 
 **download** | **Number**| select comments for download with given id | [optional] 
 **news** | **Number**| select comments for news with given id | [optional] 
 **orderBy** | **String**| how to order comments | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleCount"></a>
# **getArticleCount**
> Response getArticleCount(opts)



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'author': "author_example", // String | filter by author, provide an id or 'me' for current user
  'category': 56, // Number | filter category, could be an array or just digit
  'groupBy': "groupBy_example", // String | how to group counters
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | select for article with given id
  'periodCreated': 56, // Number | filter by period when content was created
  'periodLastComment': 56, // Number | filter by period when content was last commented
  'periodPublished': 56, // Number | filter by py period when content was published
  'periodUpdated': 56 // Number | filter by py period when content was updated
};

apiInstance.getArticleCount(opts, (error, data, response) => {
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
 **author** | **String**| filter by author, provide an id or &#39;me&#39; for current user | [optional] 
 **category** | **Number**| filter category, could be an array or just digit | [optional] 
 **groupBy** | **String**| how to group counters | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| select for article with given id | [optional] 
 **periodCreated** | **Number**| filter by period when content was created | [optional] 
 **periodLastComment** | **Number**| filter by period when content was last commented | [optional] 
 **periodPublished** | **Number**| filter by py period when content was published | [optional] 
 **periodUpdated** | **Number**| filter by py period when content was updated | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticlePendingCreateById"></a>
# **getArticlePendingCreateById**
> Response getArticlePendingCreateById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getArticlePendingCreateById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticlePendingCreateCount"></a>
# **getArticlePendingCreateCount**
> Response getArticlePendingCreateCount(opts)



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'assignedPerson': "assignedPerson_example" // String | 
};

apiInstance.getArticlePendingCreateCount(opts, (error, data, response) => {
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
 **assignedPerson** | **String**|  | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticlePendingCreates"></a>
# **getArticlePendingCreates**
> Response getArticlePendingCreates(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'assignedPerson': "assignedPerson_example", // String | 
  'orderBy': "orderBy_example", // String | how to order result
  'orderDir': "orderDir_example" // String | order direction
};

apiInstance.getArticlePendingCreates(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **assignedPerson** | **String**|  | [optional] 
 **orderBy** | **String**| how to order result | [optional] 
 **orderDir** | **String**| order direction | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticles"></a>
# **getArticles**
> Response getArticles(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'author': "author_example", // String | filter by author, provide an id or 'me' for current user
  'category': 56, // Number | filter category, could be an array or just digit
  'groupBy': "groupBy_example", // String | how to group downloads
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | select for article with given id
  'periodCreated': 56, // Number | filter by period when content was created
  'periodLastComment': 56, // Number | filter by period when content was last commented
  'periodPublished': 56, // Number | filter by py period when content was published
  'periodUpdated': 56, // Number | filter by py period when content was updated
  'orderBy': 56 // Number | how to order
};

apiInstance.getArticles(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **author** | **String**| filter by author, provide an id or &#39;me&#39; for current user | [optional] 
 **category** | **Number**| filter category, could be an array or just digit | [optional] 
 **groupBy** | **String**| how to group downloads | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| select for article with given id | [optional] 
 **periodCreated** | **Number**| filter by period when content was created | [optional] 
 **periodLastComment** | **Number**| filter by period when content was last commented | [optional] 
 **periodPublished** | **Number**| filter by py period when content was published | [optional] 
 **periodUpdated** | **Number**| filter by py period when content was updated | [optional] 
 **orderBy** | **Number**| how to order | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentCategories"></a>
# **getContentCategories**
> Response getContentCategories()



Get categories for articles, news and downloads

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

apiInstance.getContentCategories((error, data, response) => {
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

<a name="getDownloadById"></a>
# **getDownloadById**
> Response getDownloadById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getDownloadById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadCategories"></a>
# **getDownloadCategories**
> Response getDownloadCategories(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getDownloadCategories(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadCategoryById"></a>
# **getDownloadCategoryById**
> Response getDownloadCategoryById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getDownloadCategoryById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadCategoryCount"></a>
# **getDownloadCategoryCount**
> Response getDownloadCategoryCount()



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

apiInstance.getDownloadCategoryCount((error, data, response) => {
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

<a name="getDownloadCommentById"></a>
# **getDownloadCommentById**
> Response getDownloadCommentById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getDownloadCommentById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadCommentCount"></a>
# **getDownloadCommentCount**
> Response getDownloadCommentCount(opts)



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'status': "status_example", // String | filter by status
  'isReviewed': 56, // Number | filter by reviewed status
  'periodCreated': "periodCreated_example", // String | filter by period
  'article': 56, // Number | select comments for article with given id
  'download': 56, // Number | select comments for download with given id
  'news': 56, // Number | select comments for news with given id
  'groupBy': "groupBy_example" // String | how to groups comments
};

apiInstance.getDownloadCommentCount(opts, (error, data, response) => {
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
 **status** | **String**| filter by status | [optional] 
 **isReviewed** | **Number**| filter by reviewed status | [optional] 
 **periodCreated** | **String**| filter by period | [optional] 
 **article** | **Number**| select comments for article with given id | [optional] 
 **download** | **Number**| select comments for download with given id | [optional] 
 **news** | **Number**| select comments for news with given id | [optional] 
 **groupBy** | **String**| how to groups comments | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadComments"></a>
# **getDownloadComments**
> Response getDownloadComments(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'status': "status_example", // String | filter by status
  'isReviewed': 56, // Number | filter by reviewed status
  'periodCreated': "periodCreated_example", // String | filter by period
  'article': 56, // Number | select comments for article with given id
  'download': 56, // Number | select comments for download with given id
  'news': 56, // Number | select comments for news with given id
  'orderBy': "orderBy_example" // String | how to order comments
};

apiInstance.getDownloadComments(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **status** | **String**| filter by status | [optional] 
 **isReviewed** | **Number**| filter by reviewed status | [optional] 
 **periodCreated** | **String**| filter by period | [optional] 
 **article** | **Number**| select comments for article with given id | [optional] 
 **download** | **Number**| select comments for download with given id | [optional] 
 **news** | **Number**| select comments for news with given id | [optional] 
 **orderBy** | **String**| how to order comments | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadCount"></a>
# **getDownloadCount**
> Response getDownloadCount(opts)



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'author': "author_example", // String | filter by author, provide an id or 'me' for current user
  'category': 56, // Number | filter category, could be an array or just digit
  'groupBy': "groupBy_example", // String | how to group counters
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | select for article with given id
  'periodCreated': 56, // Number | filter by period when content was created
  'periodLastComment': 56, // Number | filter by period when content was last commented
  'periodPublished': 56, // Number | filter by py period when content was published
  'periodUpdated': 56 // Number | filter by py period when content was updated
};

apiInstance.getDownloadCount(opts, (error, data, response) => {
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
 **author** | **String**| filter by author, provide an id or &#39;me&#39; for current user | [optional] 
 **category** | **Number**| filter category, could be an array or just digit | [optional] 
 **groupBy** | **String**| how to group counters | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| select for article with given id | [optional] 
 **periodCreated** | **Number**| filter by period when content was created | [optional] 
 **periodLastComment** | **Number**| filter by period when content was last commented | [optional] 
 **periodPublished** | **Number**| filter by py period when content was published | [optional] 
 **periodUpdated** | **Number**| filter by py period when content was updated | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloads"></a>
# **getDownloads**
> Response getDownloads(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'author': "author_example", // String | filter by author, provide an id or 'me' for current user
  'category': 56, // Number | filter category, could be an array or just digit
  'groupBy': "groupBy_example", // String | how to group downloads
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | select for article with given id
  'periodCreated': 56, // Number | filter by period when content was created
  'periodLastComment': 56, // Number | filter by period when content was last commented
  'periodPublished': 56, // Number | filter by py period when content was published
  'periodUpdated': 56, // Number | filter by py period when content was updated
  'orderBy': 56 // Number | how to order
};

apiInstance.getDownloads(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **author** | **String**| filter by author, provide an id or &#39;me&#39; for current user | [optional] 
 **category** | **Number**| filter category, could be an array or just digit | [optional] 
 **groupBy** | **String**| how to group downloads | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| select for article with given id | [optional] 
 **periodCreated** | **Number**| filter by period when content was created | [optional] 
 **periodLastComment** | **Number**| filter by period when content was last commented | [optional] 
 **periodPublished** | **Number**| filter by py period when content was published | [optional] 
 **periodUpdated** | **Number**| filter by py period when content was updated | [optional] 
 **orderBy** | **Number**| how to order | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGuideByGuideIdExport"></a>
# **getGuideByGuideIdExport**
> Response getGuideByGuideIdExport(guideId)



export a full json of the guide

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let guideId = "guideId_example"; // String | 


apiInstance.getGuideByGuideIdExport(guideId, (error, data, response) => {
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
 **guideId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGuideByGuideIdTree"></a>
# **getGuideByGuideIdTree**
> Response getGuideByGuideIdTree(guideId)



give a topics tree list of a guide

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let guideId = "guideId_example"; // String | 


apiInstance.getGuideByGuideIdTree(guideId, (error, data, response) => {
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
 **guideId** | **String**|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGuideById"></a>
# **getGuideById**
> Response getGuideById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getGuideById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGuideCount"></a>
# **getGuideCount**
> Response getGuideCount()



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

apiInstance.getGuideCount((error, data, response) => {
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

<a name="getGuides"></a>
# **getGuides**
> Response getGuides(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getGuides(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNews"></a>
# **getNews**
> Response getNews(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'author': "author_example", // String | filter by author, provide an id or 'me' for current user
  'category': 56, // Number | filter category, could be an array or just digit
  'groupBy': "groupBy_example", // String | how to group downloads
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | select for article with given id
  'periodCreated': 56, // Number | filter by period when content was created
  'periodLastComment': 56, // Number | filter by period when content was last commented
  'periodPublished': 56, // Number | filter by py period when content was published
  'periodUpdated': 56, // Number | filter by py period when content was updated
  'orderBy': 56 // Number | how to order
};

apiInstance.getNews(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **author** | **String**| filter by author, provide an id or &#39;me&#39; for current user | [optional] 
 **category** | **Number**| filter category, could be an array or just digit | [optional] 
 **groupBy** | **String**| how to group downloads | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| select for article with given id | [optional] 
 **periodCreated** | **Number**| filter by period when content was created | [optional] 
 **periodLastComment** | **Number**| filter by period when content was last commented | [optional] 
 **periodPublished** | **Number**| filter by py period when content was published | [optional] 
 **periodUpdated** | **Number**| filter by py period when content was updated | [optional] 
 **orderBy** | **Number**| how to order | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsById"></a>
# **getNewsById**
> Response getNewsById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getNewsById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsCategories"></a>
# **getNewsCategories**
> Response getNewsCategories(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};

apiInstance.getNewsCategories(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsCategoryById"></a>
# **getNewsCategoryById**
> Response getNewsCategoryById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getNewsCategoryById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsCategoryCount"></a>
# **getNewsCategoryCount**
> Response getNewsCategoryCount()



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

apiInstance.getNewsCategoryCount((error, data, response) => {
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

<a name="getNewsCommentById"></a>
# **getNewsCommentById**
> Response getNewsCommentById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getNewsCommentById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsCommentCount"></a>
# **getNewsCommentCount**
> Response getNewsCommentCount(opts)



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'status': "status_example", // String | filter by status
  'isReviewed': 56, // Number | filter by reviewed status
  'periodCreated': "periodCreated_example", // String | filter by period
  'article': 56, // Number | select comments for article with given id
  'download': 56, // Number | select comments for download with given id
  'news': 56, // Number | select comments for news with given id
  'groupBy': "groupBy_example" // String | how to groups comments
};

apiInstance.getNewsCommentCount(opts, (error, data, response) => {
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
 **status** | **String**| filter by status | [optional] 
 **isReviewed** | **Number**| filter by reviewed status | [optional] 
 **periodCreated** | **String**| filter by period | [optional] 
 **article** | **Number**| select comments for article with given id | [optional] 
 **download** | **Number**| select comments for download with given id | [optional] 
 **news** | **Number**| select comments for news with given id | [optional] 
 **groupBy** | **String**| how to groups comments | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsComments"></a>
# **getNewsComments**
> Response getNewsComments(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'status': "status_example", // String | filter by status
  'isReviewed': 56, // Number | filter by reviewed status
  'periodCreated': "periodCreated_example", // String | filter by period
  'article': 56, // Number | select comments for article with given id
  'download': 56, // Number | select comments for download with given id
  'news': 56, // Number | select comments for news with given id
  'orderBy': "orderBy_example" // String | how to order comments
};

apiInstance.getNewsComments(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **status** | **String**| filter by status | [optional] 
 **isReviewed** | **Number**| filter by reviewed status | [optional] 
 **periodCreated** | **String**| filter by period | [optional] 
 **article** | **Number**| select comments for article with given id | [optional] 
 **download** | **Number**| select comments for download with given id | [optional] 
 **news** | **Number**| select comments for news with given id | [optional] 
 **orderBy** | **String**| how to order comments | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsCount"></a>
# **getNewsCount**
> Response getNewsCount(opts)



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'author': "author_example", // String | filter by author, provide an id or 'me' for current user
  'category': 56, // Number | filter category, could be an array or just digit
  'groupBy': "groupBy_example", // String | how to group counters
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | select for article with given id
  'periodCreated': 56, // Number | filter by period when content was created
  'periodLastComment': 56, // Number | filter by period when content was last commented
  'periodPublished': 56, // Number | filter by py period when content was published
  'periodUpdated': 56 // Number | filter by py period when content was updated
};

apiInstance.getNewsCount(opts, (error, data, response) => {
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
 **author** | **String**| filter by author, provide an id or &#39;me&#39; for current user | [optional] 
 **category** | **Number**| filter category, could be an array or just digit | [optional] 
 **groupBy** | **String**| how to group counters | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| select for article with given id | [optional] 
 **periodCreated** | **Number**| filter by period when content was created | [optional] 
 **periodLastComment** | **Number**| filter by period when content was last commented | [optional] 
 **periodPublished** | **Number**| filter by py period when content was published | [optional] 
 **periodUpdated** | **Number**| filter by py period when content was updated | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopicById"></a>
# **getTopicById**
> Response getTopicById(id)



Get a resource

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let id = 56; // Number | The id of the resource


apiInstance.getTopicById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the resource | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopicCount"></a>
# **getTopicCount**
> Response getTopicCount(opts)



Count list

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'author': "author_example", // String | filter by author, provide an id or 'me' for current user
  'guide': 56, // Number | filter category, could be an array or just digit
  'groupBy': "groupBy_example", // String | how to group counters
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | select for article with given id
  'periodCreated': 56, // Number | filter by period when content was created
  'periodLastComment': 56, // Number | filter by period when content was last commented
  'periodPublished': 56, // Number | filter by py period when content was published
  'periodUpdated': 56 // Number | filter by py period when content was updated
};

apiInstance.getTopicCount(opts, (error, data, response) => {
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
 **author** | **String**| filter by author, provide an id or &#39;me&#39; for current user | [optional] 
 **guide** | **Number**| filter category, could be an array or just digit | [optional] 
 **groupBy** | **String**| how to group counters | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| select for article with given id | [optional] 
 **periodCreated** | **Number**| filter by period when content was created | [optional] 
 **periodLastComment** | **Number**| filter by period when content was last commented | [optional] 
 **periodPublished** | **Number**| filter by py period when content was published | [optional] 
 **periodUpdated** | **Number**| filter by py period when content was updated | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopics"></a>
# **getTopics**
> Response getTopics(opts)



Get collection of resources

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let opts = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'author': "author_example", // String | filter by author, provide an id or 'me' for current user
  'guide': 56, // Number | filter category, could be an array or just digit
  'groupBy': "groupBy_example", // String | how to group downloads
  'status': "status_example", // String | filter by status
  'hiddenStatus': 56, // Number | select for article with given id
  'periodCreated': 56, // Number | filter by period when content was created
  'periodLastComment': 56, // Number | filter by period when content was last commented
  'periodPublished': 56, // Number | filter by py period when content was published
  'periodUpdated': 56, // Number | filter by py period when content was updated
  'orderBy': 56 // Number | how to order
};

apiInstance.getTopics(opts, (error, data, response) => {
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
 **page** | **Number**| Which page to display | [optional] 
 **count** | **Number**| Resource per page count | [optional] 
 **limit** | **Number**| Max number of resources to return | [optional] 
 **ids** | **String**| Comma separated list of IDs | [optional] 
 **author** | **String**| filter by author, provide an id or &#39;me&#39; for current user | [optional] 
 **guide** | **Number**| filter category, could be an array or just digit | [optional] 
 **groupBy** | **String**| how to group downloads | [optional] 
 **status** | **String**| filter by status | [optional] 
 **hiddenStatus** | **Number**| select for article with given id | [optional] 
 **periodCreated** | **Number**| filter by period when content was created | [optional] 
 **periodLastComment** | **Number**| filter by period when content was last commented | [optional] 
 **periodPublished** | **Number**| filter by py period when content was published | [optional] 
 **periodUpdated** | **Number**| filter by py period when content was updated | [optional] 
 **orderBy** | **Number**| how to order | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGuideByGuideIdTree"></a>
# **updateGuideByGuideIdTree**
> Response updateGuideByGuideIdTree(guideId, tree)



save the tree structure

### Example
```javascript
import DeskProApi from 'desk_pro_api';
let defaultClient = DeskProApi.ApiClient.instance;

// Configure API key authorization: KeyAuthentication
let KeyAuthentication = defaultClient.authentications['KeyAuthentication'];
KeyAuthentication.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//KeyAuthentication.apiKeyPrefix = 'Token';

let apiInstance = new DeskProApi.ContentApi();

let guideId = "guideId_example"; // String | 

let tree = ["tree_example"]; // [String] | 


apiInstance.updateGuideByGuideIdTree(guideId, tree, (error, data, response) => {
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
 **guideId** | **String**|  | 
 **tree** | [**[String]**](String.md)|  | 

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

