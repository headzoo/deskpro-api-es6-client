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
* The AgentChatMessageType model module.
* @module DeskPRO\API/Model/AgentChatMessageType
* @version 2.0.0
*/
export default class AgentChatMessageType {
    /**
    * Constructs a new <code>AgentChatMessageType</code>.
    * @alias module:DeskPRO\API/Model/AgentChatMessageType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AgentChatMessageType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:DeskPRO\API/Model/AgentChatMessageType} obj Optional instance to populate.
    * @return {module:DeskPRO\API/Model/AgentChatMessageType} The populated <code>AgentChatMessageType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentChatMessageType();

            
            
            

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} message
    */
    message = undefined;
    /**
    * @member {String} uuid
    */
    uuid = undefined;








}


