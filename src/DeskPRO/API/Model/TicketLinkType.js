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
* The TicketLinkType model module.
* @module DeskPRO\API/Model/TicketLinkType
* @version 2.0.0
*/
export default class TicketLinkType {
    /**
    * Constructs a new <code>TicketLinkType</code>.
    * @alias module:DeskPRO\API/Model/TicketLinkType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TicketLinkType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:DeskPRO\API/Model/TicketLinkType} obj Optional instance to populate.
    * @return {module:DeskPRO\API/Model/TicketLinkType} The populated <code>TicketLinkType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TicketLinkType();

            
            
            

            if (data.hasOwnProperty('link_ticket')) {
                obj['link_ticket'] = ApiClient.convertToType(data['link_ticket'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} link_ticket
    */
    link_ticket = undefined;
    /**
    * @member {Boolean} parent
    */
    parent = undefined;








}

