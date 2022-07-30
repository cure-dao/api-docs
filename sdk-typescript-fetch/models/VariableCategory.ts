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
 * @interface VariableCategory
 */
export interface VariableCategory {
    /**
     * Ex: mood
     * @type {string}
     * @memberof VariableCategory
     */
    appType?: string;
    /**
     * Ex: false
     * @type {boolean}
     * @memberof VariableCategory
     */
    causeOnly?: boolean;
    /**
     * Ex: MEAN
     * @type {string}
     * @memberof VariableCategory
     */
    combinationOperation?: string;
    /**
     * UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof VariableCategory
     */
    createdTime?: string;
    /**
     * Ex: /5
     * @type {string}
     * @memberof VariableCategory
     */
    unitAbbreviatedName?: string;
    /**
     * Ex: 10
     * @type {number}
     * @memberof VariableCategory
     */
    unitId?: number;
    /**
     * User-Defined Variable Setting: The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.  Unit: Seconds
     * @type {number}
     * @memberof VariableCategory
     */
    durationOfAction?: number;
    /**
     * Ex: -1. Unit: Variable category default unit.
     * @type {number}
     * @memberof VariableCategory
     */
    fillingValue?: number;
    /**
     * Ex: What emotion do you want to rate?
     * @type {string}
     * @memberof VariableCategory
     */
    helpText?: string;
    /**
     * Ex: 1
     * @type {number}
     * @memberof VariableCategory
     */
    id?: number;
    /**
     * Ex: https://static.quantimo.do/img/variable_categories/theatre_mask-96.png
     * @type {string}
     * @memberof VariableCategory
     */
    imageUrl?: string;
    /**
     * Ex: ion-happy-outline
     * @type {string}
     * @memberof VariableCategory
     */
    ionIcon?: string;
    /**
     * Ex: true
     * @type {boolean}
     * @memberof VariableCategory
     */
    manualTracking?: boolean;
    /**
     * Unit: Variable category default unit.
     * @type {string}
     * @memberof VariableCategory
     */
    maximumAllowedValue?: string;
    /**
     * Ex: rating
     * @type {string}
     * @memberof VariableCategory
     */
    measurementSynonymSingularLowercase?: string;
    /**
     * Unit: Variable category default unit.
     * @type {string}
     * @memberof VariableCategory
     */
    minimumAllowedValue?: string;
    /**
     * Ex: Do you have any emotions that fluctuate regularly?  If so, add them so I can try to determine which factors are influencing them.
     * @type {string}
     * @memberof VariableCategory
     */
    moreInfo?: string;
    /**
     * Category name
     * @type {string}
     * @memberof VariableCategory
     */
    name: string;
    /**
     * Ex: 0
     * @type {number}
     * @memberof VariableCategory
     */
    onsetDelay?: number;
    /**
     * Ex: true
     * @type {boolean}
     * @memberof VariableCategory
     */
    outcome?: boolean;
    /**
     * Ex: img/variable_categories/emotions.png
     * @type {string}
     * @memberof VariableCategory
     */
    pngPath?: string;
    /**
     * Ex: https://app.curedao.org/img/variable_categories/emotions.png
     * @type {string}
     * @memberof VariableCategory
     */
    pngUrl?: string;
    /**
     * Ex: true
     * @type {boolean}
     * @memberof VariableCategory
     */
    _public?: boolean;
    /**
     * Ex: img/variable_categories/emotions.svg
     * @type {string}
     * @memberof VariableCategory
     */
    svgPath?: string;
    /**
     * Ex: https://app.curedao.org/img/variable_categories/emotions.svg
     * @type {string}
     * @memberof VariableCategory
     */
    svgUrl?: string;
    /**
     * Ex: 1
     * @type {number}
     * @memberof VariableCategory
     */
    updated?: number;
    /**
     * UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof VariableCategory
     */
    updatedTime?: string;
    /**
     * Ex: Emotions, Treatments, Symptoms...
     * @type {string}
     * @memberof VariableCategory
     */
    variableCategoryName?: VariableCategoryVariableCategoryNameEnum;
    /**
     * Ex: Emotion
     * @type {string}
     * @memberof VariableCategory
     */
    variableCategoryNameSingular?: string;
}

