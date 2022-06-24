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
    DataSource,
    DataSourceFromJSON,
    DataSourceFromJSONTyped,
    DataSourceToJSON,
    StudyHtml,
    StudyHtmlFromJSON,
    StudyHtmlFromJSONTyped,
    StudyHtmlToJSON,
    StudyImages,
    StudyImagesFromJSON,
    StudyImagesFromJSONTyped,
    StudyImagesToJSON,
    StudyLinks,
    StudyLinksFromJSON,
    StudyLinksFromJSONTyped,
    StudyLinksToJSON,
    StudyText,
    StudyTextFromJSON,
    StudyTextFromJSONTyped,
    StudyTextToJSON,
} from './';

/**
 * 
 * @export
 * @interface Correlation
 */
export interface Correlation {
    /**
     * Ex: 4.19
     * @type {number}
     * @memberof Correlation
     */
    averageDailyHighCause?: number;
    /**
     * Ex: 1.97
     * @type {number}
     * @memberof Correlation
     */
    averageDailyLowCause?: number;
    /**
     * Ex: 3.0791054117396
     * @type {number}
     * @memberof Correlation
     */
    averageEffect?: number;
    /**
     * Ex: 3.55
     * @type {number}
     * @memberof Correlation
     */
    averageEffectFollowingHighCause?: number;
    /**
     * Ex: 2.65
     * @type {number}
     * @memberof Correlation
     */
    averageEffectFollowingLowCause?: number;
    /**
     * Ex: 0.396
     * @type {number}
     * @memberof Correlation
     */
    averageForwardPearsonCorrelationOverOnsetDelays?: number;
    /**
     * Ex: 0.453667
     * @type {number}
     * @memberof Correlation
     */
    averageReversePearsonCorrelationOverOnsetDelays?: number;
    /**
     * Ex: 0.9855
     * @type {number}
     * @memberof Correlation
     */
    averageVote?: number;
    /**
     * Ex: 164
     * @type {number}
     * @memberof Correlation
     */
    causeChanges?: number;
    /**
     * 
     * @type {DataSource}
     * @memberof Correlation
     */
    causeDataSource?: DataSource;
    /**
     * Ex: 1
     * @type {number}
     * @memberof Correlation
     */
    causeUserVariableShareUserMeasurements?: number;
    /**
     * Ex: 6
     * @type {number}
     * @memberof Correlation
     */
    causeVariableCategoryId?: number;
    /**
     * Ex: Sleep
     * @type {string}
     * @memberof Correlation
     */
    causeVariableCategoryName?: string;
    /**
     * Ex: MEAN
     * @type {string}
     * @memberof Correlation
     */
    causeVariableCombinationOperation?: string;
    /**
     * Ex: /5
     * @type {string}
     * @memberof Correlation
     */
    causeVariableUnitAbbreviatedName?: string;
    /**
     * Ex: 1448
     * @type {number}
     * @memberof Correlation
     */
    causeVariableId?: number;
    /**
     * Ex: 6
     * @type {number}
     * @memberof Correlation
     */
    causeVariableMostCommonConnectorId?: number;
    /**
     * Ex: Sleep Quality
     * @type {string}
     * @memberof Correlation
     */
    causeVariableName: string;
    /**
     * Ex: 0.14344467795996
     * @type {number}
     * @memberof Correlation
     */
    confidenceInterval?: number;
    /**
     * Ex: high
     * @type {string}
     * @memberof Correlation
     */
    confidenceLevel?: string;
    /**
     * Ex: 0.538
     * @type {number}
     * @memberof Correlation
     */
    correlationCoefficient?: number;
    /**
     * Ex: false
     * @type {boolean}
     * @memberof Correlation
     */
    correlationIsContradictoryToOptimalValues?: boolean;
    /**
     * Ex: 2016-12-28 20:47:30 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof Correlation
     */
    createdAt?: string;
    /**
     * Calculated Statistic: Ex: 1.646
     * @type {number}
     * @memberof Correlation
     */
    criticalTValue?: number;
    /**
     * Ex: higher
     * @type {string}
     * @memberof Correlation
     */
    direction?: string;
    /**
     * User-Defined Variable Setting: The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.  Unit: Seconds
     * @type {number}
     * @memberof Correlation
     */
    durationOfAction?: number;
    /**
     * User-Defined Variable Setting: The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.  Unit: Hours
     * @type {number}
     * @memberof Correlation
     */
    durationOfActionInHours?: number;
    /**
     * Ex: 200
     * @type {number}
     * @memberof Correlation
     */
    degreesOfFreedom?: number;
    /**
     * Ex: 145
     * @type {number}
     * @memberof Correlation
     */
    effectNumberOfProcessedDailyMeasurements?: number;
    /**
     * Ex: optimalPearsonProduct is not defined
     * @type {string}
     * @memberof Correlation
     */
    error?: string;
    /**
     * Ex: 193
     * @type {number}
     * @memberof Correlation
     */
    effectChanges?: number;
    /**
     * 
     * @type {DataSource}
     * @memberof Correlation
     */
    effectDataSource?: DataSource;
    /**
     * Ex: moderately positive
     * @type {string}
     * @memberof Correlation
     */
    effectSize?: string;
    /**
     * Ex: /5
     * @type {string}
     * @memberof Correlation
     */
    effectUnit?: string;
    /**
     * Ex: 1
     * @type {number}
     * @memberof Correlation
     */
    effectUserVariableShareUserMeasurements?: number;
    /**
     * Ex: 1
     * @type {number}
     * @memberof Correlation
     */
    effectVariableCategoryId?: number;
    /**
     * Ex: Emotions
     * @type {string}
     * @memberof Correlation
     */
    effectVariableCategoryName?: string;
    /**
     * Ex: MEAN
     * @type {string}
     * @memberof Correlation
     */
    effectVariableCombinationOperation?: string;
    /**
     * Ex: Mood_(psychology)
     * @type {string}
     * @memberof Correlation
     */
    effectVariableCommonAlias?: string;
    /**
     * Ex: /5
     * @type {string}
     * @memberof Correlation
     */
    effectVariableUnitAbbreviatedName?: string;
    /**
     * Ex: 10
     * @type {number}
     * @memberof Correlation
     */
    effectVariableUnitId?: number;
    /**
     * Ex: 1 to 5 Rating
     * @type {string}
     * @memberof Correlation
     */
    effectVariableUnitName?: string;
    /**
     * Ex: 1398
     * @type {number}
     * @memberof Correlation
     */
    effectVariableId?: number;
    /**
     * Ex: 10
     * @type {number}
     * @memberof Correlation
     */
    effectVariableMostCommonConnectorId?: number;
    /**
     * Ex: Overall Mood
     * @type {string}
     * @memberof Correlation
     */
    effectVariableName: string;
    /**
     * Ex: 2014-07-30 12:50:00 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof Correlation
     */
    experimentEndTime?: string;
    /**
     * Ex: 2012-05-06 21:15:00 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof Correlation
     */
    experimentStartTime?: string;
    /**
     * Ex: 0.528359
     * @type {number}
     * @memberof Correlation
     */
    forwardSpearmanCorrelationCoefficient?: number;
    /**
     * Ex: 298
     * @type {number}
     * @memberof Correlation
     */
    numberOfPairs?: number;
    /**
     * Ex: 0
     * @type {number}
     * @memberof Correlation
     */
    onsetDelay?: number;
    /**
     * Ex: 0
     * @type {number}
     * @memberof Correlation
     */
    onsetDelayInHours?: number;
    /**
     * Ex: -86400
     * @type {number}
     * @memberof Correlation
     */
    onsetDelayWithStrongestPearsonCorrelation?: number;
    /**
     * Ex: -24
     * @type {number}
     * @memberof Correlation
     */
    onsetDelayWithStrongestPearsonCorrelationInHours?: number;
    /**
     * Ex: 0.68582816186982
     * @type {number}
     * @memberof Correlation
     */
    optimalPearsonProduct?: number;
    /**
     * User-Defined Variable Setting: Ex: -1. Unit: User-specified or common.
     * @type {number}
     * @memberof Correlation
     */
    outcomeFillingValue?: number;
    /**
     * User-Defined Variable Setting: Ex: 23. Unit: User-specified or common.
     * @type {number}
     * @memberof Correlation
     */
    outcomeMaximumAllowedValue?: number;
    /**
     * User-Defined Variable Setting: Ex: 0.1. Unit: User-specified or common.
     * @type {number}
     * @memberof Correlation
     */
    outcomeMinimumAllowedValue?: number;
    /**
     * Ex: 0.477
     * @type {number}
     * @memberof Correlation
     */
    pearsonCorrelationWithNoOnsetDelay?: number;
    /**
     * Ex: 0.538
     * @type {number}
     * @memberof Correlation
     */
    predictivePearsonCorrelation?: number;
    /**
     * Ex: 0.538
     * @type {number}
     * @memberof Correlation
     */
    predictivePearsonCorrelationCoefficient?: number;
    /**
     * Ex: RescueTime
     * @type {string}
     * @memberof Correlation
     */
    predictorDataSources?: string;
    /**
     * Ex: -1. Unit: User-specified or common.
     * @type {number}
     * @memberof Correlation
     */
    predictorFillingValue?: number;
    /**
     * Ex: 200. Unit: User-specified or common.
     * @type {number}
     * @memberof Correlation
     */
    predictorMaximumAllowedValue?: number;
    /**
     * Ex: 30. Unit: User-specified or common.
     * @type {number}
     * @memberof Correlation
     */
    predictorMinimumAllowedValue?: number;
    /**
     * Ex: 17. Unit: User-specified or common.
     * @type {number}
     * @memberof Correlation
     */
    predictsHighEffectChange?: number;
    /**
     * Ex: -11. Unit: User-specified or common.
     * @type {number}
     * @memberof Correlation
     */
    predictsLowEffectChange?: number;
    /**
     * Ex: 0.39628900511586
     * @type {number}
     * @memberof Correlation
     */
    pValue?: number;
    /**
     * Ex: 0.528
     * @type {number}
     * @memberof Correlation
     */
    qmScore?: number;
    /**
     * Ex: 0.01377184270977
     * @type {number}
     * @memberof Correlation
     */
    reversePearsonCorrelationCoefficient?: number;
    /**
     * Would you like to make this study publicly visible?
     * @type {boolean}
     * @memberof Correlation
     */
    shareUserMeasurements?: boolean;
    /**
     * Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
     * @type {string}
     * @memberof Correlation
     */
    sharingDescription?: string;
    /**
     * Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
     * @type {string}
     * @memberof Correlation
     */
    sharingTitle?: string;
    /**
     * Ex: 1
     * @type {boolean}
     * @memberof Correlation
     */
    significantDifference?: boolean;
    /**
     * Ex: 0.9813
     * @type {number}
     * @memberof Correlation
     */
    statisticalSignificance?: number;
    /**
     * Ex: moderate
     * @type {string}
     * @memberof Correlation
     */
    strengthLevel?: string;
    /**
     * Ex: 0.613
     * @type {number}
     * @memberof Correlation
     */
    strongestPearsonCorrelationCoefficient?: number;
    /**
     * 
     * @type {StudyHtml}
     * @memberof Correlation
     */
    studyHtml?: StudyHtml;
    /**
     * 
     * @type {StudyImages}
     * @memberof Correlation
     */
    studyImages?: StudyImages;
    /**
     * 
     * @type {StudyLinks}
     * @memberof Correlation
     */
    studyLinks?: StudyLinks;
    /**
     * 
     * @type {StudyText}
     * @memberof Correlation
     */
    studyText?: StudyText;
    /**
     * Ex: 9.6986079652717
     * @type {number}
     * @memberof Correlation
     */
    tValue?: number;
    /**
     * Ex: 2017-05-06 15:40:38 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof Correlation
     */
    updatedAt?: string;
    /**
     * Ex: 230
     * @type {number}
     * @memberof Correlation
     */
    userId?: number;
    /**
     * Ex: 1
     * @type {number}
     * @memberof Correlation
     */
    userVote?: number;
    /**
     * Ex: 4.14
     * @type {number}
     * @memberof Correlation
     */
    valuePredictingHighOutcome?: number;
    /**
     * Ex: 3.03
     * @type {number}
     * @memberof Correlation
     */
    valuePredictingLowOutcome?: number;
    /**
     * Sources used to collect data for the outcome variable
     * @type {string}
     * @memberof Correlation
     */
    outcomeDataSources?: string;
    /**
     * Mike Sinn
     * @type {string}
     * @memberof Correlation
     */
    principalInvestigator?: string;
    /**
     * Correlation when cause and effect are reversed. For any causal relationship, the forward correlation should exceed the reverse correlation.
     * @type {number}
     * @memberof Correlation
     */
    reverseCorrelation?: number;
    /**
     * Ex: 
     * @type {number}
     * @memberof Correlation
     */
    averagePearsonCorrelationCoefficientOverOnsetDelays?: number;
    /**
     * Ex: 14764
     * @type {number}
     * @memberof Correlation
     */
    causeNumberOfRawMeasurements?: number;
    /**
     * Correlations calculated with various duration of action hyper-parameters
     * @type {Array<Correlation>}
     * @memberof Correlation
     */
    correlationsOverDurationsOfAction?: Array<Correlation>;
    /**
     * Correlations calculated with various onset delay hyper-parameters
     * @type {Array<Correlation>}
     * @memberof Correlation
     */
    correlationsOverOnsetDelays?: Array<Correlation>;
    /**
     * Highchart config illustrating correlations calculated with various duration of action hyper-parameters
     * @type {object}
     * @memberof Correlation
     */
    correlationsOverDurationsOfActionChartConfig?: object;
    /**
     * Highchart config illustrating correlations calculated with various onset delay hyper-parameters
     * @type {object}
     * @memberof Correlation
     */
    correlationsOverOnsetDelaysChartConfig?: object;
    /**
     * Ex: 1
     * @type {number}
     * @memberof Correlation
     */
    numberOfUsers?: number;
    /**
     * Ex: 1
     * @type {number}
     * @memberof Correlation
     */
    rawCauseMeasurementSignificance?: number;
    /**
     * Ex: 1
     * @type {number}
     * @memberof Correlation
     */
    rawEffectMeasurementSignificance?: number;
    /**
     * Ex: 1
     * @type {string}
     * @memberof Correlation
     */
    reversePairsCount?: string;
    /**
     * Ex: 1
     * @type {number}
     * @memberof Correlation
     */
    voteStatisticalSignificance?: number;
    /**
     * Ex: 0.011598441286655
     * @type {number}
     * @memberof Correlation
     */
    aggregateQMScore?: number;
    /**
     * Ex: 0.0333
     * @type {number}
     * @memberof Correlation
     */
    forwardPearsonCorrelationCoefficient?: number;
    /**
     * Ex: 6
     * @type {number}
     * @memberof Correlation
     */
    numberOfCorrelations?: number;
    /**
     * Ex: 1 or 0
     * @type {number}
     * @memberof Correlation
     */
    vote?: number;
}

