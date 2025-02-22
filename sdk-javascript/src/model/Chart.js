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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Chart model module.
 * @module model/Chart
 * @version 0.0.1
 */
class Chart {
    /**
     * Constructs a new <code>Chart</code>.
     * @alias module:model/Chart
     */
    constructor() {

        Chart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>Chart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Chart} obj Optional instance to populate.
     * @return {module:model/Chart} The populated <code>Chart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Chart();

            if (data.hasOwnProperty('highchartConfig')) {
                obj['highchartConfig'] = ApiClient.convertToType(data['highchartConfig'], Object);
            }
            if (data.hasOwnProperty('chartId')) {
                obj['chartId'] = ApiClient.convertToType(data['chartId'], 'String');
            }
            if (data.hasOwnProperty('chartTitle')) {
                obj['chartTitle'] = ApiClient.convertToType(data['chartTitle'], 'String');
            }
            if (data.hasOwnProperty('explanation')) {
                obj['explanation'] = ApiClient.convertToType(data['explanation'], 'String');
            }
            if (data.hasOwnProperty('svgUrl')) {
                obj['svgUrl'] = ApiClient.convertToType(data['svgUrl'], 'String');
            }
            if (data.hasOwnProperty('svg')) {
                obj['svg'] = ApiClient.convertToType(data['svg'], 'String');
            }
        }
        return obj;
    }


}

/**
 *  Highcharts config that can be used if you have highcharts.js included on the page
 * @member {Object} highchartConfig
 */
Chart.prototype['highchartConfig'] = undefined;

/**
 * Ex: correlationScatterPlot
 * @member {String} chartId
 */
Chart.prototype['chartId'] = undefined;

/**
 * Ex: Overall Mood following Sleep Duration (R = -0.173)
 * @member {String} chartTitle
 */
Chart.prototype['chartTitle'] = undefined;

/**
 * Ex: The chart above indicates that an increase in Sleep Duration is usually followed by a decrease in Overall Mood.
 * @member {String} explanation
 */
Chart.prototype['explanation'] = undefined;

/**
 * Url to a static svg of the chart
 * @member {String} svgUrl
 */
Chart.prototype['svgUrl'] = undefined;

/**
 * SVG string than can be embedded directly in HTML
 * @member {String} svg
 */
Chart.prototype['svg'] = undefined;






export default Chart;

