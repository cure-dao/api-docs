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
exports.CorrelationToJSON = exports.CorrelationFromJSONTyped = exports.CorrelationFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function CorrelationFromJSON(json) {
    return CorrelationFromJSONTyped(json, false);
}
exports.CorrelationFromJSON = CorrelationFromJSON;
function CorrelationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'averageDailyHighCause': !(0, runtime_1.exists)(json, 'averageDailyHighCause') ? undefined : json['averageDailyHighCause'],
        'averageDailyLowCause': !(0, runtime_1.exists)(json, 'averageDailyLowCause') ? undefined : json['averageDailyLowCause'],
        'averageEffect': !(0, runtime_1.exists)(json, 'averageEffect') ? undefined : json['averageEffect'],
        'averageEffectFollowingHighCause': !(0, runtime_1.exists)(json, 'averageEffectFollowingHighCause') ? undefined : json['averageEffectFollowingHighCause'],
        'averageEffectFollowingLowCause': !(0, runtime_1.exists)(json, 'averageEffectFollowingLowCause') ? undefined : json['averageEffectFollowingLowCause'],
        'averageForwardPearsonCorrelationOverOnsetDelays': !(0, runtime_1.exists)(json, 'averageForwardPearsonCorrelationOverOnsetDelays') ? undefined : json['averageForwardPearsonCorrelationOverOnsetDelays'],
        'averageReversePearsonCorrelationOverOnsetDelays': !(0, runtime_1.exists)(json, 'averageReversePearsonCorrelationOverOnsetDelays') ? undefined : json['averageReversePearsonCorrelationOverOnsetDelays'],
        'averageVote': !(0, runtime_1.exists)(json, 'averageVote') ? undefined : json['averageVote'],
        'causeChanges': !(0, runtime_1.exists)(json, 'causeChanges') ? undefined : json['causeChanges'],
        'causeDataSource': !(0, runtime_1.exists)(json, 'causeDataSource') ? undefined : (0, _1.DataSourceFromJSON)(json['causeDataSource']),
        'causeUserVariableShareUserMeasurements': !(0, runtime_1.exists)(json, 'causeUserVariableShareUserMeasurements') ? undefined : json['causeUserVariableShareUserMeasurements'],
        'causeVariableCategoryId': !(0, runtime_1.exists)(json, 'causeVariableCategoryId') ? undefined : json['causeVariableCategoryId'],
        'causeVariableCategoryName': !(0, runtime_1.exists)(json, 'causeVariableCategoryName') ? undefined : json['causeVariableCategoryName'],
        'causeVariableCombinationOperation': !(0, runtime_1.exists)(json, 'causeVariableCombinationOperation') ? undefined : json['causeVariableCombinationOperation'],
        'causeVariableUnitAbbreviatedName': !(0, runtime_1.exists)(json, 'causeVariableUnitAbbreviatedName') ? undefined : json['causeVariableUnitAbbreviatedName'],
        'causeVariableId': !(0, runtime_1.exists)(json, 'causeVariableId') ? undefined : json['causeVariableId'],
        'causeVariableMostCommonConnectorId': !(0, runtime_1.exists)(json, 'causeVariableMostCommonConnectorId') ? undefined : json['causeVariableMostCommonConnectorId'],
        'causeVariableName': json['causeVariableName'],
        'confidenceInterval': !(0, runtime_1.exists)(json, 'confidenceInterval') ? undefined : json['confidenceInterval'],
        'confidenceLevel': !(0, runtime_1.exists)(json, 'confidenceLevel') ? undefined : json['confidenceLevel'],
        'correlationCoefficient': !(0, runtime_1.exists)(json, 'correlationCoefficient') ? undefined : json['correlationCoefficient'],
        'correlationIsContradictoryToOptimalValues': !(0, runtime_1.exists)(json, 'correlationIsContradictoryToOptimalValues') ? undefined : json['correlationIsContradictoryToOptimalValues'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'criticalTValue': !(0, runtime_1.exists)(json, 'criticalTValue') ? undefined : json['criticalTValue'],
        'direction': !(0, runtime_1.exists)(json, 'direction') ? undefined : json['direction'],
        'durationOfAction': !(0, runtime_1.exists)(json, 'durationOfAction') ? undefined : json['durationOfAction'],
        'durationOfActionInHours': !(0, runtime_1.exists)(json, 'durationOfActionInHours') ? undefined : json['durationOfActionInHours'],
        'degreesOfFreedom': !(0, runtime_1.exists)(json, 'degreesOfFreedom') ? undefined : json['degreesOfFreedom'],
        'effectNumberOfProcessedDailyMeasurements': !(0, runtime_1.exists)(json, 'effectNumberOfProcessedDailyMeasurements') ? undefined : json['effectNumberOfProcessedDailyMeasurements'],
        'error': !(0, runtime_1.exists)(json, 'error') ? undefined : json['error'],
        'effectChanges': !(0, runtime_1.exists)(json, 'effectChanges') ? undefined : json['effectChanges'],
        'effectDataSource': !(0, runtime_1.exists)(json, 'effectDataSource') ? undefined : (0, _1.DataSourceFromJSON)(json['effectDataSource']),
        'effectSize': !(0, runtime_1.exists)(json, 'effectSize') ? undefined : json['effectSize'],
        'effectUnit': !(0, runtime_1.exists)(json, 'effectUnit') ? undefined : json['effectUnit'],
        'effectUserVariableShareUserMeasurements': !(0, runtime_1.exists)(json, 'effectUserVariableShareUserMeasurements') ? undefined : json['effectUserVariableShareUserMeasurements'],
        'effectVariableCategoryId': !(0, runtime_1.exists)(json, 'effectVariableCategoryId') ? undefined : json['effectVariableCategoryId'],
        'effectVariableCategoryName': !(0, runtime_1.exists)(json, 'effectVariableCategoryName') ? undefined : json['effectVariableCategoryName'],
        'effectVariableCombinationOperation': !(0, runtime_1.exists)(json, 'effectVariableCombinationOperation') ? undefined : json['effectVariableCombinationOperation'],
        'effectVariableCommonAlias': !(0, runtime_1.exists)(json, 'effectVariableCommonAlias') ? undefined : json['effectVariableCommonAlias'],
        'effectVariableUnitAbbreviatedName': !(0, runtime_1.exists)(json, 'effectVariableUnitAbbreviatedName') ? undefined : json['effectVariableUnitAbbreviatedName'],
        'effectVariableUnitId': !(0, runtime_1.exists)(json, 'effectVariableUnitId') ? undefined : json['effectVariableUnitId'],
        'effectVariableUnitName': !(0, runtime_1.exists)(json, 'effectVariableUnitName') ? undefined : json['effectVariableUnitName'],
        'effectVariableId': !(0, runtime_1.exists)(json, 'effectVariableId') ? undefined : json['effectVariableId'],
        'effectVariableMostCommonConnectorId': !(0, runtime_1.exists)(json, 'effectVariableMostCommonConnectorId') ? undefined : json['effectVariableMostCommonConnectorId'],
        'effectVariableName': json['effectVariableName'],
        'experimentEndTime': !(0, runtime_1.exists)(json, 'experimentEndTime') ? undefined : json['experimentEndTime'],
        'experimentStartTime': !(0, runtime_1.exists)(json, 'experimentStartTime') ? undefined : json['experimentStartTime'],
        'forwardSpearmanCorrelationCoefficient': !(0, runtime_1.exists)(json, 'forwardSpearmanCorrelationCoefficient') ? undefined : json['forwardSpearmanCorrelationCoefficient'],
        'numberOfPairs': !(0, runtime_1.exists)(json, 'numberOfPairs') ? undefined : json['numberOfPairs'],
        'onsetDelay': !(0, runtime_1.exists)(json, 'onsetDelay') ? undefined : json['onsetDelay'],
        'onsetDelayInHours': !(0, runtime_1.exists)(json, 'onsetDelayInHours') ? undefined : json['onsetDelayInHours'],
        'onsetDelayWithStrongestPearsonCorrelation': !(0, runtime_1.exists)(json, 'onsetDelayWithStrongestPearsonCorrelation') ? undefined : json['onsetDelayWithStrongestPearsonCorrelation'],
        'onsetDelayWithStrongestPearsonCorrelationInHours': !(0, runtime_1.exists)(json, 'onsetDelayWithStrongestPearsonCorrelationInHours') ? undefined : json['onsetDelayWithStrongestPearsonCorrelationInHours'],
        'optimalPearsonProduct': !(0, runtime_1.exists)(json, 'optimalPearsonProduct') ? undefined : json['optimalPearsonProduct'],
        'outcomeFillingValue': !(0, runtime_1.exists)(json, 'outcomeFillingValue') ? undefined : json['outcomeFillingValue'],
        'outcomeMaximumAllowedValue': !(0, runtime_1.exists)(json, 'outcomeMaximumAllowedValue') ? undefined : json['outcomeMaximumAllowedValue'],
        'outcomeMinimumAllowedValue': !(0, runtime_1.exists)(json, 'outcomeMinimumAllowedValue') ? undefined : json['outcomeMinimumAllowedValue'],
        'pearsonCorrelationWithNoOnsetDelay': !(0, runtime_1.exists)(json, 'pearsonCorrelationWithNoOnsetDelay') ? undefined : json['pearsonCorrelationWithNoOnsetDelay'],
        'predictivePearsonCorrelation': !(0, runtime_1.exists)(json, 'predictivePearsonCorrelation') ? undefined : json['predictivePearsonCorrelation'],
        'predictivePearsonCorrelationCoefficient': !(0, runtime_1.exists)(json, 'predictivePearsonCorrelationCoefficient') ? undefined : json['predictivePearsonCorrelationCoefficient'],
        'predictorDataSources': !(0, runtime_1.exists)(json, 'predictorDataSources') ? undefined : json['predictorDataSources'],
        'predictorFillingValue': !(0, runtime_1.exists)(json, 'predictorFillingValue') ? undefined : json['predictorFillingValue'],
        'predictorMaximumAllowedValue': !(0, runtime_1.exists)(json, 'predictorMaximumAllowedValue') ? undefined : json['predictorMaximumAllowedValue'],
        'predictorMinimumAllowedValue': !(0, runtime_1.exists)(json, 'predictorMinimumAllowedValue') ? undefined : json['predictorMinimumAllowedValue'],
        'predictsHighEffectChange': !(0, runtime_1.exists)(json, 'predictsHighEffectChange') ? undefined : json['predictsHighEffectChange'],
        'predictsLowEffectChange': !(0, runtime_1.exists)(json, 'predictsLowEffectChange') ? undefined : json['predictsLowEffectChange'],
        'pValue': !(0, runtime_1.exists)(json, 'pValue') ? undefined : json['pValue'],
        'qmScore': !(0, runtime_1.exists)(json, 'qmScore') ? undefined : json['qmScore'],
        'reversePearsonCorrelationCoefficient': !(0, runtime_1.exists)(json, 'reversePearsonCorrelationCoefficient') ? undefined : json['reversePearsonCorrelationCoefficient'],
        'shareUserMeasurements': !(0, runtime_1.exists)(json, 'shareUserMeasurements') ? undefined : json['shareUserMeasurements'],
        'sharingDescription': !(0, runtime_1.exists)(json, 'sharingDescription') ? undefined : json['sharingDescription'],
        'sharingTitle': !(0, runtime_1.exists)(json, 'sharingTitle') ? undefined : json['sharingTitle'],
        'significantDifference': !(0, runtime_1.exists)(json, 'significantDifference') ? undefined : json['significantDifference'],
        'statisticalSignificance': !(0, runtime_1.exists)(json, 'statisticalSignificance') ? undefined : json['statisticalSignificance'],
        'strengthLevel': !(0, runtime_1.exists)(json, 'strengthLevel') ? undefined : json['strengthLevel'],
        'strongestPearsonCorrelationCoefficient': !(0, runtime_1.exists)(json, 'strongestPearsonCorrelationCoefficient') ? undefined : json['strongestPearsonCorrelationCoefficient'],
        'studyHtml': !(0, runtime_1.exists)(json, 'studyHtml') ? undefined : (0, _1.StudyHtmlFromJSON)(json['studyHtml']),
        'studyImages': !(0, runtime_1.exists)(json, 'studyImages') ? undefined : (0, _1.StudyImagesFromJSON)(json['studyImages']),
        'studyLinks': !(0, runtime_1.exists)(json, 'studyLinks') ? undefined : (0, _1.StudyLinksFromJSON)(json['studyLinks']),
        'studyText': !(0, runtime_1.exists)(json, 'studyText') ? undefined : (0, _1.StudyTextFromJSON)(json['studyText']),
        'tValue': !(0, runtime_1.exists)(json, 'tValue') ? undefined : json['tValue'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'userId': !(0, runtime_1.exists)(json, 'userId') ? undefined : json['userId'],
        'userVote': !(0, runtime_1.exists)(json, 'userVote') ? undefined : json['userVote'],
        'valuePredictingHighOutcome': !(0, runtime_1.exists)(json, 'valuePredictingHighOutcome') ? undefined : json['valuePredictingHighOutcome'],
        'valuePredictingLowOutcome': !(0, runtime_1.exists)(json, 'valuePredictingLowOutcome') ? undefined : json['valuePredictingLowOutcome'],
        'outcomeDataSources': !(0, runtime_1.exists)(json, 'outcomeDataSources') ? undefined : json['outcomeDataSources'],
        'principalInvestigator': !(0, runtime_1.exists)(json, 'principalInvestigator') ? undefined : json['principalInvestigator'],
        'reverseCorrelation': !(0, runtime_1.exists)(json, 'reverseCorrelation') ? undefined : json['reverseCorrelation'],
        'averagePearsonCorrelationCoefficientOverOnsetDelays': !(0, runtime_1.exists)(json, 'averagePearsonCorrelationCoefficientOverOnsetDelays') ? undefined : json['averagePearsonCorrelationCoefficientOverOnsetDelays'],
        'causeNumberOfRawMeasurements': !(0, runtime_1.exists)(json, 'causeNumberOfRawMeasurements') ? undefined : json['causeNumberOfRawMeasurements'],
        'correlationsOverDurationsOfAction': !(0, runtime_1.exists)(json, 'correlationsOverDurationsOfAction') ? undefined : (json['correlationsOverDurationsOfAction'].map(CorrelationFromJSON)),
        'correlationsOverOnsetDelays': !(0, runtime_1.exists)(json, 'correlationsOverOnsetDelays') ? undefined : (json['correlationsOverOnsetDelays'].map(CorrelationFromJSON)),
        'correlationsOverDurationsOfActionChartConfig': !(0, runtime_1.exists)(json, 'correlationsOverDurationsOfActionChartConfig') ? undefined : json['correlationsOverDurationsOfActionChartConfig'],
        'correlationsOverOnsetDelaysChartConfig': !(0, runtime_1.exists)(json, 'correlationsOverOnsetDelaysChartConfig') ? undefined : json['correlationsOverOnsetDelaysChartConfig'],
        'numberOfUsers': !(0, runtime_1.exists)(json, 'numberOfUsers') ? undefined : json['numberOfUsers'],
        'rawCauseMeasurementSignificance': !(0, runtime_1.exists)(json, 'rawCauseMeasurementSignificance') ? undefined : json['rawCauseMeasurementSignificance'],
        'rawEffectMeasurementSignificance': !(0, runtime_1.exists)(json, 'rawEffectMeasurementSignificance') ? undefined : json['rawEffectMeasurementSignificance'],
        'reversePairsCount': !(0, runtime_1.exists)(json, 'reversePairsCount') ? undefined : json['reversePairsCount'],
        'voteStatisticalSignificance': !(0, runtime_1.exists)(json, 'voteStatisticalSignificance') ? undefined : json['voteStatisticalSignificance'],
        'aggregateQMScore': !(0, runtime_1.exists)(json, 'aggregateQMScore') ? undefined : json['aggregateQMScore'],
        'forwardPearsonCorrelationCoefficient': !(0, runtime_1.exists)(json, 'forwardPearsonCorrelationCoefficient') ? undefined : json['forwardPearsonCorrelationCoefficient'],
        'numberOfCorrelations': !(0, runtime_1.exists)(json, 'numberOfCorrelations') ? undefined : json['numberOfCorrelations'],
        'vote': !(0, runtime_1.exists)(json, 'vote') ? undefined : json['vote'],
    };
}
exports.CorrelationFromJSONTyped = CorrelationFromJSONTyped;
function CorrelationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'averageDailyHighCause': value.averageDailyHighCause,
        'averageDailyLowCause': value.averageDailyLowCause,
        'averageEffect': value.averageEffect,
        'averageEffectFollowingHighCause': value.averageEffectFollowingHighCause,
        'averageEffectFollowingLowCause': value.averageEffectFollowingLowCause,
        'averageForwardPearsonCorrelationOverOnsetDelays': value.averageForwardPearsonCorrelationOverOnsetDelays,
        'averageReversePearsonCorrelationOverOnsetDelays': value.averageReversePearsonCorrelationOverOnsetDelays,
        'averageVote': value.averageVote,
        'causeChanges': value.causeChanges,
        'causeDataSource': (0, _1.DataSourceToJSON)(value.causeDataSource),
        'causeUserVariableShareUserMeasurements': value.causeUserVariableShareUserMeasurements,
        'causeVariableCategoryId': value.causeVariableCategoryId,
        'causeVariableCategoryName': value.causeVariableCategoryName,
        'causeVariableCombinationOperation': value.causeVariableCombinationOperation,
        'causeVariableUnitAbbreviatedName': value.causeVariableUnitAbbreviatedName,
        'causeVariableId': value.causeVariableId,
        'causeVariableMostCommonConnectorId': value.causeVariableMostCommonConnectorId,
        'causeVariableName': value.causeVariableName,
        'confidenceInterval': value.confidenceInterval,
        'confidenceLevel': value.confidenceLevel,
        'correlationCoefficient': value.correlationCoefficient,
        'correlationIsContradictoryToOptimalValues': value.correlationIsContradictoryToOptimalValues,
        'createdAt': value.createdAt,
        'criticalTValue': value.criticalTValue,
        'direction': value.direction,
        'durationOfAction': value.durationOfAction,
        'durationOfActionInHours': value.durationOfActionInHours,
        'degreesOfFreedom': value.degreesOfFreedom,
        'effectNumberOfProcessedDailyMeasurements': value.effectNumberOfProcessedDailyMeasurements,
        'error': value.error,
        'effectChanges': value.effectChanges,
        'effectDataSource': (0, _1.DataSourceToJSON)(value.effectDataSource),
        'effectSize': value.effectSize,
        'effectUnit': value.effectUnit,
        'effectUserVariableShareUserMeasurements': value.effectUserVariableShareUserMeasurements,
        'effectVariableCategoryId': value.effectVariableCategoryId,
        'effectVariableCategoryName': value.effectVariableCategoryName,
        'effectVariableCombinationOperation': value.effectVariableCombinationOperation,
        'effectVariableCommonAlias': value.effectVariableCommonAlias,
        'effectVariableUnitAbbreviatedName': value.effectVariableUnitAbbreviatedName,
        'effectVariableUnitId': value.effectVariableUnitId,
        'effectVariableUnitName': value.effectVariableUnitName,
        'effectVariableId': value.effectVariableId,
        'effectVariableMostCommonConnectorId': value.effectVariableMostCommonConnectorId,
        'effectVariableName': value.effectVariableName,
        'experimentEndTime': value.experimentEndTime,
        'experimentStartTime': value.experimentStartTime,
        'forwardSpearmanCorrelationCoefficient': value.forwardSpearmanCorrelationCoefficient,
        'numberOfPairs': value.numberOfPairs,
        'onsetDelay': value.onsetDelay,
        'onsetDelayInHours': value.onsetDelayInHours,
        'onsetDelayWithStrongestPearsonCorrelation': value.onsetDelayWithStrongestPearsonCorrelation,
        'onsetDelayWithStrongestPearsonCorrelationInHours': value.onsetDelayWithStrongestPearsonCorrelationInHours,
        'optimalPearsonProduct': value.optimalPearsonProduct,
        'outcomeFillingValue': value.outcomeFillingValue,
        'outcomeMaximumAllowedValue': value.outcomeMaximumAllowedValue,
        'outcomeMinimumAllowedValue': value.outcomeMinimumAllowedValue,
        'pearsonCorrelationWithNoOnsetDelay': value.pearsonCorrelationWithNoOnsetDelay,
        'predictivePearsonCorrelation': value.predictivePearsonCorrelation,
        'predictivePearsonCorrelationCoefficient': value.predictivePearsonCorrelationCoefficient,
        'predictorDataSources': value.predictorDataSources,
        'predictorFillingValue': value.predictorFillingValue,
        'predictorMaximumAllowedValue': value.predictorMaximumAllowedValue,
        'predictorMinimumAllowedValue': value.predictorMinimumAllowedValue,
        'predictsHighEffectChange': value.predictsHighEffectChange,
        'predictsLowEffectChange': value.predictsLowEffectChange,
        'pValue': value.pValue,
        'qmScore': value.qmScore,
        'reversePearsonCorrelationCoefficient': value.reversePearsonCorrelationCoefficient,
        'shareUserMeasurements': value.shareUserMeasurements,
        'sharingDescription': value.sharingDescription,
        'sharingTitle': value.sharingTitle,
        'significantDifference': value.significantDifference,
        'statisticalSignificance': value.statisticalSignificance,
        'strengthLevel': value.strengthLevel,
        'strongestPearsonCorrelationCoefficient': value.strongestPearsonCorrelationCoefficient,
        'studyHtml': (0, _1.StudyHtmlToJSON)(value.studyHtml),
        'studyImages': (0, _1.StudyImagesToJSON)(value.studyImages),
        'studyLinks': (0, _1.StudyLinksToJSON)(value.studyLinks),
        'studyText': (0, _1.StudyTextToJSON)(value.studyText),
        'tValue': value.tValue,
        'updatedAt': value.updatedAt,
        'userId': value.userId,
        'userVote': value.userVote,
        'valuePredictingHighOutcome': value.valuePredictingHighOutcome,
        'valuePredictingLowOutcome': value.valuePredictingLowOutcome,
        'outcomeDataSources': value.outcomeDataSources,
        'principalInvestigator': value.principalInvestigator,
        'reverseCorrelation': value.reverseCorrelation,
        'averagePearsonCorrelationCoefficientOverOnsetDelays': value.averagePearsonCorrelationCoefficientOverOnsetDelays,
        'causeNumberOfRawMeasurements': value.causeNumberOfRawMeasurements,
        'correlationsOverDurationsOfAction': value.correlationsOverDurationsOfAction === undefined ? undefined : (value.correlationsOverDurationsOfAction.map(CorrelationToJSON)),
        'correlationsOverOnsetDelays': value.correlationsOverOnsetDelays === undefined ? undefined : (value.correlationsOverOnsetDelays.map(CorrelationToJSON)),
        'correlationsOverDurationsOfActionChartConfig': value.correlationsOverDurationsOfActionChartConfig,
        'correlationsOverOnsetDelaysChartConfig': value.correlationsOverOnsetDelaysChartConfig,
        'numberOfUsers': value.numberOfUsers,
        'rawCauseMeasurementSignificance': value.rawCauseMeasurementSignificance,
        'rawEffectMeasurementSignificance': value.rawEffectMeasurementSignificance,
        'reversePairsCount': value.reversePairsCount,
        'voteStatisticalSignificance': value.voteStatisticalSignificance,
        'aggregateQMScore': value.aggregateQMScore,
        'forwardPearsonCorrelationCoefficient': value.forwardPearsonCorrelationCoefficient,
        'numberOfCorrelations': value.numberOfCorrelations,
        'vote': value.vote,
    };
}
exports.CorrelationToJSON = CorrelationToJSON;
//# sourceMappingURL=Correlation.js.map