export function CorrelationFromJSON(json: any): Correlation {
    return CorrelationFromJSONTyped(json, false);
}

export function CorrelationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Correlation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageDailyHighCause': !exists(json, 'averageDailyHighCause') ? undefined : json['averageDailyHighCause'],
        'averageDailyLowCause': !exists(json, 'averageDailyLowCause') ? undefined : json['averageDailyLowCause'],
        'averageEffect': !exists(json, 'averageEffect') ? undefined : json['averageEffect'],
        'averageEffectFollowingHighCause': !exists(json, 'averageEffectFollowingHighCause') ? undefined : json['averageEffectFollowingHighCause'],
        'averageEffectFollowingLowCause': !exists(json, 'averageEffectFollowingLowCause') ? undefined : json['averageEffectFollowingLowCause'],
        'averageForwardPearsonCorrelationOverOnsetDelays': !exists(json, 'averageForwardPearsonCorrelationOverOnsetDelays') ? undefined : json['averageForwardPearsonCorrelationOverOnsetDelays'],
        'averageReversePearsonCorrelationOverOnsetDelays': !exists(json, 'averageReversePearsonCorrelationOverOnsetDelays') ? undefined : json['averageReversePearsonCorrelationOverOnsetDelays'],
        'averageVote': !exists(json, 'averageVote') ? undefined : json['averageVote'],
        'causeChanges': !exists(json, 'causeChanges') ? undefined : json['causeChanges'],
        'causeDataSource': !exists(json, 'causeDataSource') ? undefined : DataSourceFromJSON(json['causeDataSource']),
        'causeUserVariableShareUserMeasurements': !exists(json, 'causeUserVariableShareUserMeasurements') ? undefined : json['causeUserVariableShareUserMeasurements'],
        'causeVariableCategoryId': !exists(json, 'causeVariableCategoryId') ? undefined : json['causeVariableCategoryId'],
        'causeVariableCategoryName': !exists(json, 'causeVariableCategoryName') ? undefined : json['causeVariableCategoryName'],
        'causeVariableCombinationOperation': !exists(json, 'causeVariableCombinationOperation') ? undefined : json['causeVariableCombinationOperation'],
        'causeVariableUnitAbbreviatedName': !exists(json, 'causeVariableUnitAbbreviatedName') ? undefined : json['causeVariableUnitAbbreviatedName'],
        'causeVariableId': !exists(json, 'causeVariableId') ? undefined : json['causeVariableId'],
        'causeVariableMostCommonConnectorId': !exists(json, 'causeVariableMostCommonConnectorId') ? undefined : json['causeVariableMostCommonConnectorId'],
        'causeVariableName': json['causeVariableName'],
        'confidenceInterval': !exists(json, 'confidenceInterval') ? undefined : json['confidenceInterval'],
        'confidenceLevel': !exists(json, 'confidenceLevel') ? undefined : json['confidenceLevel'],
        'correlationCoefficient': !exists(json, 'correlationCoefficient') ? undefined : json['correlationCoefficient'],
        'correlationIsContradictoryToOptimalValues': !exists(json, 'correlationIsContradictoryToOptimalValues') ? undefined : json['correlationIsContradictoryToOptimalValues'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'criticalTValue': !exists(json, 'criticalTValue') ? undefined : json['criticalTValue'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'durationOfAction': !exists(json, 'durationOfAction') ? undefined : json['durationOfAction'],
        'durationOfActionInHours': !exists(json, 'durationOfActionInHours') ? undefined : json['durationOfActionInHours'],
        'degreesOfFreedom': !exists(json, 'degreesOfFreedom') ? undefined : json['degreesOfFreedom'],
        'effectNumberOfProcessedDailyMeasurements': !exists(json, 'effectNumberOfProcessedDailyMeasurements') ? undefined : json['effectNumberOfProcessedDailyMeasurements'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'effectChanges': !exists(json, 'effectChanges') ? undefined : json['effectChanges'],
        'effectDataSource': !exists(json, 'effectDataSource') ? undefined : DataSourceFromJSON(json['effectDataSource']),
        'effectSize': !exists(json, 'effectSize') ? undefined : json['effectSize'],
        'effectUnit': !exists(json, 'effectUnit') ? undefined : json['effectUnit'],
        'effectUserVariableShareUserMeasurements': !exists(json, 'effectUserVariableShareUserMeasurements') ? undefined : json['effectUserVariableShareUserMeasurements'],
        'effectVariableCategoryId': !exists(json, 'effectVariableCategoryId') ? undefined : json['effectVariableCategoryId'],
        'effectVariableCategoryName': !exists(json, 'effectVariableCategoryName') ? undefined : json['effectVariableCategoryName'],
        'effectVariableCombinationOperation': !exists(json, 'effectVariableCombinationOperation') ? undefined : json['effectVariableCombinationOperation'],
        'effectVariableCommonAlias': !exists(json, 'effectVariableCommonAlias') ? undefined : json['effectVariableCommonAlias'],
        'effectVariableUnitAbbreviatedName': !exists(json, 'effectVariableUnitAbbreviatedName') ? undefined : json['effectVariableUnitAbbreviatedName'],
        'effectVariableUnitId': !exists(json, 'effectVariableUnitId') ? undefined : json['effectVariableUnitId'],
        'effectVariableUnitName': !exists(json, 'effectVariableUnitName') ? undefined : json['effectVariableUnitName'],
        'effectVariableId': !exists(json, 'effectVariableId') ? undefined : json['effectVariableId'],
        'effectVariableMostCommonConnectorId': !exists(json, 'effectVariableMostCommonConnectorId') ? undefined : json['effectVariableMostCommonConnectorId'],
        'effectVariableName': json['effectVariableName'],
        'experimentEndTime': !exists(json, 'experimentEndTime') ? undefined : json['experimentEndTime'],
        'experimentStartTime': !exists(json, 'experimentStartTime') ? undefined : json['experimentStartTime'],
        'forwardSpearmanCorrelationCoefficient': !exists(json, 'forwardSpearmanCorrelationCoefficient') ? undefined : json['forwardSpearmanCorrelationCoefficient'],
        'numberOfPairs': !exists(json, 'numberOfPairs') ? undefined : json['numberOfPairs'],
        'onsetDelay': !exists(json, 'onsetDelay') ? undefined : json['onsetDelay'],
        'onsetDelayInHours': !exists(json, 'onsetDelayInHours') ? undefined : json['onsetDelayInHours'],
        'onsetDelayWithStrongestPearsonCorrelation': !exists(json, 'onsetDelayWithStrongestPearsonCorrelation') ? undefined : json['onsetDelayWithStrongestPearsonCorrelation'],
        'onsetDelayWithStrongestPearsonCorrelationInHours': !exists(json, 'onsetDelayWithStrongestPearsonCorrelationInHours') ? undefined : json['onsetDelayWithStrongestPearsonCorrelationInHours'],
        'optimalPearsonProduct': !exists(json, 'optimalPearsonProduct') ? undefined : json['optimalPearsonProduct'],
        'outcomeFillingValue': !exists(json, 'outcomeFillingValue') ? undefined : json['outcomeFillingValue'],
        'outcomeMaximumAllowedValue': !exists(json, 'outcomeMaximumAllowedValue') ? undefined : json['outcomeMaximumAllowedValue'],
        'outcomeMinimumAllowedValue': !exists(json, 'outcomeMinimumAllowedValue') ? undefined : json['outcomeMinimumAllowedValue'],
        'pearsonCorrelationWithNoOnsetDelay': !exists(json, 'pearsonCorrelationWithNoOnsetDelay') ? undefined : json['pearsonCorrelationWithNoOnsetDelay'],
        'predictivePearsonCorrelation': !exists(json, 'predictivePearsonCorrelation') ? undefined : json['predictivePearsonCorrelation'],
        'predictivePearsonCorrelationCoefficient': !exists(json, 'predictivePearsonCorrelationCoefficient') ? undefined : json['predictivePearsonCorrelationCoefficient'],
        'predictorDataSources': !exists(json, 'predictorDataSources') ? undefined : json['predictorDataSources'],
        'predictorFillingValue': !exists(json, 'predictorFillingValue') ? undefined : json['predictorFillingValue'],
        'predictorMaximumAllowedValue': !exists(json, 'predictorMaximumAllowedValue') ? undefined : json['predictorMaximumAllowedValue'],
        'predictorMinimumAllowedValue': !exists(json, 'predictorMinimumAllowedValue') ? undefined : json['predictorMinimumAllowedValue'],
        'predictsHighEffectChange': !exists(json, 'predictsHighEffectChange') ? undefined : json['predictsHighEffectChange'],
        'predictsLowEffectChange': !exists(json, 'predictsLowEffectChange') ? undefined : json['predictsLowEffectChange'],
        'pValue': !exists(json, 'pValue') ? undefined : json['pValue'],
        'qmScore': !exists(json, 'qmScore') ? undefined : json['qmScore'],
        'reversePearsonCorrelationCoefficient': !exists(json, 'reversePearsonCorrelationCoefficient') ? undefined : json['reversePearsonCorrelationCoefficient'],
        'shareUserMeasurements': !exists(json, 'shareUserMeasurements') ? undefined : json['shareUserMeasurements'],
        'sharingDescription': !exists(json, 'sharingDescription') ? undefined : json['sharingDescription'],
        'sharingTitle': !exists(json, 'sharingTitle') ? undefined : json['sharingTitle'],
        'significantDifference': !exists(json, 'significantDifference') ? undefined : json['significantDifference'],
        'statisticalSignificance': !exists(json, 'statisticalSignificance') ? undefined : json['statisticalSignificance'],
        'strengthLevel': !exists(json, 'strengthLevel') ? undefined : json['strengthLevel'],
        'strongestPearsonCorrelationCoefficient': !exists(json, 'strongestPearsonCorrelationCoefficient') ? undefined : json['strongestPearsonCorrelationCoefficient'],
        'studyHtml': !exists(json, 'studyHtml') ? undefined : StudyHtmlFromJSON(json['studyHtml']),
        'studyImages': !exists(json, 'studyImages') ? undefined : StudyImagesFromJSON(json['studyImages']),
        'studyLinks': !exists(json, 'studyLinks') ? undefined : StudyLinksFromJSON(json['studyLinks']),
        'studyText': !exists(json, 'studyText') ? undefined : StudyTextFromJSON(json['studyText']),
        'tValue': !exists(json, 'tValue') ? undefined : json['tValue'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userVote': !exists(json, 'userVote') ? undefined : json['userVote'],
        'valuePredictingHighOutcome': !exists(json, 'valuePredictingHighOutcome') ? undefined : json['valuePredictingHighOutcome'],
        'valuePredictingLowOutcome': !exists(json, 'valuePredictingLowOutcome') ? undefined : json['valuePredictingLowOutcome'],
        'outcomeDataSources': !exists(json, 'outcomeDataSources') ? undefined : json['outcomeDataSources'],
        'principalInvestigator': !exists(json, 'principalInvestigator') ? undefined : json['principalInvestigator'],
        'reverseCorrelation': !exists(json, 'reverseCorrelation') ? undefined : json['reverseCorrelation'],
        'averagePearsonCorrelationCoefficientOverOnsetDelays': !exists(json, 'averagePearsonCorrelationCoefficientOverOnsetDelays') ? undefined : json['averagePearsonCorrelationCoefficientOverOnsetDelays'],
        'causeNumberOfRawMeasurements': !exists(json, 'causeNumberOfRawMeasurements') ? undefined : json['causeNumberOfRawMeasurements'],
        'correlationsOverDurationsOfAction': !exists(json, 'correlationsOverDurationsOfAction') ? undefined : ((json['correlationsOverDurationsOfAction'] as Array<any>).map(CorrelationFromJSON)),
        'correlationsOverOnsetDelays': !exists(json, 'correlationsOverOnsetDelays') ? undefined : ((json['correlationsOverOnsetDelays'] as Array<any>).map(CorrelationFromJSON)),
        'correlationsOverDurationsOfActionChartConfig': !exists(json, 'correlationsOverDurationsOfActionChartConfig') ? undefined : json['correlationsOverDurationsOfActionChartConfig'],
        'correlationsOverOnsetDelaysChartConfig': !exists(json, 'correlationsOverOnsetDelaysChartConfig') ? undefined : json['correlationsOverOnsetDelaysChartConfig'],
        'numberOfUsers': !exists(json, 'numberOfUsers') ? undefined : json['numberOfUsers'],
        'rawCauseMeasurementSignificance': !exists(json, 'rawCauseMeasurementSignificance') ? undefined : json['rawCauseMeasurementSignificance'],
        'rawEffectMeasurementSignificance': !exists(json, 'rawEffectMeasurementSignificance') ? undefined : json['rawEffectMeasurementSignificance'],
        'reversePairsCount': !exists(json, 'reversePairsCount') ? undefined : json['reversePairsCount'],
        'voteStatisticalSignificance': !exists(json, 'voteStatisticalSignificance') ? undefined : json['voteStatisticalSignificance'],
        'aggregateQMScore': !exists(json, 'aggregateQMScore') ? undefined : json['aggregateQMScore'],
        'forwardPearsonCorrelationCoefficient': !exists(json, 'forwardPearsonCorrelationCoefficient') ? undefined : json['forwardPearsonCorrelationCoefficient'],
        'numberOfCorrelations': !exists(json, 'numberOfCorrelations') ? undefined : json['numberOfCorrelations'],
        'vote': !exists(json, 'vote') ? undefined : json['vote'],
    };
}

export function CorrelationToJSON(value?: Correlation | null): any {
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
        'causeDataSource': DataSourceToJSON(value.causeDataSource),
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
        'effectDataSource': DataSourceToJSON(value.effectDataSource),
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
        'studyHtml': StudyHtmlToJSON(value.studyHtml),
        'studyImages': StudyImagesToJSON(value.studyImages),
        'studyLinks': StudyLinksToJSON(value.studyLinks),
        'studyText': StudyTextToJSON(value.studyText),
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
        'correlationsOverDurationsOfAction': value.correlationsOverDurationsOfAction === undefined ? undefined : ((value.correlationsOverDurationsOfAction as Array<any>).map(CorrelationToJSON)),
        'correlationsOverOnsetDelays': value.correlationsOverOnsetDelays === undefined ? undefined : ((value.correlationsOverOnsetDelays as Array<any>).map(CorrelationToJSON)),
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


