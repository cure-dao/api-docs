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
/**
 *
 * @export
 * @interface ConnectInstructions
 */
export interface ConnectInstructions {
    /**
     * Create a form with these fields and post the key and user submitted value to the provided connect url
     * @type {Array<object>}
     * @memberof ConnectInstructions
     */
    parameters?: Array<object>;
    /**
     * URL to open to connect
     * @type {string}
     * @memberof ConnectInstructions
     */
    url: string;
    /**
     * True if should open auth window in popup
     * @type {boolean}
     * @memberof ConnectInstructions
     */
    usePopup?: boolean;
}

export function ConnectInstructionsFromJSON(json: any): ConnectInstructions {
    return ConnectInstructionsFromJSONTyped(json, false);
}

export function ConnectInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectInstructions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
        'url': json['url'],
        'usePopup': !exists(json, 'usePopup') ? undefined : json['usePopup'],
    };
}

export function ConnectInstructionsToJSON(value?: ConnectInstructions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'parameters': value.parameters,
        'url': value.url,
        'usePopup': value.usePopup,
    };
}


