"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteToJSON = exports.VoteFromJSONTyped = exports.VoteFromJSON = exports.VoteTypeEnum = exports.VoteValueEnum = void 0;
var runtime_1 = require("../runtime");
/**
* @export
* @enum {string}
*/
var VoteValueEnum;
(function (VoteValueEnum) {
    VoteValueEnum["Up"] = "up";
    VoteValueEnum["Down"] = "down";
    VoteValueEnum["None"] = "none";
})(VoteValueEnum = exports.VoteValueEnum || (exports.VoteValueEnum = {})); /**
* @export
* @enum {string}
*/
var VoteTypeEnum;
(function (VoteTypeEnum) {
    VoteTypeEnum["Causality"] = "causality";
    VoteTypeEnum["Usefulness"] = "usefulness";
})(VoteTypeEnum = exports.VoteTypeEnum || (exports.VoteTypeEnum = {}));
function VoteFromJSON(json) {
    return VoteFromJSONTyped(json, false);
}
exports.VoteFromJSON = VoteFromJSON;
function VoteFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'causeVariableId': json['causeVariableId'],
        'clientId': json['clientId'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'effectVariableId': json['effectVariableId'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'userId': json['userId'],
        'value': json['value'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.VoteFromJSONTyped = VoteFromJSONTyped;
function VoteToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'causeVariableId': value.causeVariableId,
        'clientId': value.clientId,
        'createdAt': value.createdAt,
        'effectVariableId': value.effectVariableId,
        'id': value.id,
        'updatedAt': value.updatedAt,
        'userId': value.userId,
        'value': value.value,
        'type': value.type,
    };
}
exports.VoteToJSON = VoteToJSON;
//# sourceMappingURL=Vote.js.map