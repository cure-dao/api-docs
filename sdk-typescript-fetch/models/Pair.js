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
exports.PairToJSON = exports.PairFromJSONTyped = exports.PairFromJSON = void 0;
var runtime_1 = require("../runtime");
function PairFromJSON(json) {
    return PairFromJSONTyped(json, false);
}
exports.PairFromJSON = PairFromJSON;
function PairFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'causeMeasurement': json['causeMeasurement'],
        'causeMeasurementValue': json['causeMeasurementValue'],
        'causeVariableUnitAbbreviatedName': json['causeVariableUnitAbbreviatedName'],
        'effectMeasurement': json['effectMeasurement'],
        'effectMeasurementValue': json['effectMeasurementValue'],
        'effectVariableUnitAbbreviatedName': json['effectVariableUnitAbbreviatedName'],
        'eventAt': !(0, runtime_1.exists)(json, 'eventAt') ? undefined : json['eventAt'],
        'eventAtUnixTime': !(0, runtime_1.exists)(json, 'eventAtUnixTime') ? undefined : json['eventAtUnixTime'],
        'startTimeString': !(0, runtime_1.exists)(json, 'startTimeString') ? undefined : json['startTimeString'],
        'timestamp': json['timestamp'],
    };
}
exports.PairFromJSONTyped = PairFromJSONTyped;
function PairToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'causeMeasurement': value.causeMeasurement,
        'causeMeasurementValue': value.causeMeasurementValue,
        'causeVariableUnitAbbreviatedName': value.causeVariableUnitAbbreviatedName,
        'effectMeasurement': value.effectMeasurement,
        'effectMeasurementValue': value.effectMeasurementValue,
        'effectVariableUnitAbbreviatedName': value.effectVariableUnitAbbreviatedName,
        'eventAt': value.eventAt,
        'eventAtUnixTime': value.eventAtUnixTime,
        'startTimeString': value.startTimeString,
        'timestamp': value.timestamp,
    };
}
exports.PairToJSON = PairToJSON;
//# sourceMappingURL=Pair.js.map
