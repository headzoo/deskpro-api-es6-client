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
* The DefaultDepartmentSettingsType model module.
* @module DeskPRO\API/Model/DefaultDepartmentSettingsType
* @version 2.0.0
*/
export default class DefaultDepartmentSettingsType {
    /**
    * Constructs a new <code>DefaultDepartmentSettingsType</code>.
    * @alias module:DeskPRO\API/Model/DefaultDepartmentSettingsType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>DefaultDepartmentSettingsType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:DeskPRO\API/Model/DefaultDepartmentSettingsType} obj Optional instance to populate.
    * @return {module:DeskPRO\API/Model/DefaultDepartmentSettingsType} The populated <code>DefaultDepartmentSettingsType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DefaultDepartmentSettingsType();

            
            
            

            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} brand
    */
    brand = undefined;
    /**
    * @member {String} department
    */
    department = undefined;
    /**
    * @member {String} type
    */
    type = undefined;








}

