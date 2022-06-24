/* tslint:disable */
/* eslint-disable */
/**
 * CureDAO Unified Health API
 * A platform for participant-centered research and personal data exploration
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
    ExplanationStartTracking,
    ExplanationStartTrackingFromJSON,
    ExplanationStartTrackingFromJSONTyped,
    ExplanationStartTrackingToJSON,
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
    Study,
    StudyFromJSON,
    StudyFromJSONTyped,
    StudyToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetStudiesResponse
 */
export interface GetStudiesResponse {
    /**
     * 
     * @type {Array<Study>}
     * @memberof GetStudiesResponse
     */
    studies?: Array<Study>;
    /**
     * Ex: These factors are most predictive of Overall Mood based on your own data.
     * @type {string}
     * @memberof GetStudiesResponse
     */
    description: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof GetStudiesResponse
     */
    summary: string;
    /**
     * 
     * @type {Image}
     * @memberof GetStudiesResponse
     */
    image?: Image;
    /**
     * Square icon png url
     * @type {string}
     * @memberof GetStudiesResponse
     */
    avatar?: string;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof GetStudiesResponse
     */
    ionIcon?: string;
    /**
     * 
     * @type {ExplanationStartTracking}
     * @memberof GetStudiesResponse
     */
    startTracking?: ExplanationStartTracking;
    /**
     * Ex: Top Predictors of Overall Mood
     * @type {string}
     * @memberof GetStudiesResponse
     */
    title?: string;
    /**
     * Embeddable list of study summaries with explanation at the top
     * @type {string}
     * @memberof GetStudiesResponse
     */
    html?: string;
}

export function GetStudiesResponseFromJSON(json: any): GetStudiesResponse {
    return GetStudiesResponseFromJSONTyped(json, false);
}

export function GetStudiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStudiesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'studies': !exists(json, 'studies') ? undefined : ((json['studies'] as Array<any>).map(StudyFromJSON)),
        'description': json['description'],
        'summary': json['summary'],
        'image': !exists(json, 'image') ? undefined : ImageFromJSON(json['image']),
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'ionIcon': !exists(json, 'ionIcon') ? undefined : json['ionIcon'],
        'startTracking': !exists(json, 'startTracking') ? undefined : ExplanationStartTrackingFromJSON(json['startTracking']),
        'title': !exists(json, 'title') ? undefined : json['title'],
        'html': !exists(json, 'html') ? undefined : json['html'],
    };
}

export function GetStudiesResponseToJSON(value?: GetStudiesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'studies': value.studies === undefined ? undefined : ((value.studies as Array<any>).map(StudyToJSON)),
        'description': value.description,
        'summary': value.summary,
        'image': ImageToJSON(value.image),
        'avatar': value.avatar,
        'ionIcon': value.ionIcon,
        'startTracking': ExplanationStartTrackingToJSON(value.startTracking),
        'title': value.title,
        'html': value.html,
    };
}


