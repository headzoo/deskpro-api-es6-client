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
* The TaskCommentType model module.
* @module DeskPRO\API/Model/TaskCommentType
* @version 2.0.0
*/
export default class TaskCommentType {
    /**
    * Constructs a new <code>TaskCommentType</code>.
    * @alias module:DeskPRO\API/Model/TaskCommentType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TaskCommentType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:DeskPRO\API/Model/TaskCommentType} obj Optional instance to populate.
    * @return {module:DeskPRO\API/Model/TaskCommentType} The populated <code>TaskCommentType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskCommentType();

            
            
            

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} content
    */
    content = undefined;








}

