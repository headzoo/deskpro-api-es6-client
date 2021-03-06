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


import ApiClient from '../ApiClient';





/**
* The GeneralSettingsType model module.
* @module model/GeneralSettingsType
* @version 2.0.0
*/
export default class GeneralSettingsType {
    /**
    * Constructs a new <code>GeneralSettingsType</code>.
    * @alias module:model/GeneralSettingsType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralSettingsType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralSettingsType} obj Optional instance to populate.
    * @return {module:model/GeneralSettingsType} The populated <code>GeneralSettingsType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralSettingsType();

            
            
            

            if (data.hasOwnProperty('site_name')) {
                obj['site_name'] = ApiClient.convertToType(data['site_name'], 'String');
            }
            if (data.hasOwnProperty('brand_name')) {
                obj['brand_name'] = ApiClient.convertToType(data['brand_name'], 'String');
            }
            if (data.hasOwnProperty('site_url')) {
                obj['site_url'] = ApiClient.convertToType(data['site_url'], 'String');
            }
            if (data.hasOwnProperty('deskpro_name')) {
                obj['deskpro_name'] = ApiClient.convertToType(data['deskpro_name'], 'String');
            }
            if (data.hasOwnProperty('deskpro_url')) {
                obj['deskpro_url'] = ApiClient.convertToType(data['deskpro_url'], 'String');
            }
            if (data.hasOwnProperty('apps_feedback')) {
                obj['apps_feedback'] = ApiClient.convertToType(data['apps_feedback'], 'Boolean');
            }
            if (data.hasOwnProperty('apps_kb')) {
                obj['apps_kb'] = ApiClient.convertToType(data['apps_kb'], 'Boolean');
            }
            if (data.hasOwnProperty('apps_news')) {
                obj['apps_news'] = ApiClient.convertToType(data['apps_news'], 'Boolean');
            }
            if (data.hasOwnProperty('apps_downloads')) {
                obj['apps_downloads'] = ApiClient.convertToType(data['apps_downloads'], 'Boolean');
            }
            if (data.hasOwnProperty('apps_guides')) {
                obj['apps_guides'] = ApiClient.convertToType(data['apps_guides'], 'Boolean');
            }
            if (data.hasOwnProperty('iface_portal')) {
                obj['iface_portal'] = ApiClient.convertToType(data['iface_portal'], 'Boolean');
            }
            if (data.hasOwnProperty('iface_widget')) {
                obj['iface_widget'] = ApiClient.convertToType(data['iface_widget'], 'Boolean');
            }
            if (data.hasOwnProperty('show_ratings')) {
                obj['show_ratings'] = ApiClient.convertToType(data['show_ratings'], 'Boolean');
            }
            if (data.hasOwnProperty('show_ratings_min_votes')) {
                obj['show_ratings_min_votes'] = ApiClient.convertToType(data['show_ratings_min_votes'], 'Number');
            }
            if (data.hasOwnProperty('publish_comments')) {
                obj['publish_comments'] = ApiClient.convertToType(data['publish_comments'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} site_name
    */
    site_name = undefined;
    /**
    * @member {String} brand_name
    */
    brand_name = undefined;
    /**
    * @member {String} site_url
    */
    site_url = undefined;
    /**
    * @member {String} deskpro_name
    */
    deskpro_name = undefined;
    /**
    * @member {String} deskpro_url
    */
    deskpro_url = undefined;
    /**
    * @member {Boolean} apps_feedback
    */
    apps_feedback = undefined;
    /**
    * @member {Boolean} apps_kb
    */
    apps_kb = undefined;
    /**
    * @member {Boolean} apps_news
    */
    apps_news = undefined;
    /**
    * @member {Boolean} apps_downloads
    */
    apps_downloads = undefined;
    /**
    * @member {Boolean} apps_guides
    */
    apps_guides = undefined;
    /**
    * @member {Boolean} iface_portal
    */
    iface_portal = undefined;
    /**
    * @member {Boolean} iface_widget
    */
    iface_widget = undefined;
    /**
    * @member {Boolean} show_ratings
    */
    show_ratings = undefined;
    /**
    * @member {Number} show_ratings_min_votes
    */
    show_ratings_min_votes = undefined;
    /**
    * @member {Boolean} publish_comments
    */
    publish_comments = undefined;








}


