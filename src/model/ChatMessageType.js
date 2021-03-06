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
* The ChatMessageType model module.
* @module model/ChatMessageType
* @version 2.0.0
*/
export default class ChatMessageType {
    /**
    * Constructs a new <code>ChatMessageType</code>.
    * @alias module:model/ChatMessageType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ChatMessageType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ChatMessageType} obj Optional instance to populate.
    * @return {module:model/ChatMessageType} The populated <code>ChatMessageType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChatMessageType();

            
            
            

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], Object);
            }
            if (data.hasOwnProperty('is_user')) {
                obj['is_user'] = ApiClient.convertToType(data['is_user'], 'Boolean');
            }
            if (data.hasOwnProperty('person_name')) {
                obj['person_name'] = ApiClient.convertToType(data['person_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} content
    */
    content = undefined;
    /**
    * @member {Object} author
    */
    author = undefined;
    /**
    * @member {Boolean} is_user
    */
    is_user = undefined;
    /**
    * @member {String} person_name
    */
    person_name = undefined;








}


