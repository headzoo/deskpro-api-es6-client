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
import AgentChatMessageType from './Model/AgentChatMessageType';
import AgentChatType from './Model/AgentChatType';
import AgentMarkMessageType from './Model/AgentMarkMessageType';
import AgentProfileType from './Model/AgentProfileType';
import AgentTeamType from './Model/AgentTeamType';
import AppInstance from './Model/AppInstance';
import ArticleCategoryType from './Model/ArticleCategoryType';
import ArticleType from './Model/ArticleType';
import BlobAuthType from './Model/BlobAuthType';
import BrandType from './Model/BrandType';
import CaptchaAntiAbuseType from './Model/CaptchaAntiAbuseType';
import ChatConversationType from './Model/ChatConversationType';
import ChatMessageType from './Model/ChatMessageType';
import ClientDeviceType from './Model/ClientDeviceType';
import CustomFieldType from './Model/CustomFieldType';
import DefaultDepartmentSettingsType from './Model/DefaultDepartmentSettingsType';
import DepartmentType from './Model/DepartmentType';
import DownloadCategoryType from './Model/DownloadCategoryType';
import DownloadType from './Model/DownloadType';
import DownloadsSettingsType from './Model/DownloadsSettingsType';
import Error from './Model/Error';
import FeedbackCommentType from './Model/FeedbackCommentType';
import FeedbackSettingsType from './Model/FeedbackSettingsType';
import FeedbackType from './Model/FeedbackType';
import GenNotificationType from './Model/GenNotificationType';
import GeneralSettingsType from './Model/GeneralSettingsType';
import GlossaryWordDefinitionType from './Model/GlossaryWordDefinitionType';
import GlossaryWordType from './Model/GlossaryWordType';
import GuideType from './Model/GuideType';
import GuidesSettingsType from './Model/GuidesSettingsType';
import IncidentType from './Model/IncidentType';
import KbSettingsType from './Model/KbSettingsType';
import MagicLinkEmailType from './Model/MagicLinkEmailType';
import NewsCategoryType from './Model/NewsCategoryType';
import NewsSettingsType from './Model/NewsSettingsType';
import NewsType from './Model/NewsType';
import OAuthClientType from './Model/OAuthClientType';
import OrganizationMemberType from './Model/OrganizationMemberType';
import OrganizationNoteType from './Model/OrganizationNoteType';
import OrganizationType from './Model/OrganizationType';
import PersonNoteType from './Model/PersonNoteType';
import PersonOnboardingType from './Model/PersonOnboardingType';
import PersonType from './Model/PersonType';
import PortalAntiAbuseSettingsType from './Model/PortalAntiAbuseSettingsType';
import ProblemType from './Model/ProblemType';
import Response from './Model/Response';
import SnippetMassActionType from './Model/SnippetMassActionType';
import SnippetType from './Model/SnippetType';
import TaskCommentType from './Model/TaskCommentType';
import TaskType from './Model/TaskType';
import TextSnippetCategoryType from './Model/TextSnippetCategoryType';
import TextSnippetType from './Model/TextSnippetType';
import TicketFilterPreferenceType from './Model/TicketFilterPreferenceType';
import TicketFilterSetType from './Model/TicketFilterSetType';
import TicketFilterType from './Model/TicketFilterType';
import TicketFollowUpType from './Model/TicketFollowUpType';
import TicketLinkType from './Model/TicketLinkType';
import TicketLogType from './Model/TicketLogType';
import TicketMessageType from './Model/TicketMessageType';
import TicketParticipantType from './Model/TicketParticipantType';
import TicketSlaType from './Model/TicketSlaType';
import TicketStarNameType from './Model/TicketStarNameType';
import TicketType from './Model/TicketType';
import TicketWithLayoutsApiType from './Model/TicketWithLayoutsApiType';
import TopicType from './Model/TopicType';
import TriggerAction from './Model/TriggerAction';
import TriggerTerm from './Model/TriggerTerm';
import UpdaterSettingsType from './Model/UpdaterSettingsType';
import WidgetSettingsType from './Model/WidgetSettingsType';
import AgentsApi from './Client/AgentsApi';
import AntiAbuseSettingsApi from './Client/AntiAbuseSettingsApi';
import AppsApi from './Client/AppsApi';
import AuthApi from './Client/AuthApi';
import BlobsApi from './Client/BlobsApi';
import BrandsApi from './Client/BrandsApi';
import ChatsApi from './Client/ChatsApi';
import ClientDevicesApi from './Client/ClientDevicesApi';
import ContentApi from './Client/ContentApi';
import DepartmentsApi from './Client/DepartmentsApi';
import EmailAccountsApi from './Client/EmailAccountsApi';
import FeaturesApi from './Client/FeaturesApi';
import FeedbackApi from './Client/FeedbackApi';
import GlossaryApi from './Client/GlossaryApi';
import HelpdeskApi from './Client/HelpdeskApi';
import JobsApi from './Client/JobsApi';
import LabelsApi from './Client/LabelsApi';
import LanguagesApi from './Client/LanguagesApi';
import LogsApi from './Client/LogsApi';
import NotificationsAndAlertsApi from './Client/NotificationsAndAlertsApi';
import OrganizationsApi from './Client/OrganizationsApi';
import PeopleApi from './Client/PeopleApi';
import PersonSettingsApi from './Client/PersonSettingsApi';
import PortalNewSettingsApi from './Client/PortalNewSettingsApi';
import PortalSettingsApi from './Client/PortalSettingsApi';
import SLAsApi from './Client/SLAsApi';
import SearchApi from './Client/SearchApi';
import SettingsApi from './Client/SettingsApi';
import SnippetsApi from './Client/SnippetsApi';
import SystemApi from './Client/SystemApi';
import TagsApi from './Client/TagsApi';
import TasksApi from './Client/TasksApi';
import TextSnippetsApi from './Client/TextSnippetsApi';
import TicketFilterPreferencesApi from './Client/TicketFilterPreferencesApi';
import TicketFiltersApi from './Client/TicketFiltersApi';
import TicketFiltersLegacyApi from './Client/TicketFiltersLegacyApi';
import TicketFormWidgetApi from './Client/TicketFormWidgetApi';
import TicketsApi from './Client/TicketsApi';
import TimezonesApi from './Client/TimezonesApi';
import UsergroupsApi from './Client/UsergroupsApi';
import UsersourceSettingsApi from './Client/UsersourceSettingsApi';
import UsersourcesApi from './Client/UsersourcesApi';
import WebhooksApi from './Client/WebhooksApi';
import WidgetSampleOnlineAgentsApi from './Client/WidgetSampleOnlineAgentsApi';
import WidgetSetupApi from './Client/WidgetSetupApi';


