# DeskproApi.ContentApi

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
> Response deleteArticleById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteArticleById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArticleCategoryById"></a>
# **deleteArticleCategoryById**
> Response deleteArticleCategoryById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteArticleCategoryById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArticleCommentById"></a>
# **deleteArticleCommentById**
> Response deleteArticleCommentById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteArticleCommentById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArticlePendingCreateById"></a>
# **deleteArticlePendingCreateById**
> Response deleteArticlePendingCreateById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteArticlePendingCreateById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDownloadById"></a>
# **deleteDownloadById**
> Response deleteDownloadById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteDownloadById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDownloadCategoryById"></a>
# **deleteDownloadCategoryById**
> Response deleteDownloadCategoryById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteDownloadCategoryById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDownloadCommentById"></a>
# **deleteDownloadCommentById**
> Response deleteDownloadCommentById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteDownloadCommentById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGuideById"></a>
# **deleteGuideById**
> Response deleteGuideById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteGuideById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNewsById"></a>
# **deleteNewsById**
> Response deleteNewsById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteNewsById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNewsCategoryById"></a>
# **deleteNewsCategoryById**
> Response deleteNewsCategoryById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteNewsCategoryById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNewsCommentById"></a>
# **deleteNewsCommentById**
> Response deleteNewsCommentById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteNewsCommentById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTopicById"></a>
# **deleteTopicById**
> Response deleteTopicById(Number id)



