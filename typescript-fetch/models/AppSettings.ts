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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface AppSettings
 */
export interface AppSettings {
    /**
     * 
     * @type {object}
     * @memberof AppSettings
     */
    additionalSettings?: object;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    appDescription?: string;
    /**
     * 
     * @type {object}
     * @memberof AppSettings
     */
    appDesign?: object;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    appDisplayName?: string;
    /**
     * 
     * @type {object}
     * @memberof AppSettings
     */
    appStatus?: object;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    appType?: string;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    buildEnabled?: string;
    /**
     * Get yours at https:://builder.quantimo.do
     * @type {string}
     * @memberof AppSettings
     */
    clientId?: string;
    /**
     * Get yours at https:://builder.quantimo.do
     * @type {string}
     * @memberof AppSettings
     */
    clientSecret?: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof AppSettings
     */
    collaborators?: Array<User>;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    createdAt?: string;
    /**
     * User id of the owner of the application
     * @type {number}
     * @memberof AppSettings
     */
    userId?: number;
    /**
     * 
     * @type {Array<User>}
     * @memberof AppSettings
     */
    users?: Array<User>;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    redirectUri?: string;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    companyName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    homepageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    iconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    longDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    splashScreen?: string;
    /**
     * 
     * @type {string}
     * @memberof AppSettings
     */
    textLogo?: string;
}

export function AppSettingsFromJSON(json: any): AppSettings {
    return AppSettingsFromJSONTyped(json, false);
}

export function AppSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalSettings': !exists(json, 'additionalSettings') ? undefined : json['additionalSettings'],
        'appDescription': !exists(json, 'appDescription') ? undefined : json['appDescription'],
        'appDesign': !exists(json, 'appDesign') ? undefined : json['appDesign'],
        'appDisplayName': !exists(json, 'appDisplayName') ? undefined : json['appDisplayName'],
        'appStatus': !exists(json, 'appStatus') ? undefined : json['appStatus'],
        'appType': !exists(json, 'appType') ? undefined : json['appType'],
        'buildEnabled': !exists(json, 'buildEnabled') ? undefined : json['buildEnabled'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'clientSecret': !exists(json, 'clientSecret') ? undefined : json['clientSecret'],
        'collaborators': !exists(json, 'collaborators') ? undefined : ((json['collaborators'] as Array<any>).map(UserFromJSON)),
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(UserFromJSON)),
        'redirectUri': !exists(json, 'redirectUri') ? undefined : json['redirectUri'],
        'companyName': !exists(json, 'companyName') ? undefined : json['companyName'],
        'homepageUrl': !exists(json, 'homepageUrl') ? undefined : json['homepageUrl'],
        'iconUrl': !exists(json, 'iconUrl') ? undefined : json['iconUrl'],
        'longDescription': !exists(json, 'longDescription') ? undefined : json['longDescription'],
        'splashScreen': !exists(json, 'splashScreen') ? undefined : json['splashScreen'],
        'textLogo': !exists(json, 'textLogo') ? undefined : json['textLogo'],
    };
}

export function AppSettingsToJSON(value?: AppSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalSettings': value.additionalSettings,
        'appDescription': value.appDescription,
        'appDesign': value.appDesign,
        'appDisplayName': value.appDisplayName,
        'appStatus': value.appStatus,
        'appType': value.appType,
        'buildEnabled': value.buildEnabled,
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'collaborators': value.collaborators === undefined ? undefined : ((value.collaborators as Array<any>).map(UserToJSON)),
        'createdAt': value.createdAt,
        'userId': value.userId,
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(UserToJSON)),
        'redirectUri': value.redirectUri,
        'companyName': value.companyName,
        'homepageUrl': value.homepageUrl,
        'iconUrl': value.iconUrl,
        'longDescription': value.longDescription,
        'splashScreen': value.splashScreen,
        'textLogo': value.textLogo,
    };
}


