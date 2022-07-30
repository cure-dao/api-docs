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
exports.CommonResponseToJSON = exports.CommonResponseFromJSONTyped = exports.CommonResponseFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function CommonResponseFromJSON(json) {
    return CommonResponseFromJSONTyped(json, false);
}
exports.CommonResponseFromJSON = CommonResponseFromJSON;
function CommonResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'summary': json['summary'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(_1.ErrorResponseFromJSON)),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'success': !(0, runtime_1.exists)(json, 'success') ? undefined : json['success'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'link': !(0, runtime_1.exists)(json, 'link') ? undefined : json['link'],
        'card': !(0, runtime_1.exists)(json, 'card') ? undefined : (0, _1.CardFromJSON)(json['card']),
    };
}
exports.CommonResponseFromJSONTyped = CommonResponseFromJSONTyped;
function CommonResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'summary': value.summary,
        'errors': value.errors === undefined ? undefined : (value.errors.map(_1.ErrorResponseToJSON)),
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': (0, _1.CardToJSON)(value.card),
    };
}
exports.CommonResponseToJSON = CommonResponseToJSON;
//# sourceMappingURL=CommonResponse.js.map
