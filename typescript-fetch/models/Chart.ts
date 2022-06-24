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
/**
 * 
 * @export
 * @interface Chart
 */
export interface Chart {
    /**
     *  Highcharts config that can be used if you have highcharts.js included on the page
     * @type {object}
     * @memberof Chart
     */
    highchartConfig?: object;
    /**
     * Ex: correlationScatterPlot
     * @type {string}
     * @memberof Chart
     */
    chartId?: string;
    /**
     * Ex: Overall Mood following Sleep Duration (R = -0.173)
     * @type {string}
     * @memberof Chart
     */
    chartTitle?: string;
    /**
     * Ex: The chart above indicates that an increase in Sleep Duration is usually followed by an decrease in Overall Mood.
     * @type {string}
     * @memberof Chart
     */
    explanation?: string;
    /**
     * Url to a static svg of the chart
     * @type {string}
     * @memberof Chart
     */
    svgUrl?: string;
    /**
     * SVG string than can be embedded directly in HTML
     * @type {string}
     * @memberof Chart
     */
    svg?: string;
}

export function ChartFromJSON(json: any): Chart {
    return ChartFromJSONTyped(json, false);
}

export function ChartFromJSONTyped(json: any, ignoreDiscriminator: boolean): Chart {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'highchartConfig': !exists(json, 'highchartConfig') ? undefined : json['highchartConfig'],
        'chartId': !exists(json, 'chartId') ? undefined : json['chartId'],
        'chartTitle': !exists(json, 'chartTitle') ? undefined : json['chartTitle'],
        'explanation': !exists(json, 'explanation') ? undefined : json['explanation'],
        'svgUrl': !exists(json, 'svgUrl') ? undefined : json['svgUrl'],
        'svg': !exists(json, 'svg') ? undefined : json['svg'],
    };
}

export function ChartToJSON(value?: Chart | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'highchartConfig': value.highchartConfig,
        'chartId': value.chartId,
        'chartTitle': value.chartTitle,
        'explanation': value.explanation,
        'svgUrl': value.svgUrl,
        'svg': value.svg,
    };
}


