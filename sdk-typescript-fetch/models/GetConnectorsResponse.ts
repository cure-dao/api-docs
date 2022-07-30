/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
import {
    Card,
    CardFromJSON,
    CardFromJSONTyped,
    CardToJSON,
    DataSource,
    DataSourceFromJSON,
    DataSourceFromJSONTyped,
    DataSourceToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseFromJSONTyped,
    ErrorResponseToJSON,
} from './';

/**
 *
 * @export
 * @interface GetConnectorsResponse
 */
export interface GetConnectorsResponse {
    /**
     *
     * @type {Array<DataSource>}
     * @memberof GetConnectorsResponse
     */
    connectors?: Array<DataSource>;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof GetConnectorsResponse
     */
    description: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof GetConnectorsResponse
     */
    summary: string;
    /**
     * Array of error objects with message property
     * @type {Array<ErrorResponse>}
     * @memberof GetConnectorsResponse
     */
    errors?: Array<ErrorResponse>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof GetConnectorsResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof GetConnectorsResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof GetConnectorsResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof GetConnectorsResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof GetConnectorsResponse
     */
    card?: Card;
}

export function GetConnectorsResponseFromJSON(json: any): GetConnectorsResponse {
    return GetConnectorsResponseFromJSONTyped(json, false);
}

export function GetConnectorsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetConnectorsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'connectors': !exists(json, 'connectors') ? undefined : ((json['connectors'] as Array<any>).map(DataSourceFromJSON)),
        'description': json['description'],
        'summary': json['summary'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorResponseFromJSON)),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
    };
}

export function GetConnectorsResponseToJSON(value?: GetConnectorsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'connectors': value.connectors === undefined ? undefined : ((value.connectors as Array<any>).map(DataSourceToJSON)),
        'description': value.description,
        'summary': value.summary,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorResponseToJSON)),
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': CardToJSON(value.card),
    };
}


