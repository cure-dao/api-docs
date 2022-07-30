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


import ApiClient from "../ApiClient";
import DeviceToken from '../model/DeviceToken';

/**
* Notifications service.
* @module api/NotificationsApi
* @version 0.0.1
*/
export default class NotificationsApi {

    /**
    * Constructs a new NotificationsApi. 
    * @alias module:api/NotificationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getNotificationPreferences operation.
     * @callback module:api/NotificationsApi~getNotificationPreferencesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get NotificationPreferences
     * Get NotificationPreferences
     * @param {module:api/NotificationsApi~getNotificationPreferencesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getNotificationPreferences(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/notificationPreferences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postDeviceToken operation.
     * @callback module:api/NotificationsApi~postDeviceTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post DeviceTokens
     * Post user token for Android, iOS, or web push notifications
     * @param {module:model/DeviceToken} body The platform and token
     * @param {module:api/NotificationsApi~postDeviceTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postDeviceToken(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postDeviceToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/deviceTokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
