"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Button = _interopRequireDefault(require("./Button"));

var _Card = _interopRequireDefault(require("./Card"));

var _ConnectInstructions = _interopRequireDefault(require("./ConnectInstructions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DataSource model module.
 * @module model/DataSource
 * @version 0.0.1
 */
var DataSource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DataSource</code>.
   * @alias module:model/DataSource
   * @param affiliate {Boolean} Ex: true
   * @param connectorClientId {String} Ex: ba7d0c12432650e23b3ce924ae2d21e2ff59e7e4e28650759633700af7ed0a30
   * @param defaultVariableCategoryName {String} Ex: Foods
   * @param displayName {String} Ex: CureDAO
   * @param enabled {Number} Ex: 0
   * @param getItUrl {String} Ex: https://curedao.org
   * @param id {Number} Ex: 72
   * @param image {String} Ex: https://app.curedao.org/img/logos/curedao-logo-qm-rainbow-200-200.png
   * @param imageHtml {String} Ex: <a href=\"https://curedao.org\"><img id=\"curedao_image\" title=\"CureDAO\" src=\"https://app.curedao.org/img/logos/curedao-logo-qm-rainbow-200-200.png\" alt=\"CureDAO\"></a>
   * @param linkedDisplayNameHtml {String} Ex: <a href=\"https://curedao.org\">CureDAO</a>
   * @param longDescription {String} Ex: CureDAO is a Chrome extension, Android app, iOS app, and web app that allows you to easily track mood, symptoms, or any outcome you want to optimize in a fraction of a second.  You can also import your data from over 30 other apps and devices like Fitbit, Rescuetime, Jawbone Up, Withings, Facebook, GitHub, Google Calendar, Runkeeper, MoodPanda, Slice, Google Fit, and more.  CureDAO then analyzes your data to identify which hidden factors are most likely to be influencing your mood or symptoms and their optimal daily values.
   * @param name {String} Ex: curedao
   * @param shortDescription {String} Ex: Tracks anything
   */
  function DataSource(affiliate, connectorClientId, defaultVariableCategoryName, displayName, enabled, getItUrl, id, image, imageHtml, linkedDisplayNameHtml, longDescription, name, shortDescription) {
    _classCallCheck(this, DataSource);

    DataSource.initialize(this, affiliate, connectorClientId, defaultVariableCategoryName, displayName, enabled, getItUrl, id, image, imageHtml, linkedDisplayNameHtml, longDescription, name, shortDescription);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DataSource, null, [{
    key: "initialize",
    value: function initialize(obj, affiliate, connectorClientId, defaultVariableCategoryName, displayName, enabled, getItUrl, id, image, imageHtml, linkedDisplayNameHtml, longDescription, name, shortDescription) {
      obj['affiliate'] = affiliate;
      obj['connectorClientId'] = connectorClientId;
      obj['defaultVariableCategoryName'] = defaultVariableCategoryName;
      obj['displayName'] = displayName;
      obj['enabled'] = enabled;
      obj['getItUrl'] = getItUrl;
      obj['id'] = id;
      obj['image'] = image;
      obj['imageHtml'] = imageHtml;
      obj['linkedDisplayNameHtml'] = linkedDisplayNameHtml;
      obj['longDescription'] = longDescription;
      obj['name'] = name;
      obj['shortDescription'] = shortDescription;
    }
    /**
     * Constructs a <code>DataSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataSource} obj Optional instance to populate.
     * @return {module:model/DataSource} The populated <code>DataSource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DataSource();

        if (data.hasOwnProperty('affiliate')) {
          obj['affiliate'] = _ApiClient["default"].convertToType(data['affiliate'], 'Boolean');
        }

        if (data.hasOwnProperty('backgroundColor')) {
          obj['backgroundColor'] = _ApiClient["default"].convertToType(data['backgroundColor'], 'String');
        }

        if (data.hasOwnProperty('buttons')) {
          obj['buttons'] = _ApiClient["default"].convertToType(data['buttons'], [_Button["default"]]);
        }

        if (data.hasOwnProperty('card')) {
          obj['card'] = _Card["default"].constructFromObject(data['card']);
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('connected')) {
          obj['connected'] = _ApiClient["default"].convertToType(data['connected'], 'Boolean');
        }

        if (data.hasOwnProperty('connectError')) {
          obj['connectError'] = _ApiClient["default"].convertToType(data['connectError'], 'String');
        }

        if (data.hasOwnProperty('connectInstructions')) {
          obj['connectInstructions'] = _ConnectInstructions["default"].constructFromObject(data['connectInstructions']);
        }

        if (data.hasOwnProperty('connectorId')) {
          obj['connectorId'] = _ApiClient["default"].convertToType(data['connectorId'], 'Number');
        }

        if (data.hasOwnProperty('connectStatus')) {
          obj['connectStatus'] = _ApiClient["default"].convertToType(data['connectStatus'], 'String');
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('connectorClientId')) {
          obj['connectorClientId'] = _ApiClient["default"].convertToType(data['connectorClientId'], 'String');
        }

        if (data.hasOwnProperty('defaultVariableCategoryName')) {
          obj['defaultVariableCategoryName'] = _ApiClient["default"].convertToType(data['defaultVariableCategoryName'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Number');
        }

        if (data.hasOwnProperty('getItUrl')) {
          obj['getItUrl'] = _ApiClient["default"].convertToType(data['getItUrl'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }

        if (data.hasOwnProperty('imageHtml')) {
          obj['imageHtml'] = _ApiClient["default"].convertToType(data['imageHtml'], 'String');
        }

        if (data.hasOwnProperty('lastSuccessfulUpdatedAt')) {
          obj['lastSuccessfulUpdatedAt'] = _ApiClient["default"].convertToType(data['lastSuccessfulUpdatedAt'], 'String');
        }

        if (data.hasOwnProperty('lastUpdate')) {
          obj['lastUpdate'] = _ApiClient["default"].convertToType(data['lastUpdate'], 'Number');
        }

        if (data.hasOwnProperty('linkedDisplayNameHtml')) {
          obj['linkedDisplayNameHtml'] = _ApiClient["default"].convertToType(data['linkedDisplayNameHtml'], 'String');
        }

        if (data.hasOwnProperty('longDescription')) {
          obj['longDescription'] = _ApiClient["default"].convertToType(data['longDescription'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('mobileConnectMethod')) {
          obj['mobileConnectMethod'] = _ApiClient["default"].convertToType(data['mobileConnectMethod'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('platforms')) {
          obj['platforms'] = _ApiClient["default"].convertToType(data['platforms'], ['String']);
        }

        if (data.hasOwnProperty('premium')) {
          obj['premium'] = _ApiClient["default"].convertToType(data['premium'], 'Boolean');
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], ['String']);
        }

        if (data.hasOwnProperty('shortDescription')) {
          obj['shortDescription'] = _ApiClient["default"].convertToType(data['shortDescription'], 'String');
        }

        if (data.hasOwnProperty('spreadsheetUploadLink')) {
          obj['spreadsheetUploadLink'] = _ApiClient["default"].convertToType(data['spreadsheetUploadLink'], 'String');
        }

        if (data.hasOwnProperty('totalMeasurementsInLastUpdate')) {
          obj['totalMeasurementsInLastUpdate'] = _ApiClient["default"].convertToType(data['totalMeasurementsInLastUpdate'], 'Number');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('updateRequestedAt')) {
          obj['updateRequestedAt'] = _ApiClient["default"].convertToType(data['updateRequestedAt'], 'String');
        }

        if (data.hasOwnProperty('updateStatus')) {
          obj['updateStatus'] = _ApiClient["default"].convertToType(data['updateStatus'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DataSource;
}();
/**
 * Ex: true
 * @member {Boolean} affiliate
 */


DataSource.prototype['affiliate'] = undefined;
/**
 * Background color HEX code that matches the icon
 * @member {String} backgroundColor
 */

DataSource.prototype['backgroundColor'] = undefined;
/**
 * @member {Array.<module:model/Button>} buttons
 */

DataSource.prototype['buttons'] = undefined;
/**
 * @member {module:model/Card} card
 */

DataSource.prototype['card'] = undefined;
/**
 * Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
 * @member {String} clientId
 */

DataSource.prototype['clientId'] = undefined;
/**
 * True if the authenticated user has this connector enabled
 * @member {Boolean} connected
 */

DataSource.prototype['connected'] = undefined;
/**
 * Ex: Your token is expired. Please re-connect
 * @member {String} connectError
 */

DataSource.prototype['connectError'] = undefined;
/**
 * @member {module:model/ConnectInstructions} connectInstructions
 */

DataSource.prototype['connectInstructions'] = undefined;
/**
 * Ex: 8
 * @member {Number} connectorId
 */

DataSource.prototype['connectorId'] = undefined;
/**
 * Ex: CONNECTED
 * @member {String} connectStatus
 */

DataSource.prototype['connectStatus'] = undefined;
/**
 * Number of measurements from this source or number of users who have measurements from this source
 * @member {Number} count
 */

DataSource.prototype['count'] = undefined;
/**
 * Ex: 2000-01-01 00:00:00 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} createdAt
 */

DataSource.prototype['createdAt'] = undefined;
/**
 * Ex: ba7d0c12432650e23b3ce924ae2d21e2ff59e7e4e28650759633700af7ed0a30
 * @member {String} connectorClientId
 */

DataSource.prototype['connectorClientId'] = undefined;
/**
 * Ex: Foods
 * @member {String} defaultVariableCategoryName
 */

DataSource.prototype['defaultVariableCategoryName'] = undefined;
/**
 * Ex: CureDAO
 * @member {String} displayName
 */

DataSource.prototype['displayName'] = undefined;
/**
 * Ex: 0
 * @member {Number} enabled
 */

DataSource.prototype['enabled'] = undefined;
/**
 * Ex: https://curedao.org
 * @member {String} getItUrl
 */

DataSource.prototype['getItUrl'] = undefined;
/**
 * Ex: 72
 * @member {Number} id
 */

DataSource.prototype['id'] = undefined;
/**
 * Ex: https://app.curedao.org/img/logos/curedao-logo-qm-rainbow-200-200.png
 * @member {String} image
 */

DataSource.prototype['image'] = undefined;
/**
 * Ex: <a href=\"https://curedao.org\"><img id=\"curedao_image\" title=\"CureDAO\" src=\"https://app.curedao.org/img/logos/curedao-logo-qm-rainbow-200-200.png\" alt=\"CureDAO\"></a>
 * @member {String} imageHtml
 */

DataSource.prototype['imageHtml'] = undefined;
/**
 * Ex: 2017-07-31 10:10:34 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} lastSuccessfulUpdatedAt
 */

DataSource.prototype['lastSuccessfulUpdatedAt'] = undefined;
/**
 * Epoch timestamp of last sync
 * @member {Number} lastUpdate
 */

DataSource.prototype['lastUpdate'] = undefined;
/**
 * Ex: <a href=\"https://curedao.org\">CureDAO</a>
 * @member {String} linkedDisplayNameHtml
 */

DataSource.prototype['linkedDisplayNameHtml'] = undefined;
/**
 * Ex: CureDAO is a Chrome extension, Android app, iOS app, and web app that allows you to easily track mood, symptoms, or any outcome you want to optimize in a fraction of a second.  You can also import your data from over 30 other apps and devices like Fitbit, Rescuetime, Jawbone Up, Withings, Facebook, GitHub, Google Calendar, Runkeeper, MoodPanda, Slice, Google Fit, and more.  CureDAO then analyzes your data to identify which hidden factors are most likely to be influencing your mood or symptoms and their optimal daily values.
 * @member {String} longDescription
 */

DataSource.prototype['longDescription'] = undefined;
/**
 * Ex: Got 412 new measurements on 2017-07-31 10:10:34
 * @member {String} message
 */

DataSource.prototype['message'] = undefined;
/**
 * Mobile connect method: webview, cordova, google, spreadsheet, or ip
 * @member {String} mobileConnectMethod
 */

DataSource.prototype['mobileConnectMethod'] = undefined;
/**
 * Ex: curedao
 * @member {String} name
 */

DataSource.prototype['name'] = undefined;
/**
 * Platforms (chrome, android, ios, web) that you can connect on.
 * @member {Array.<String>} platforms
 */

DataSource.prototype['platforms'] = undefined;
/**
 * True if connection requires upgrade
 * @member {Boolean} premium
 */

DataSource.prototype['premium'] = undefined;
/**
 * Required connector scopes
 * @member {Array.<String>} scopes
 */

DataSource.prototype['scopes'] = undefined;
/**
 * Ex: Tracks anything
 * @member {String} shortDescription
 */

DataSource.prototype['shortDescription'] = undefined;
/**
 * URL to POST a spreadsheet to (if available for this data source)
 * @member {String} spreadsheetUploadLink
 */

DataSource.prototype['spreadsheetUploadLink'] = undefined;
/**
 * Number of measurements obtained during latest update
 * @member {Number} totalMeasurementsInLastUpdate
 */

DataSource.prototype['totalMeasurementsInLastUpdate'] = undefined;
/**
 * Ex: 2017-07-31 10:10:34 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} updatedAt
 */

DataSource.prototype['updatedAt'] = undefined;
/**
 * Ex: 2017-07-18 05:16:31 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} updateRequestedAt
 */

DataSource.prototype['updateRequestedAt'] = undefined;
/**
 * Ex: UPDATED
 * @member {String} updateStatus
 */

DataSource.prototype['updateStatus'] = undefined;
/**
 * Ex: 230
 * @member {Number} userId
 */

DataSource.prototype['userId'] = undefined;
var _default = DataSource;
exports["default"] = _default;
