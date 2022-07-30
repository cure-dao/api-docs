"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareInvitationBodyToJSON = exports.ShareInvitationBodyFromJSONTyped = exports.ShareInvitationBodyFromJSON = void 0;
var runtime_1 = require("../runtime");
function ShareInvitationBodyFromJSON(json) {
    return ShareInvitationBodyFromJSONTyped(json, false);
}
exports.ShareInvitationBodyFromJSON = ShareInvitationBodyFromJSON;
function ShareInvitationBodyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'emailAddress': json['emailAddress'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'emailSubject': !(0, runtime_1.exists)(json, 'emailSubject') ? undefined : json['emailSubject'],
        'emailBody': !(0, runtime_1.exists)(json, 'emailBody') ? undefined : json['emailBody'],
        'scopes': !(0, runtime_1.exists)(json, 'scopes') ? undefined : json['scopes'],
    };
}
exports.ShareInvitationBodyFromJSONTyped = ShareInvitationBodyFromJSONTyped;
function ShareInvitationBodyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'emailAddress': value.emailAddress,
        'name': value.name,
        'emailSubject': value.emailSubject,
        'emailBody': value.emailBody,
        'scopes': value.scopes,
    };
}
exports.ShareInvitationBodyToJSON = ShareInvitationBodyToJSON;
//# sourceMappingURL=ShareInvitationBody.js.map
