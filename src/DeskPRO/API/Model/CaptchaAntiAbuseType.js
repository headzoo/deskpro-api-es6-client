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
* The CaptchaAntiAbuseType model module.
* @module DeskPRO\API/Model/CaptchaAntiAbuseType
* @version 2.0.0
*/
export default class CaptchaAntiAbuseType {
    /**
    * Constructs a new <code>CaptchaAntiAbuseType</code>.
    * @alias module:DeskPRO\API/Model/CaptchaAntiAbuseType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>CaptchaAntiAbuseType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:DeskPRO\API/Model/CaptchaAntiAbuseType} obj Optional instance to populate.
    * @return {module:DeskPRO\API/Model/CaptchaAntiAbuseType} The populated <code>CaptchaAntiAbuseType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CaptchaAntiAbuseType();

            
            
            

            if (data.hasOwnProperty('use_recaptcha2')) {
                obj['use_recaptcha2'] = ApiClient.convertToType(data['use_recaptcha2'], 'Boolean');
            }
            if (data.hasOwnProperty('recaptcha2_site_key')) {
                obj['recaptcha2_site_key'] = ApiClient.convertToType(data['recaptcha2_site_key'], 'String');
            }
            if (data.hasOwnProperty('recaptcha2_secret_key')) {
                obj['recaptcha2_secret_key'] = ApiClient.convertToType(data['recaptcha2_secret_key'], 'String');
            }
            if (data.hasOwnProperty('tickets')) {
                obj['tickets'] = ApiClient.convertToType(data['tickets'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('feedback')) {
                obj['feedback'] = ApiClient.convertToType(data['feedback'], 'String');
            }
            if (data.hasOwnProperty('register')) {
                obj['register'] = ApiClient.convertToType(data['register'], 'String');
            }
            if (data.hasOwnProperty('sharing')) {
                obj['sharing'] = ApiClient.convertToType(data['sharing'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} use_recaptcha2
    */
    use_recaptcha2 = undefined;
    /**
    * @member {String} recaptcha2_site_key
    */
    recaptcha2_site_key = undefined;
    /**
    * @member {String} recaptcha2_secret_key
    */
    recaptcha2_secret_key = undefined;
    /**
    * @member {String} tickets
    */
    tickets = undefined;
    /**
    * @member {String} comments
    */
    comments = undefined;
    /**
    * @member {String} feedback
    */
    feedback = undefined;
    /**
    * @member {String} register
    */
    register = undefined;
    /**
    * @member {String} sharing
    */
    sharing = undefined;








}