/**
* DeskPRO_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DeskProApi = require('DeskPRO\API/index'); // See note below*.
* var xxxSvc = new DeskProApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DeskProApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['DeskPRO\API/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DeskProApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DeskProApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module DeskPRO\API/index
* @version 2.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:DeskPRO\API/ApiClient}
     */
    ApiClient,

    /**
     * The AgentChatMessageType model constructor.
     * @property {module:DeskPRO\API/Model/AgentChatMessageType}
     */
    AgentChatMessageType,

    /**
     * The AgentChatType model constructor.
     * @property {module:DeskPRO\API/Model/AgentChatType}
     */
    AgentChatType,

    /**
     * The AgentMarkMessageType model constructor.
     * @property {module:DeskPRO\API/Model/AgentMarkMessageType}
     */
    AgentMarkMessageType,

    /**
     * The AgentProfileType model constructor.
     * @property {module:DeskPRO\API/Model/AgentProfileType}
     */
    AgentProfileType,

    /**
     * The AgentTeamType model constructor.
     * @property {module:DeskPRO\API/Model/AgentTeamType}
     */
    AgentTeamType,

    /**
     * The AppInstance model constructor.
     * @property {module:DeskPRO\API/Model/AppInstance}
     */
    AppInstance,

    /**
     * The ArticleCategoryType model constructor.
     * @property {module:DeskPRO\API/Model/ArticleCategoryType}
     */
    ArticleCategoryType,

    /**
     * The ArticleType model constructor.
     * @property {module:DeskPRO\API/Model/ArticleType}
     */
    ArticleType,

    /**
     * The BlobAuthType model constructor.
     * @property {module:DeskPRO\API/Model/BlobAuthType}
     */
    BlobAuthType,

    /**
     * The BrandType model constructor.
     * @property {module:DeskPRO\API/Model/BrandType}
     */
    BrandType,

    /**
     * The CaptchaAntiAbuseType model constructor.
     * @property {module:DeskPRO\API/Model/CaptchaAntiAbuseType}
     */
    CaptchaAntiAbuseType,

    /**
     * The ChatConversationType model constructor.
     * @property {module:DeskPRO\API/Model/ChatConversationType}
     */
    ChatConversationType,

    /**
     * The ChatMessageType model constructor.
     * @property {module:DeskPRO\API/Model/ChatMessageType}
     */
    ChatMessageType,

    /**
     * The ClientDeviceType model constructor.
     * @property {module:DeskPRO\API/Model/ClientDeviceType}
     */
    ClientDeviceType,

    /**
     * The CustomFieldType model constructor.
     * @property {module:DeskPRO\API/Model/CustomFieldType}
     */
    CustomFieldType,

    /**
     * The DefaultDepartmentSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/DefaultDepartmentSettingsType}
     */
    DefaultDepartmentSettingsType,

    /**
     * The DepartmentType model constructor.
     * @property {module:DeskPRO\API/Model/DepartmentType}
     */
    DepartmentType,

    /**
     * The DownloadCategoryType model constructor.
     * @property {module:DeskPRO\API/Model/DownloadCategoryType}
     */
    DownloadCategoryType,

    /**
     * The DownloadType model constructor.
     * @property {module:DeskPRO\API/Model/DownloadType}
     */
    DownloadType,

    /**
     * The DownloadsSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/DownloadsSettingsType}
     */
    DownloadsSettingsType,

    /**
     * The Error model constructor.
     * @property {module:DeskPRO\API/Model/Error}
     */
    Error,

    /**
     * The FeedbackCommentType model constructor.
     * @property {module:DeskPRO\API/Model/FeedbackCommentType}
     */
    FeedbackCommentType,

    /**
     * The FeedbackSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/FeedbackSettingsType}
     */
    FeedbackSettingsType,

    /**
     * The FeedbackType model constructor.
     * @property {module:DeskPRO\API/Model/FeedbackType}
     */
    FeedbackType,

    /**
     * The GenNotificationType model constructor.
     * @property {module:DeskPRO\API/Model/GenNotificationType}
     */
    GenNotificationType,

    /**
     * The GeneralSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/GeneralSettingsType}
     */
    GeneralSettingsType,

    /**
     * The GlossaryWordDefinitionType model constructor.
     * @property {module:DeskPRO\API/Model/GlossaryWordDefinitionType}
     */
    GlossaryWordDefinitionType,

    /**
     * The GlossaryWordType model constructor.
     * @property {module:DeskPRO\API/Model/GlossaryWordType}
     */
    GlossaryWordType,

    /**
     * The GuideType model constructor.
     * @property {module:DeskPRO\API/Model/GuideType}
     */
    GuideType,

    /**
     * The GuidesSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/GuidesSettingsType}
     */
    GuidesSettingsType,

    /**
     * The IncidentType model constructor.
     * @property {module:DeskPRO\API/Model/IncidentType}
     */
    IncidentType,

    /**
     * The KbSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/KbSettingsType}
     */
    KbSettingsType,

    /**
     * The MagicLinkEmailType model constructor.
     * @property {module:DeskPRO\API/Model/MagicLinkEmailType}
     */
    MagicLinkEmailType,

    /**
     * The NewsCategoryType model constructor.
     * @property {module:DeskPRO\API/Model/NewsCategoryType}
     */
    NewsCategoryType,

    /**
     * The NewsSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/NewsSettingsType}
     */
    NewsSettingsType,

    /**
     * The NewsType model constructor.
     * @property {module:DeskPRO\API/Model/NewsType}
     */
    NewsType,

    /**
     * The OAuthClientType model constructor.
     * @property {module:DeskPRO\API/Model/OAuthClientType}
     */
    OAuthClientType,

    /**
     * The OrganizationMemberType model constructor.
     * @property {module:DeskPRO\API/Model/OrganizationMemberType}
     */
    OrganizationMemberType,

    /**
     * The OrganizationNoteType model constructor.
     * @property {module:DeskPRO\API/Model/OrganizationNoteType}
     */
    OrganizationNoteType,

    /**
     * The OrganizationType model constructor.
     * @property {module:DeskPRO\API/Model/OrganizationType}
     */
    OrganizationType,

    /**
     * The PersonNoteType model constructor.
     * @property {module:DeskPRO\API/Model/PersonNoteType}
     */
    PersonNoteType,

    /**
     * The PersonOnboardingType model constructor.
     * @property {module:DeskPRO\API/Model/PersonOnboardingType}
     */
    PersonOnboardingType,

    /**
     * The PersonType model constructor.
     * @property {module:DeskPRO\API/Model/PersonType}
     */
    PersonType,

    /**
     * The PortalAntiAbuseSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/PortalAntiAbuseSettingsType}
     */
    PortalAntiAbuseSettingsType,

    /**
     * The ProblemType model constructor.
     * @property {module:DeskPRO\API/Model/ProblemType}
     */
    ProblemType,

    /**
     * The Response model constructor.
     * @property {module:DeskPRO\API/Model/Response}
     */
    Response,

    /**
     * The SnippetMassActionType model constructor.
     * @property {module:DeskPRO\API/Model/SnippetMassActionType}
     */
    SnippetMassActionType,

    /**
     * The SnippetType model constructor.
     * @property {module:DeskPRO\API/Model/SnippetType}
     */
    SnippetType,

    /**
     * The TaskCommentType model constructor.
     * @property {module:DeskPRO\API/Model/TaskCommentType}
     */
    TaskCommentType,

    /**
     * The TaskType model constructor.
     * @property {module:DeskPRO\API/Model/TaskType}
     */
    TaskType,

    /**
     * The TextSnippetCategoryType model constructor.
     * @property {module:DeskPRO\API/Model/TextSnippetCategoryType}
     */
    TextSnippetCategoryType,

    /**
     * The TextSnippetType model constructor.
     * @property {module:DeskPRO\API/Model/TextSnippetType}
     */
    TextSnippetType,

    /**
     * The TicketFilterPreferenceType model constructor.
     * @property {module:DeskPRO\API/Model/TicketFilterPreferenceType}
     */
    TicketFilterPreferenceType,

    /**
     * The TicketFilterSetType model constructor.
     * @property {module:DeskPRO\API/Model/TicketFilterSetType}
     */
    TicketFilterSetType,

    /**
     * The TicketFilterType model constructor.
     * @property {module:DeskPRO\API/Model/TicketFilterType}
     */
    TicketFilterType,

    /**
     * The TicketFollowUpType model constructor.
     * @property {module:DeskPRO\API/Model/TicketFollowUpType}
     */
    TicketFollowUpType,

    /**
     * The TicketLinkType model constructor.
     * @property {module:DeskPRO\API/Model/TicketLinkType}
     */
    TicketLinkType,

    /**
     * The TicketLogType model constructor.
     * @property {module:DeskPRO\API/Model/TicketLogType}
     */
    TicketLogType,

    /**
     * The TicketMessageType model constructor.
     * @property {module:DeskPRO\API/Model/TicketMessageType}
     */
    TicketMessageType,

    /**
     * The TicketParticipantType model constructor.
     * @property {module:DeskPRO\API/Model/TicketParticipantType}
     */
    TicketParticipantType,

    /**
     * The TicketSlaType model constructor.
     * @property {module:DeskPRO\API/Model/TicketSlaType}
     */
    TicketSlaType,

    /**
     * The TicketStarNameType model constructor.
     * @property {module:DeskPRO\API/Model/TicketStarNameType}
     */
    TicketStarNameType,

    /**
     * The TicketType model constructor.
     * @property {module:DeskPRO\API/Model/TicketType}
     */
    TicketType,

    /**
     * The TicketWithLayoutsApiType model constructor.
     * @property {module:DeskPRO\API/Model/TicketWithLayoutsApiType}
     */
    TicketWithLayoutsApiType,

    /**
     * The TopicType model constructor.
     * @property {module:DeskPRO\API/Model/TopicType}
     */
    TopicType,

    /**
     * The TriggerAction model constructor.
     * @property {module:DeskPRO\API/Model/TriggerAction}
     */
    TriggerAction,

    /**
     * The TriggerTerm model constructor.
     * @property {module:DeskPRO\API/Model/TriggerTerm}
     */
    TriggerTerm,

    /**
     * The UpdaterSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/UpdaterSettingsType}
     */
    UpdaterSettingsType,

    /**
     * The WidgetSettingsType model constructor.
     * @property {module:DeskPRO\API/Model/WidgetSettingsType}
     */
    WidgetSettingsType,

    /**
    * The AgentsApi service constructor.
    * @property {module:DeskPRO\API/Client/AgentsApi}
    */
    AgentsApi,

    /**
    * The AntiAbuseSettingsApi service constructor.
    * @property {module:DeskPRO\API/Client/AntiAbuseSettingsApi}
    */
    AntiAbuseSettingsApi,

    /**
    * The AppsApi service constructor.
    * @property {module:DeskPRO\API/Client/AppsApi}
    */
    AppsApi,

    /**
    * The AuthApi service constructor.
    * @property {module:DeskPRO\API/Client/AuthApi}
    */
    AuthApi,

    /**
    * The BlobsApi service constructor.
    * @property {module:DeskPRO\API/Client/BlobsApi}
    */
    BlobsApi,

    /**
    * The BrandsApi service constructor.
    * @property {module:DeskPRO\API/Client/BrandsApi}
    */
    BrandsApi,

    /**
    * The ChatsApi service constructor.
    * @property {module:DeskPRO\API/Client/ChatsApi}
    */
    ChatsApi,

    /**
    * The ClientDevicesApi service constructor.
    * @property {module:DeskPRO\API/Client/ClientDevicesApi}
    */
    ClientDevicesApi,

    /**
    * The ContentApi service constructor.
    * @property {module:DeskPRO\API/Client/ContentApi}
    */
    ContentApi,

    /**
    * The DepartmentsApi service constructor.
    * @property {module:DeskPRO\API/Client/DepartmentsApi}
    */
    DepartmentsApi,

    /**
    * The EmailAccountsApi service constructor.
    * @property {module:DeskPRO\API/Client/EmailAccountsApi}
    */
    EmailAccountsApi,

    /**
    * The FeaturesApi service constructor.
    * @property {module:DeskPRO\API/Client/FeaturesApi}
    */
    FeaturesApi,

    /**
    * The FeedbackApi service constructor.
    * @property {module:DeskPRO\API/Client/FeedbackApi}
    */
    FeedbackApi,

    /**
    * The GlossaryApi service constructor.
    * @property {module:DeskPRO\API/Client/GlossaryApi}
    */
    GlossaryApi,

    /**
    * The HelpdeskApi service constructor.
    * @property {module:DeskPRO\API/Client/HelpdeskApi}
    */
    HelpdeskApi,

    /**
    * The JobsApi service constructor.
    * @property {module:DeskPRO\API/Client/JobsApi}
    */
    JobsApi,

    /**
    * The LabelsApi service constructor.
    * @property {module:DeskPRO\API/Client/LabelsApi}
    */
    LabelsApi,

    /**
    * The LanguagesApi service constructor.
    * @property {module:DeskPRO\API/Client/LanguagesApi}
    */
    LanguagesApi,

    /**
    * The LogsApi service constructor.
    * @property {module:DeskPRO\API/Client/LogsApi}
    */
    LogsApi,

    /**
    * The NotificationsAndAlertsApi service constructor.
    * @property {module:DeskPRO\API/Client/NotificationsAndAlertsApi}
    */
    NotificationsAndAlertsApi,

    /**
    * The OrganizationsApi service constructor.
    * @property {module:DeskPRO\API/Client/OrganizationsApi}
    */
    OrganizationsApi,

    /**
    * The PeopleApi service constructor.
    * @property {module:DeskPRO\API/Client/PeopleApi}
    */
    PeopleApi,

    /**
    * The PersonSettingsApi service constructor.
    * @property {module:DeskPRO\API/Client/PersonSettingsApi}
    */
    PersonSettingsApi,

    /**
    * The PortalNewSettingsApi service constructor.
    * @property {module:DeskPRO\API/Client/PortalNewSettingsApi}
    */
    PortalNewSettingsApi,

    /**
    * The PortalSettingsApi service constructor.
    * @property {module:DeskPRO\API/Client/PortalSettingsApi}
    */
    PortalSettingsApi,

    /**
    * The SLAsApi service constructor.
    * @property {module:DeskPRO\API/Client/SLAsApi}
    */
    SLAsApi,

    /**
    * The SearchApi service constructor.
    * @property {module:DeskPRO\API/Client/SearchApi}
    */
    SearchApi,

    /**
    * The SettingsApi service constructor.
    * @property {module:DeskPRO\API/Client/SettingsApi}
    */
    SettingsApi,

    /**
    * The SnippetsApi service constructor.
    * @property {module:DeskPRO\API/Client/SnippetsApi}
    */
    SnippetsApi,

    /**
    * The SystemApi service constructor.
    * @property {module:DeskPRO\API/Client/SystemApi}
    */
    SystemApi,

    /**
    * The TagsApi service constructor.
    * @property {module:DeskPRO\API/Client/TagsApi}
    */
    TagsApi,

    /**
    * The TasksApi service constructor.
    * @property {module:DeskPRO\API/Client/TasksApi}
    */
    TasksApi,

    /**
    * The TextSnippetsApi service constructor.
    * @property {module:DeskPRO\API/Client/TextSnippetsApi}
    */
    TextSnippetsApi,

    /**
    * The TicketFilterPreferencesApi service constructor.
    * @property {module:DeskPRO\API/Client/TicketFilterPreferencesApi}
    */
    TicketFilterPreferencesApi,

    /**
    * The TicketFiltersApi service constructor.
    * @property {module:DeskPRO\API/Client/TicketFiltersApi}
    */
    TicketFiltersApi,

    /**
    * The TicketFiltersLegacyApi service constructor.
    * @property {module:DeskPRO\API/Client/TicketFiltersLegacyApi}
    */
    TicketFiltersLegacyApi,

    /**
    * The TicketFormWidgetApi service constructor.
    * @property {module:DeskPRO\API/Client/TicketFormWidgetApi}
    */
    TicketFormWidgetApi,

    /**
    * The TicketsApi service constructor.
    * @property {module:DeskPRO\API/Client/TicketsApi}
    */
    TicketsApi,

    /**
    * The TimezonesApi service constructor.
    * @property {module:DeskPRO\API/Client/TimezonesApi}
    */
    TimezonesApi,

    /**
    * The UsergroupsApi service constructor.
    * @property {module:DeskPRO\API/Client/UsergroupsApi}
    */
    UsergroupsApi,

    /**
    * The UsersourceSettingsApi service constructor.
    * @property {module:DeskPRO\API/Client/UsersourceSettingsApi}
    */
    UsersourceSettingsApi,

    /**
    * The UsersourcesApi service constructor.
    * @property {module:DeskPRO\API/Client/UsersourcesApi}
    */
    UsersourcesApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:DeskPRO\API/Client/WebhooksApi}
    */
    WebhooksApi,

    /**
    * The WidgetSampleOnlineAgentsApi service constructor.
    * @property {module:DeskPRO\API/Client/WidgetSampleOnlineAgentsApi}
    */
    WidgetSampleOnlineAgentsApi,

    /**
    * The WidgetSetupApi service constructor.
    * @property {module:DeskPRO\API/Client/WidgetSetupApi}
    */
    WidgetSetupApi
};