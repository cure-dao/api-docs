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
 * @interface ConversionStep
 */
export interface ConversionStep {
    /**
     * ADD or MULTIPLY
     * @type {string}
     * @memberof ConversionStep
     */
    operation: ConversionStepOperationEnum;
    /**
     * This specifies the order of conversion steps starting with 0
     * @type {number}
     * @memberof ConversionStep
     */
    value: number;
}

/**
* @export
* @enum {string}
*/
export enum ConversionStepOperationEnum {
    Add = 'ADD',
    Multiply = 'MULTIPLY'
}

export function ConversionStepFromJSON(json: any): ConversionStep {
    return ConversionStepFromJSONTyped(json, false);
}

export function ConversionStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversionStep {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'operation': json['operation'],
        'value': json['value'],
    };
}

export function ConversionStepToJSON(value?: ConversionStep | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'operation': value.operation,
        'value': value.value,
    };
}