Delete a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.deleteTopicById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleById"></a>
# **getArticleById**
> Response getArticleById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getArticleById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleCategories"></a>
# **getArticleCategories**
> Response getArticleCategories(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getArticleCategories(filters).then((response) => {
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
> Response getArticleCategoryById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getArticleCategoryById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();
apiInstance.getArticleCategoryCount().then((response) => {
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

<a name="getArticleCommentById"></a>
# **getArticleCommentById**
> Response getArticleCommentById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getArticleCommentById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticleCommentCount"></a>
# **getArticleCommentCount**
> Response getArticleCommentCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
  'status': "status_example", // String | filter by status
  'isReviewed': 56, // Number | filter by reviewed status
  'periodCreated': "periodCreated_example", // String | filter by period
  'article': 56, // Number | select comments for article with given id
  'download': 56, // Number | select comments for download with given id
  'news': 56, // Number | select comments for news with given id
  'groupBy': "groupBy_example" // String | how to groups comments
};
apiInstance.getArticleCommentCount(filters).then((response) => {
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
> Response getArticleComments(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getArticleComments(filters).then((response) => {
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
> Response getArticleCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getArticleCount(filters).then((response) => {
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
> Response getArticlePendingCreateById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getArticlePendingCreateById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getArticlePendingCreateCount"></a>
# **getArticlePendingCreateCount**
> Response getArticlePendingCreateCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
  'assignedPerson': "assignedPerson_example" // String | 
};
apiInstance.getArticlePendingCreateCount(filters).then((response) => {
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
> Response getArticlePendingCreates(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example", // String | Comma separated list of IDs
  'assignedPerson': "assignedPerson_example", // String | 
  'orderBy': "orderBy_example", // String | how to order result
  'orderDir': "orderDir_example" // String | order direction
};
apiInstance.getArticlePendingCreates(filters).then((response) => {
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
> Response getArticles(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getArticles(filters).then((response) => {
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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();
apiInstance.getContentCategories().then((response) => {
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

<a name="getDownloadById"></a>
# **getDownloadById**
> Response getDownloadById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getDownloadById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadCategories"></a>
# **getDownloadCategories**
> Response getDownloadCategories(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getDownloadCategories(filters).then((response) => {
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
> Response getDownloadCategoryById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getDownloadCategoryById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();
apiInstance.getDownloadCategoryCount().then((response) => {
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

<a name="getDownloadCommentById"></a>
# **getDownloadCommentById**
> Response getDownloadCommentById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getDownloadCommentById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadCommentCount"></a>
# **getDownloadCommentCount**
> Response getDownloadCommentCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
  'status': "status_example", // String | filter by status
  'isReviewed': 56, // Number | filter by reviewed status
  'periodCreated': "periodCreated_example", // String | filter by period
  'article': 56, // Number | select comments for article with given id
  'download': 56, // Number | select comments for download with given id
  'news': 56, // Number | select comments for news with given id
  'groupBy': "groupBy_example" // String | how to groups comments
};
apiInstance.getDownloadCommentCount(filters).then((response) => {
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
> Response getDownloadComments(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getDownloadComments(filters).then((response) => {
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
> Response getDownloadCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getDownloadCount(filters).then((response) => {
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
> Response getDownloads(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getDownloads(filters).then((response) => {
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
> Response getGuideByGuideIdExport(String guideId)



export a full json of the guide

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const guideId = "guideId_example"; // String | 

apiInstance.getGuideByGuideIdExport(guideId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guideId** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGuideByGuideIdTree"></a>
# **getGuideByGuideIdTree**
> Response getGuideByGuideIdTree(String guideId)



give a topics tree list of a guide

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const guideId = "guideId_example"; // String | 

apiInstance.getGuideByGuideIdTree(guideId).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guideId** | **String**|  |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGuideById"></a>
# **getGuideById**
> Response getGuideById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getGuideById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();
apiInstance.getGuideCount().then((response) => {
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

<a name="getGuides"></a>
# **getGuides**
> Response getGuides(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getGuides(filters).then((response) => {
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
> Response getNews(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getNews(filters).then((response) => {
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
> Response getNewsById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getNewsById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsCategories"></a>
# **getNewsCategories**
> Response getNewsCategories(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
  'page': 56, // Number | Which page to display
  'count': 56, // Number | Resource per page count
  'limit': 56, // Number | Max number of resources to return
  'ids': "ids_example" // String | Comma separated list of IDs
};
apiInstance.getNewsCategories(filters).then((response) => {
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
> Response getNewsCategoryById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getNewsCategoryById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


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
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();
apiInstance.getNewsCategoryCount().then((response) => {
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

<a name="getNewsCommentById"></a>
# **getNewsCommentById**
> Response getNewsCommentById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getNewsCommentById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsCommentCount"></a>
# **getNewsCommentCount**
> Response getNewsCommentCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
  'status': "status_example", // String | filter by status
  'isReviewed': 56, // Number | filter by reviewed status
  'periodCreated': "periodCreated_example", // String | filter by period
  'article': 56, // Number | select comments for article with given id
  'download': 56, // Number | select comments for download with given id
  'news': 56, // Number | select comments for news with given id
  'groupBy': "groupBy_example" // String | how to groups comments
};
apiInstance.getNewsCommentCount(filters).then((response) => {
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
> Response getNewsComments(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getNewsComments(filters).then((response) => {
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
> Response getNewsCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getNewsCount(filters).then((response) => {
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
> Response getTopicById(Number id)



Get a resource

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const id = 56; // Number | The id of the resource

apiInstance.getTopicById(id).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the resource |

### Filters
This endpoint does not need any filters.


### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopicCount"></a>
# **getTopicCount**
> Response getTopicCount(object filters)



Count list

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getTopicCount(filters).then((response) => {
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
> Response getTopics(object filters)



Get collection of resources

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const filters = { 
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
apiInstance.getTopics(filters).then((response) => {
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
> Response updateGuideByGuideIdTree(String guideId, [String] tree)



save the tree structure

### Example
```javascript
import DeskproApi from 'deskpro-api';

const defaultClient = DeskproApi.ApiClient.instance;
defaultClient.setApiKey('YOUR_API_KEY');

const apiInstance = new DeskproApi.ContentApi();

const guideId = "guideId_example"; // String | 

const tree = ["tree_example"]; // [String] | 

apiInstance.updateGuideByGuideIdTree(guideId, tree).then((response) => {
  console.log(response.data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guideId** | **String**|  |
 **tree** | [**[String]**](../Model/String.md)|  |

### Filters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tree** | [**[String]**](../Model/String.md)|  |

### Return type

[**Response**](Response.md)

### Authorization

[KeyAuthentication](../README.md#KeyAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

