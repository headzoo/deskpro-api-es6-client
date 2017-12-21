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
* The TicketFollowUpType model module.
* @module DeskPRO\API/Model/TicketFollowUpType
* @version 2.0.0
*/
export default class TicketFollowUpType {
    /**
    * Constructs a new <code>TicketFollowUpType</code>.
    * @alias module:DeskPRO\API/Model/TicketFollowUpType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TicketFollowUpType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:DeskPRO\API/Model/TicketFollowUpType} obj Optional instance to populate.
    * @return {module:DeskPRO\API/Model/TicketFollowUpType} The populated <code>TicketFollowUpType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TicketFollowUpType();

            
            
            

            if (data.hasOwnProperty('date_to_run')) {
                obj['date_to_run'] = ApiClient.convertToType(data['date_to_run'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [Object]);
            }
            if (data.hasOwnProperty('cancel_if_user_reply')) {
                obj['cancel_if_user_reply'] = ApiClient.convertToType(data['cancel_if_user_reply'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} date_to_run
    */
    date_to_run = undefined;
    /**
    * @member {Array.<Object>} actions
    */
    actions = undefined;
    /**
    * @member {Boolean} cancel_if_user_reply
    */
    cancel_if_user_reply = undefined;








}


