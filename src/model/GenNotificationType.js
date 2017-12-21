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
* The GenNotificationType model module.
* @module model/GenNotificationType
* @version 2.0.0
*/
export default class GenNotificationType {
    /**
    * Constructs a new <code>GenNotificationType</code>.
    * @alias module:model/GenNotificationType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GenNotificationType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GenNotificationType} obj Optional instance to populate.
    * @return {module:model/GenNotificationType} The populated <code>GenNotificationType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenNotificationType();

            
            
            

            if (data.hasOwnProperty('agent')) {
                obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} agent
    */
    agent = undefined;








}

