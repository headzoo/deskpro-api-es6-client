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
* The KbSettingsType model module.
* @module model/KbSettingsType
* @version 2.0.0
*/
export default class KbSettingsType {
    /**
    * Constructs a new <code>KbSettingsType</code>.
    * @alias module:model/KbSettingsType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>KbSettingsType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/KbSettingsType} obj Optional instance to populate.
    * @return {module:model/KbSettingsType} The populated <code>KbSettingsType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KbSettingsType();

            
            
            

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('tab_enabled')) {
                obj['tab_enabled'] = ApiClient.convertToType(data['tab_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], 'Boolean');
            }
            if (data.hasOwnProperty('knowledgebase_deep_tree')) {
                obj['knowledgebase_deep_tree'] = ApiClient.convertToType(data['knowledgebase_deep_tree'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} enabled
    */
    enabled = undefined;
    /**
    * @member {Boolean} tab_enabled
    */
    tab_enabled = undefined;
    /**
    * @member {Boolean} subscriptions
    */
    subscriptions = undefined;
    /**
    * @member {Boolean} knowledgebase_deep_tree
    */
    knowledgebase_deep_tree = undefined;








}

