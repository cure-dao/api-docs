/**
 * CureDAO Unified Health API
 * A community-owned platform for crowdsourced clinical research
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import User from './User';

/**
 * The AppSettings model module.
 * @module model/AppSettings
 * @version 0.0.1
 */
class AppSettings {
    /**
     * Constructs a new <code>AppSettings</code>.
     * @alias module:model/AppSettings
     */
    constructor() {

        AppSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>AppSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppSettings} obj Optional instance to populate.
     * @return {module:model/AppSettings} The populated <code>AppSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppSettings();

            if (data.hasOwnProperty('additionalSettings')) {
                obj['additionalSettings'] = ApiClient.convertToType(data['additionalSettings'], Object);
            }
            if (data.hasOwnProperty('appDescription')) {
                obj['appDescription'] = ApiClient.convertToType(data['appDescription'], 'String');
            }
            if (data.hasOwnProperty('appDesign')) {
                obj['appDesign'] = ApiClient.convertToType(data['appDesign'], Object);
            }
            if (data.hasOwnProperty('appDisplayName')) {
                obj['appDisplayName'] = ApiClient.convertToType(data['appDisplayName'], 'String');
            }
            if (data.hasOwnProperty('appStatus')) {
                obj['appStatus'] = ApiClient.convertToType(data['appStatus'], Object);
            }
            if (data.hasOwnProperty('appType')) {
                obj['appType'] = ApiClient.convertToType(data['appType'], 'String');
            }
            if (data.hasOwnProperty('buildEnabled')) {
                obj['buildEnabled'] = ApiClient.convertToType(data['buildEnabled'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('clientSecret')) {
                obj['clientSecret'] = ApiClient.convertToType(data['clientSecret'], 'String');
            }
            if (data.hasOwnProperty('collaborators')) {
                obj['collaborators'] = ApiClient.convertToType(data['collaborators'], [User]);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
            if (data.hasOwnProperty('redirectUri')) {
                obj['redirectUri'] = ApiClient.convertToType(data['redirectUri'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('homepageUrl')) {
                obj['homepageUrl'] = ApiClient.convertToType(data['homepageUrl'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('longDescription')) {
                obj['longDescription'] = ApiClient.convertToType(data['longDescription'], 'String');
            }
            if (data.hasOwnProperty('splashScreen')) {
                obj['splashScreen'] = ApiClient.convertToType(data['splashScreen'], 'String');
            }
            if (data.hasOwnProperty('textLogo')) {
                obj['textLogo'] = ApiClient.convertToType(data['textLogo'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} additionalSettings
 */
AppSettings.prototype['additionalSettings'] = undefined;

/**
 * @member {String} appDescription
 */
AppSettings.prototype['appDescription'] = undefined;

/**
 * @member {Object} appDesign
 */
AppSettings.prototype['appDesign'] = undefined;

/**
 * @member {String} appDisplayName
 */
AppSettings.prototype['appDisplayName'] = undefined;

/**
 * @member {Object} appStatus
 */
AppSettings.prototype['appStatus'] = undefined;

/**
 * @member {String} appType
 */
AppSettings.prototype['appType'] = undefined;

/**
 * @member {String} buildEnabled
 */
AppSettings.prototype['buildEnabled'] = undefined;

/**
 * Get yours at https:://builder.curedao.org
 * @member {String} clientId
 */
AppSettings.prototype['clientId'] = undefined;

/**
 * Get yours at https:://builder.curedao.org
 * @member {String} clientSecret
 */
AppSettings.prototype['clientSecret'] = undefined;

/**
 * @member {Array.<module:model/User>} collaborators
 */
AppSettings.prototype['collaborators'] = undefined;

/**
 * @member {String} createdAt
 */
AppSettings.prototype['createdAt'] = undefined;

/**
 * User id of the owner of the application
 * @member {Number} userId
 */
AppSettings.prototype['userId'] = undefined;

/**
 * @member {Array.<module:model/User>} users
 */
AppSettings.prototype['users'] = undefined;

/**
 * @member {String} redirectUri
 */
AppSettings.prototype['redirectUri'] = undefined;

/**
 * @member {String} companyName
 */
AppSettings.prototype['companyName'] = undefined;

/**
 * @member {String} homepageUrl
 */
AppSettings.prototype['homepageUrl'] = undefined;

/**
 * @member {String} iconUrl
 */
AppSettings.prototype['iconUrl'] = undefined;

/**
 * @member {String} longDescription
 */
AppSettings.prototype['longDescription'] = undefined;

/**
 * @member {String} splashScreen
 */
AppSettings.prototype['splashScreen'] = undefined;

/**
 * @member {String} textLogo
 */
AppSettings.prototype['textLogo'] = undefined;






export default AppSettings;

