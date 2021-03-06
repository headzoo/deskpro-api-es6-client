/**
 * DeskPRO API
 * DeskPRO API
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AgentChatMessageType from './model/AgentChatMessageType';
import AgentChatType from './model/AgentChatType';
import AgentMarkMessageType from './model/AgentMarkMessageType';
import AgentProfileType from './model/AgentProfileType';
import AgentTeamType from './model/AgentTeamType';
import AppInstance from './model/AppInstance';
import ArticleCategoryType from './model/ArticleCategoryType';
import ArticleType from './model/ArticleType';
import BlobAuthType from './model/BlobAuthType';
import BrandType from './model/BrandType';
import CaptchaAntiAbuseType from './model/CaptchaAntiAbuseType';
import ChatConversationType from './model/ChatConversationType';
import ChatMessageType from './model/ChatMessageType';
import ClientDeviceType from './model/ClientDeviceType';
import CustomFieldType from './model/CustomFieldType';
import DefaultDepartmentSettingsType from './model/DefaultDepartmentSettingsType';
import DepartmentType from './model/DepartmentType';
import DownloadCategoryType from './model/DownloadCategoryType';
import DownloadType from './model/DownloadType';
import DownloadsSettingsType from './model/DownloadsSettingsType';
import Error from './model/Error';
import FeedbackCommentType from './model/FeedbackCommentType';
import FeedbackSettingsType from './model/FeedbackSettingsType';
import FeedbackType from './model/FeedbackType';
import GenNotificationType from './model/GenNotificationType';
import GeneralSettingsType from './model/GeneralSettingsType';
import GlossaryWordDefinitionType from './model/GlossaryWordDefinitionType';
import GlossaryWordType from './model/GlossaryWordType';
import GuideType from './model/GuideType';
import GuidesSettingsType from './model/GuidesSettingsType';
import IncidentType from './model/IncidentType';
import KbSettingsType from './model/KbSettingsType';
import MagicLinkEmailType from './model/MagicLinkEmailType';
import NewsCategoryType from './model/NewsCategoryType';
import NewsSettingsType from './model/NewsSettingsType';
import NewsType from './model/NewsType';
import OAuthClientType from './model/OAuthClientType';
import OrganizationMemberType from './model/OrganizationMemberType';
import OrganizationNoteType from './model/OrganizationNoteType';
import OrganizationType from './model/OrganizationType';
import PersonNoteType from './model/PersonNoteType';
import PersonOnboardingType from './model/PersonOnboardingType';
import PersonType from './model/PersonType';
import PortalAntiAbuseSettingsType from './model/PortalAntiAbuseSettingsType';
import ProblemType from './model/ProblemType';
import Response from './model/Response';
import SnippetMassActionType from './model/SnippetMassActionType';
import SnippetType from './model/SnippetType';
import TaskCommentType from './model/TaskCommentType';
import TaskType from './model/TaskType';
import TextSnippetCategoryType from './model/TextSnippetCategoryType';
import TextSnippetType from './model/TextSnippetType';
import TicketFilterPreferenceType from './model/TicketFilterPreferenceType';
import TicketFilterSetType from './model/TicketFilterSetType';
import TicketFilterType from './model/TicketFilterType';
import TicketFollowUpType from './model/TicketFollowUpType';
import TicketLinkType from './model/TicketLinkType';
import TicketLogType from './model/TicketLogType';
import TicketMessageType from './model/TicketMessageType';
import TicketParticipantType from './model/TicketParticipantType';
import TicketSlaType from './model/TicketSlaType';
import TicketStarNameType from './model/TicketStarNameType';
import TicketType from './model/TicketType';
import TicketWithLayoutsApiType from './model/TicketWithLayoutsApiType';
import TopicType from './model/TopicType';
import TriggerAction from './model/TriggerAction';
import TriggerTerm from './model/TriggerTerm';
import UpdaterSettingsType from './model/UpdaterSettingsType';
import WidgetSettingsType from './model/WidgetSettingsType';
import AgentsApi from './api/AgentsApi';
import AntiAbuseSettingsApi from './api/AntiAbuseSettingsApi';
import AppsApi from './api/AppsApi';
import AuthApi from './api/AuthApi';
import BlobsApi from './api/BlobsApi';
import BrandsApi from './api/BrandsApi';
import ChatsApi from './api/ChatsApi';
import ClientDevicesApi from './api/ClientDevicesApi';
import ContentApi from './api/ContentApi';
import DepartmentsApi from './api/DepartmentsApi';
import EmailAccountsApi from './api/EmailAccountsApi';
import FeaturesApi from './api/FeaturesApi';
import FeedbackApi from './api/FeedbackApi';
import GlossaryApi from './api/GlossaryApi';
import HelpdeskApi from './api/HelpdeskApi';
import JobsApi from './api/JobsApi';
import LabelsApi from './api/LabelsApi';
import LanguagesApi from './api/LanguagesApi';
import LogsApi from './api/LogsApi';
import NotificationsAndAlertsApi from './api/NotificationsAndAlertsApi';
import OrganizationsApi from './api/OrganizationsApi';
import PeopleApi from './api/PeopleApi';
import PersonSettingsApi from './api/PersonSettingsApi';
import PortalNewSettingsApi from './api/PortalNewSettingsApi';
import PortalSettingsApi from './api/PortalSettingsApi';
import SLAsApi from './api/SLAsApi';
import SearchApi from './api/SearchApi';
import SettingsApi from './api/SettingsApi';
import SnippetsApi from './api/SnippetsApi';
import SystemApi from './api/SystemApi';
import TagsApi from './api/TagsApi';
import TasksApi from './api/TasksApi';
import TextSnippetsApi from './api/TextSnippetsApi';
import TicketFilterPreferencesApi from './api/TicketFilterPreferencesApi';
import TicketFiltersApi from './api/TicketFiltersApi';
import TicketFiltersLegacyApi from './api/TicketFiltersLegacyApi';
import TicketFormWidgetApi from './api/TicketFormWidgetApi';
import TicketsApi from './api/TicketsApi';
import TimezonesApi from './api/TimezonesApi';
import UsergroupsApi from './api/UsergroupsApi';
import UsersourceSettingsApi from './api/UsersourceSettingsApi';
import UsersourcesApi from './api/UsersourcesApi';
import WebhooksApi from './api/WebhooksApi';
import WidgetSampleOnlineAgentsApi from './api/WidgetSampleOnlineAgentsApi';
import WidgetSetupApi from './api/WidgetSetupApi';


/**
* DeskPRO_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DeskproApi = require('index'); // See note below*.
* var xxxSvc = new DeskproApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DeskproApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DeskproApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DeskproApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AgentChatMessageType model constructor.
     * @property {module:model/AgentChatMessageType}
     */
    AgentChatMessageType,

    /**
     * The AgentChatType model constructor.
     * @property {module:model/AgentChatType}
     */
    AgentChatType,

    /**
     * The AgentMarkMessageType model constructor.
     * @property {module:model/AgentMarkMessageType}
     */
    AgentMarkMessageType,

    /**
     * The AgentProfileType model constructor.
     * @property {module:model/AgentProfileType}
     */
    AgentProfileType,

    /**
     * The AgentTeamType model constructor.
     * @property {module:model/AgentTeamType}
     */
    AgentTeamType,

    /**
     * The AppInstance model constructor.
     * @property {module:model/AppInstance}
     */
    AppInstance,

    /**
     * The ArticleCategoryType model constructor.
     * @property {module:model/ArticleCategoryType}
     */
    ArticleCategoryType,

    /**
     * The ArticleType model constructor.
     * @property {module:model/ArticleType}
     */
    ArticleType,

    /**
     * The BlobAuthType model constructor.
     * @property {module:model/BlobAuthType}
     */
    BlobAuthType,

    /**
     * The BrandType model constructor.
     * @property {module:model/BrandType}
     */
    BrandType,

    /**
     * The CaptchaAntiAbuseType model constructor.
     * @property {module:model/CaptchaAntiAbuseType}
     */
    CaptchaAntiAbuseType,

    /**
     * The ChatConversationType model constructor.
     * @property {module:model/ChatConversationType}
     */
    ChatConversationType,

    /**
     * The ChatMessageType model constructor.
     * @property {module:model/ChatMessageType}
     */
    ChatMessageType,

    /**
     * The ClientDeviceType model constructor.
     * @property {module:model/ClientDeviceType}
     */
    ClientDeviceType,

    /**
     * The CustomFieldType model constructor.
     * @property {module:model/CustomFieldType}
     */
    CustomFieldType,

    /**
     * The DefaultDepartmentSettingsType model constructor.
     * @property {module:model/DefaultDepartmentSettingsType}
     */
    DefaultDepartmentSettingsType,

    /**
     * The DepartmentType model constructor.
     * @property {module:model/DepartmentType}
     */
    DepartmentType,

    /**
     * The DownloadCategoryType model constructor.
     * @property {module:model/DownloadCategoryType}
     */
    DownloadCategoryType,

    /**
     * The DownloadType model constructor.
     * @property {module:model/DownloadType}
     */
    DownloadType,

    /**
     * The DownloadsSettingsType model constructor.
     * @property {module:model/DownloadsSettingsType}
     */
    DownloadsSettingsType,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The FeedbackCommentType model constructor.
     * @property {module:model/FeedbackCommentType}
     */
    FeedbackCommentType,

    /**
     * The FeedbackSettingsType model constructor.
     * @property {module:model/FeedbackSettingsType}
     */
    FeedbackSettingsType,

    /**
     * The FeedbackType model constructor.
     * @property {module:model/FeedbackType}
     */
    FeedbackType,

    /**
     * The GenNotificationType model constructor.
     * @property {module:model/GenNotificationType}
     */
    GenNotificationType,

    /**
     * The GeneralSettingsType model constructor.
     * @property {module:model/GeneralSettingsType}
     */
    GeneralSettingsType,

    /**
     * The GlossaryWordDefinitionType model constructor.
     * @property {module:model/GlossaryWordDefinitionType}
     */
    GlossaryWordDefinitionType,

    /**
     * The GlossaryWordType model constructor.
     * @property {module:model/GlossaryWordType}
     */
    GlossaryWordType,

    /**
     * The GuideType model constructor.
     * @property {module:model/GuideType}
     */
    GuideType,

    /**
     * The GuidesSettingsType model constructor.
     * @property {module:model/GuidesSettingsType}
     */
    GuidesSettingsType,

    /**
     * The IncidentType model constructor.
     * @property {module:model/IncidentType}
     */
    IncidentType,

    /**
     * The KbSettingsType model constructor.
     * @property {module:model/KbSettingsType}
     */
    KbSettingsType,

    /**
     * The MagicLinkEmailType model constructor.
     * @property {module:model/MagicLinkEmailType}
     */
    MagicLinkEmailType,

    /**
     * The NewsCategoryType model constructor.
     * @property {module:model/NewsCategoryType}
     */
    NewsCategoryType,

    /**
     * The NewsSettingsType model constructor.
     * @property {module:model/NewsSettingsType}
     */
    NewsSettingsType,

    /**
     * The NewsType model constructor.
     * @property {module:model/NewsType}
     */
    NewsType,

    /**
     * The OAuthClientType model constructor.
     * @property {module:model/OAuthClientType}
     */
    OAuthClientType,

    /**
     * The OrganizationMemberType model constructor.
     * @property {module:model/OrganizationMemberType}
     */
    OrganizationMemberType,

    /**
     * The OrganizationNoteType model constructor.
     * @property {module:model/OrganizationNoteType}
     */
    OrganizationNoteType,

    /**
     * The OrganizationType model constructor.
     * @property {module:model/OrganizationType}
     */
    OrganizationType,

    /**
     * The PersonNoteType model constructor.
     * @property {module:model/PersonNoteType}
     */
    PersonNoteType,

    /**
     * The PersonOnboardingType model constructor.
     * @property {module:model/PersonOnboardingType}
     */
    PersonOnboardingType,

    /**
     * The PersonType model constructor.
     * @property {module:model/PersonType}
     */
    PersonType,

    /**
     * The PortalAntiAbuseSettingsType model constructor.
     * @property {module:model/PortalAntiAbuseSettingsType}
     */
    PortalAntiAbuseSettingsType,

    /**
     * The ProblemType model constructor.
     * @property {module:model/ProblemType}
     */
    ProblemType,

    /**
     * The Response model constructor.
     * @property {module:model/Response}
     */
    Response,

    /**
     * The SnippetMassActionType model constructor.
     * @property {module:model/SnippetMassActionType}
     */
    SnippetMassActionType,

    /**
     * The SnippetType model constructor.
     * @property {module:model/SnippetType}
     */
    SnippetType,

    /**
     * The TaskCommentType model constructor.
     * @property {module:model/TaskCommentType}
     */
    TaskCommentType,

    /**
     * The TaskType model constructor.
     * @property {module:model/TaskType}
     */
    TaskType,

    /**
     * The TextSnippetCategoryType model constructor.
     * @property {module:model/TextSnippetCategoryType}
     */
    TextSnippetCategoryType,

    /**
     * The TextSnippetType model constructor.
     * @property {module:model/TextSnippetType}
     */
    TextSnippetType,

    /**
     * The TicketFilterPreferenceType model constructor.
     * @property {module:model/TicketFilterPreferenceType}
     */
    TicketFilterPreferenceType,

    /**
     * The TicketFilterSetType model constructor.
     * @property {module:model/TicketFilterSetType}
     */
    TicketFilterSetType,

    /**
     * The TicketFilterType model constructor.
     * @property {module:model/TicketFilterType}
     */
    TicketFilterType,

    /**
     * The TicketFollowUpType model constructor.
     * @property {module:model/TicketFollowUpType}
     */
    TicketFollowUpType,

    /**
     * The TicketLinkType model constructor.
     * @property {module:model/TicketLinkType}
     */
    TicketLinkType,

    /**
     * The TicketLogType model constructor.
     * @property {module:model/TicketLogType}
     */
    TicketLogType,

    /**
     * The TicketMessageType model constructor.
     * @property {module:model/TicketMessageType}
     */
    TicketMessageType,

    /**
     * The TicketParticipantType model constructor.
     * @property {module:model/TicketParticipantType}
     */
    TicketParticipantType,

    /**
     * The TicketSlaType model constructor.
     * @property {module:model/TicketSlaType}
     */
    TicketSlaType,

    /**
     * The TicketStarNameType model constructor.
     * @property {module:model/TicketStarNameType}
     */
    TicketStarNameType,

    /**
     * The TicketType model constructor.
     * @property {module:model/TicketType}
     */
    TicketType,

    /**
     * The TicketWithLayoutsApiType model constructor.
     * @property {module:model/TicketWithLayoutsApiType}
     */
    TicketWithLayoutsApiType,

    /**
     * The TopicType model constructor.
     * @property {module:model/TopicType}
     */
    TopicType,

    /**
     * The TriggerAction model constructor.
     * @property {module:model/TriggerAction}
     */
    TriggerAction,

    /**
     * The TriggerTerm model constructor.
     * @property {module:model/TriggerTerm}
     */
    TriggerTerm,

    /**
     * The UpdaterSettingsType model constructor.
     * @property {module:model/UpdaterSettingsType}
     */
    UpdaterSettingsType,

    /**
     * The WidgetSettingsType model constructor.
     * @property {module:model/WidgetSettingsType}
     */
    WidgetSettingsType,

    /**
    * The AgentsApi service constructor.
    * @property {module:api/AgentsApi}
    */
    AgentsApi,

    /**
    * The AntiAbuseSettingsApi service constructor.
    * @property {module:api/AntiAbuseSettingsApi}
    */
    AntiAbuseSettingsApi,

    /**
    * The AppsApi service constructor.
    * @property {module:api/AppsApi}
    */
    AppsApi,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The BlobsApi service constructor.
    * @property {module:api/BlobsApi}
    */
    BlobsApi,

    /**
    * The BrandsApi service constructor.
    * @property {module:api/BrandsApi}
    */
    BrandsApi,

    /**
    * The ChatsApi service constructor.
    * @property {module:api/ChatsApi}
    */
    ChatsApi,

    /**
    * The ClientDevicesApi service constructor.
    * @property {module:api/ClientDevicesApi}
    */
    ClientDevicesApi,

    /**
    * The ContentApi service constructor.
    * @property {module:api/ContentApi}
    */
    ContentApi,

    /**
    * The DepartmentsApi service constructor.
    * @property {module:api/DepartmentsApi}
    */
    DepartmentsApi,

    /**
    * The EmailAccountsApi service constructor.
    * @property {module:api/EmailAccountsApi}
    */
    EmailAccountsApi,

    /**
    * The FeaturesApi service constructor.
    * @property {module:api/FeaturesApi}
    */
    FeaturesApi,

    /**
    * The FeedbackApi service constructor.
    * @property {module:api/FeedbackApi}
    */
    FeedbackApi,

    /**
    * The GlossaryApi service constructor.
    * @property {module:api/GlossaryApi}
    */
    GlossaryApi,

    /**
    * The HelpdeskApi service constructor.
    * @property {module:api/HelpdeskApi}
    */
    HelpdeskApi,

    /**
    * The JobsApi service constructor.
    * @property {module:api/JobsApi}
    */
    JobsApi,

    /**
    * The LabelsApi service constructor.
    * @property {module:api/LabelsApi}
    */
    LabelsApi,

    /**
    * The LanguagesApi service constructor.
    * @property {module:api/LanguagesApi}
    */
    LanguagesApi,

    /**
    * The LogsApi service constructor.
    * @property {module:api/LogsApi}
    */
    LogsApi,

    /**
    * The NotificationsAndAlertsApi service constructor.
    * @property {module:api/NotificationsAndAlertsApi}
    */
    NotificationsAndAlertsApi,

    /**
    * The OrganizationsApi service constructor.
    * @property {module:api/OrganizationsApi}
    */
    OrganizationsApi,

    /**
    * The PeopleApi service constructor.
    * @property {module:api/PeopleApi}
    */
    PeopleApi,

    /**
    * The PersonSettingsApi service constructor.
    * @property {module:api/PersonSettingsApi}
    */
    PersonSettingsApi,

    /**
    * The PortalNewSettingsApi service constructor.
    * @property {module:api/PortalNewSettingsApi}
    */
    PortalNewSettingsApi,

    /**
    * The PortalSettingsApi service constructor.
    * @property {module:api/PortalSettingsApi}
    */
    PortalSettingsApi,

    /**
    * The SLAsApi service constructor.
    * @property {module:api/SLAsApi}
    */
    SLAsApi,

    /**
    * The SearchApi service constructor.
    * @property {module:api/SearchApi}
    */
    SearchApi,

    /**
    * The SettingsApi service constructor.
    * @property {module:api/SettingsApi}
    */
    SettingsApi,

    /**
    * The SnippetsApi service constructor.
    * @property {module:api/SnippetsApi}
    */
    SnippetsApi,

    /**
    * The SystemApi service constructor.
    * @property {module:api/SystemApi}
    */
    SystemApi,

    /**
    * The TagsApi service constructor.
    * @property {module:api/TagsApi}
    */
    TagsApi,

    /**
    * The TasksApi service constructor.
    * @property {module:api/TasksApi}
    */
    TasksApi,

    /**
    * The TextSnippetsApi service constructor.
    * @property {module:api/TextSnippetsApi}
    */
    TextSnippetsApi,

    /**
    * The TicketFilterPreferencesApi service constructor.
    * @property {module:api/TicketFilterPreferencesApi}
    */
    TicketFilterPreferencesApi,

    /**
    * The TicketFiltersApi service constructor.
    * @property {module:api/TicketFiltersApi}
    */
    TicketFiltersApi,

    /**
    * The TicketFiltersLegacyApi service constructor.
    * @property {module:api/TicketFiltersLegacyApi}
    */
    TicketFiltersLegacyApi,

    /**
    * The TicketFormWidgetApi service constructor.
    * @property {module:api/TicketFormWidgetApi}
    */
    TicketFormWidgetApi,

    /**
    * The TicketsApi service constructor.
    * @property {module:api/TicketsApi}
    */
    TicketsApi,

    /**
    * The TimezonesApi service constructor.
    * @property {module:api/TimezonesApi}
    */
    TimezonesApi,

    /**
    * The UsergroupsApi service constructor.
    * @property {module:api/UsergroupsApi}
    */
    UsergroupsApi,

    /**
    * The UsersourceSettingsApi service constructor.
    * @property {module:api/UsersourceSettingsApi}
    */
    UsersourceSettingsApi,

    /**
    * The UsersourcesApi service constructor.
    * @property {module:api/UsersourcesApi}
    */
    UsersourcesApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:api/WebhooksApi}
    */
    WebhooksApi,

    /**
    * The WidgetSampleOnlineAgentsApi service constructor.
    * @property {module:api/WidgetSampleOnlineAgentsApi}
    */
    WidgetSampleOnlineAgentsApi,

    /**
    * The WidgetSetupApi service constructor.
    * @property {module:api/WidgetSetupApi}
    */
    WidgetSetupApi
};
