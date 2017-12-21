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
* The ClientDeviceType model module.
* @module DeskPRO\API/Model/ClientDeviceType
* @version 2.0.0
*/
export default class ClientDeviceType {
    /**
    * Constructs a new <code>ClientDeviceType</code>.
    * @alias module:DeskPRO\API/Model/ClientDeviceType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ClientDeviceType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:DeskPRO\API/Model/ClientDeviceType} obj Optional instance to populate.
    * @return {module:DeskPRO\API/Model/ClientDeviceType} The populated <code>ClientDeviceType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientDeviceType();

            
            
            

            if (data.hasOwnProperty('device_id')) {
                obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
            }
            if (data.hasOwnProperty('device_type')) {
                obj['device_type'] = ApiClient.convertToType(data['device_type'], 'String');
            }
            if (data.hasOwnProperty('device_agent')) {
                obj['device_agent'] = ApiClient.convertToType(data['device_agent'], 'String');
            }
            if (data.hasOwnProperty('device_name')) {
                obj['device_name'] = ApiClient.convertToType(data['device_name'], 'String');
            }
            if (data.hasOwnProperty('notification_token')) {
                obj['notification_token'] = ApiClient.convertToType(data['notification_token'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} device_id
    */
    device_id = undefined;
    /**
    * @member {String} device_type
    */
    device_type = undefined;
    /**
    * @member {String} device_agent
    */
    device_agent = undefined;
    /**
    * @member {String} device_name
    */
    device_name = undefined;
    /**
    * @member {String} notification_token
    */
    notification_token = undefined;








}

