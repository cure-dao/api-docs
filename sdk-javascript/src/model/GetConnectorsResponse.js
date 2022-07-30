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
import DataSource from './DataSource';
import Error from './Error';

/**
 * The GetConnectorsResponse model module.
 * @module model/GetConnectorsResponse
 * @version 0.0.1
 */
class GetConnectorsResponse {
    /**
     * Constructs a new <code>GetConnectorsResponse</code>.
     * @alias module:model/GetConnectorsResponse
     * @param description {String} Can be used as body of help info popup
     * @param summary {String} Can be used as title in help info popup
     */
    constructor(description, summary) {

        GetConnectorsResponse.initialize(this, description, summary);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, summary) {
        obj['description'] = description;
        obj['summary'] = summary;
    }

    /**
     * Constructs a <code>GetConnectorsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetConnectorsResponse} obj Optional instance to populate.
     * @return {module:model/GetConnectorsResponse} The populated <code>GetConnectorsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetConnectorsResponse();

            if (data.hasOwnProperty('connectors')) {
                obj['connectors'] = ApiClient.convertToType(data['connectors'], [DataSource]);
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
 * @member {Array.<module:model/DataSource>} connectors
 */
GetConnectorsResponse.prototype['connectors'] = undefined;

/**
 * Can be used as body of help info popup
 * @member {String} description
 */
GetConnectorsResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
GetConnectorsResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
GetConnectorsResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
GetConnectorsResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
GetConnectorsResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
GetConnectorsResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
GetConnectorsResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
GetConnectorsResponse.prototype['card'] = undefined;






export default GetConnectorsResponse;

