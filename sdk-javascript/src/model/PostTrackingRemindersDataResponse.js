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
import Card from './Card';
import Error from './Error';
import TrackingReminder from './TrackingReminder';
import TrackingReminderNotification from './TrackingReminderNotification';
import Variable from './Variable';

/**
 * The PostTrackingRemindersDataResponse model module.
 * @module model/PostTrackingRemindersDataResponse
 * @version 0.0.1
 */
class PostTrackingRemindersDataResponse {
    /**
     * Constructs a new <code>PostTrackingRemindersDataResponse</code>.
     * @alias module:model/PostTrackingRemindersDataResponse
     */
    constructor() {

        PostTrackingRemindersDataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>PostTrackingRemindersDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTrackingRemindersDataResponse} obj Optional instance to populate.
     * @return {module:model/PostTrackingRemindersDataResponse} The populated <code>PostTrackingRemindersDataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTrackingRemindersDataResponse();

            if (data.hasOwnProperty('trackingReminderNotifications')) {
                obj['trackingReminderNotifications'] = ApiClient.convertToType(data['trackingReminderNotifications'], [TrackingReminderNotification]);
            }
            if (data.hasOwnProperty('trackingReminders')) {
                obj['trackingReminders'] = ApiClient.convertToType(data['trackingReminders'], [TrackingReminder]);
            }
            if (data.hasOwnProperty('userVariables')) {
                obj['userVariables'] = ApiClient.convertToType(data['userVariables'], [Variable]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('card')) {
                obj['card'] = Card.constructFromObject(data['card']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TrackingReminderNotification>} trackingReminderNotifications
 */
PostTrackingRemindersDataResponse.prototype['trackingReminderNotifications'] = undefined;

/**
 * @member {Array.<module:model/TrackingReminder>} trackingReminders
 */
PostTrackingRemindersDataResponse.prototype['trackingReminders'] = undefined;

/**
 * @member {Array.<module:model/Variable>} userVariables
 */
PostTrackingRemindersDataResponse.prototype['userVariables'] = undefined;

/**
 * Can be used as body of help info popup
 * @member {String} description
 */
PostTrackingRemindersDataResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
PostTrackingRemindersDataResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
PostTrackingRemindersDataResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
PostTrackingRemindersDataResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
PostTrackingRemindersDataResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
PostTrackingRemindersDataResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
PostTrackingRemindersDataResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
PostTrackingRemindersDataResponse.prototype['card'] = undefined;






export default PostTrackingRemindersDataResponse;

