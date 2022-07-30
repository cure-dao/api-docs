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
exports.ButtonToJSON = exports.ButtonFromJSONTyped = exports.ButtonFromJSON = void 0;
var runtime_1 = require("../runtime");
function ButtonFromJSON(json) {
    return ButtonFromJSONTyped(json, false);
}
exports.ButtonFromJSON = ButtonFromJSON;
function ButtonFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessibilityText': !(0, runtime_1.exists)(json, 'accessibilityText') ? undefined : json['accessibilityText'],
        'action': !(0, runtime_1.exists)(json, 'action') ? undefined : json['action'],
        'additionalInformation': !(0, runtime_1.exists)(json, 'additionalInformation') ? undefined : json['additionalInformation'],
        'color': !(0, runtime_1.exists)(json, 'color') ? undefined : json['color'],
        'confirmationText': !(0, runtime_1.exists)(json, 'confirmationText') ? undefined : json['confirmationText'],
        'functionName': !(0, runtime_1.exists)(json, 'functionName') ? undefined : json['functionName'],
        'parameters': !(0, runtime_1.exists)(json, 'parameters') ? undefined : json['parameters'],
        'html': !(0, runtime_1.exists)(json, 'html') ? undefined : json['html'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : json['image'],
        'ionIcon': !(0, runtime_1.exists)(json, 'ionIcon') ? undefined : json['ionIcon'],
        'link': json['link'],
        'stateName': !(0, runtime_1.exists)(json, 'stateName') ? undefined : json['stateName'],
        'stateParams': !(0, runtime_1.exists)(json, 'stateParams') ? undefined : json['stateParams'],
        'successToastText': !(0, runtime_1.exists)(json, 'successToastText') ? undefined : json['successToastText'],
        'successAlertTitle': !(0, runtime_1.exists)(json, 'successAlertTitle') ? undefined : json['successAlertTitle'],
        'successAlertBody': !(0, runtime_1.exists)(json, 'successAlertBody') ? undefined : json['successAlertBody'],
        'text': json['text'],
        'tooltip': !(0, runtime_1.exists)(json, 'tooltip') ? undefined : json['tooltip'],
        'webhookUrl': !(0, runtime_1.exists)(json, 'webhookUrl') ? undefined : json['webhookUrl'],
    };
}
exports.ButtonFromJSONTyped = ButtonFromJSONTyped;
function ButtonToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessibilityText': value.accessibilityText,
        'action': value.action,
        'additionalInformation': value.additionalInformation,
        'color': value.color,
        'confirmationText': value.confirmationText,
        'functionName': value.functionName,
        'parameters': value.parameters,
        'html': value.html,
        'id': value.id,
        'image': value.image,
        'ionIcon': value.ionIcon,
        'link': value.link,
        'stateName': value.stateName,
        'stateParams': value.stateParams,
        'successToastText': value.successToastText,
        'successAlertTitle': value.successAlertTitle,
        'successAlertBody': value.successAlertBody,
        'text': value.text,
        'tooltip': value.tooltip,
        'webhookUrl': value.webhookUrl,
    };
}
exports.ButtonToJSON = ButtonToJSON;
//# sourceMappingURL=Button.js.map