/**
* @export
* @enum {string}
*/
export enum VariableCategoryVariableCategoryNameEnum {
    Activity = 'Activity',
    Books = 'Books',
    CausesOfIllness = 'Causes of Illness',
    CognitivePerformance = 'Cognitive Performance',
    Conditions = 'Conditions',
    Emotions = 'Emotions',
    Environment = 'Environment',
    Foods = 'Foods',
    Goals = 'Goals',
    Locations = 'Locations',
    Miscellaneous = 'Miscellaneous',
    MoviesAndTv = 'Movies and TV',
    Music = 'Music',
    Nutrients = 'Nutrients',
    Payments = 'Payments',
    PhysicalActivities = 'Physical Activities',
    Physique = 'Physique',
    Sleep = 'Sleep',
    SocialInteractions = 'Social Interactions',
    Software = 'Software',
    Symptoms = 'Symptoms',
    Treatments = 'Treatments',
    VitalSigns = 'Vital Signs'
}

export function VariableCategoryFromJSON(json: any): VariableCategory {
    return VariableCategoryFromJSONTyped(json, false);
}

export function VariableCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariableCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'appType': !exists(json, 'appType') ? undefined : json['appType'],
        'causeOnly': !exists(json, 'causeOnly') ? undefined : json['causeOnly'],
        'combinationOperation': !exists(json, 'combinationOperation') ? undefined : json['combinationOperation'],
        'createdTime': !exists(json, 'createdTime') ? undefined : json['createdTime'],
        'unitAbbreviatedName': !exists(json, 'unitAbbreviatedName') ? undefined : json['unitAbbreviatedName'],
        'unitId': !exists(json, 'unitId') ? undefined : json['unitId'],
        'durationOfAction': !exists(json, 'durationOfAction') ? undefined : json['durationOfAction'],
        'fillingValue': !exists(json, 'fillingValue') ? undefined : json['fillingValue'],
        'helpText': !exists(json, 'helpText') ? undefined : json['helpText'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'ionIcon': !exists(json, 'ionIcon') ? undefined : json['ionIcon'],
        'manualTracking': !exists(json, 'manualTracking') ? undefined : json['manualTracking'],
        'maximumAllowedValue': !exists(json, 'maximumAllowedValue') ? undefined : json['maximumAllowedValue'],
        'measurementSynonymSingularLowercase': !exists(json, 'measurementSynonymSingularLowercase') ? undefined : json['measurementSynonymSingularLowercase'],
        'minimumAllowedValue': !exists(json, 'minimumAllowedValue') ? undefined : json['minimumAllowedValue'],
        'moreInfo': !exists(json, 'moreInfo') ? undefined : json['moreInfo'],
        'name': json['name'],
        'onsetDelay': !exists(json, 'onsetDelay') ? undefined : json['onsetDelay'],
        'outcome': !exists(json, 'outcome') ? undefined : json['outcome'],
        'pngPath': !exists(json, 'pngPath') ? undefined : json['pngPath'],
        'pngUrl': !exists(json, 'pngUrl') ? undefined : json['pngUrl'],
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'svgPath': !exists(json, 'svgPath') ? undefined : json['svgPath'],
        'svgUrl': !exists(json, 'svgUrl') ? undefined : json['svgUrl'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'updatedTime': !exists(json, 'updatedTime') ? undefined : json['updatedTime'],
        'variableCategoryName': !exists(json, 'variableCategoryName') ? undefined : json['variableCategoryName'],
        'variableCategoryNameSingular': !exists(json, 'variableCategoryNameSingular') ? undefined : json['variableCategoryNameSingular'],
    };
}

export function VariableCategoryToJSON(value?: VariableCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'appType': value.appType,
        'causeOnly': value.causeOnly,
        'combinationOperation': value.combinationOperation,
        'createdTime': value.createdTime,
        'unitAbbreviatedName': value.unitAbbreviatedName,
        'unitId': value.unitId,
        'durationOfAction': value.durationOfAction,
        'fillingValue': value.fillingValue,
        'helpText': value.helpText,
        'id': value.id,
        'imageUrl': value.imageUrl,
        'ionIcon': value.ionIcon,
        'manualTracking': value.manualTracking,
        'maximumAllowedValue': value.maximumAllowedValue,
        'measurementSynonymSingularLowercase': value.measurementSynonymSingularLowercase,
        'minimumAllowedValue': value.minimumAllowedValue,
        'moreInfo': value.moreInfo,
        'name': value.name,
        'onsetDelay': value.onsetDelay,
        'outcome': value.outcome,
        'pngPath': value.pngPath,
        'pngUrl': value.pngUrl,
        'public': value._public,
        'svgPath': value.svgPath,
        'svgUrl': value.svgUrl,
        'updated': value.updated,
        'updatedTime': value.updatedTime,
        'variableCategoryName': value.variableCategoryName,
        'variableCategoryNameSingular': value.variableCategoryNameSingular,
    };
}


