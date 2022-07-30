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


import * as runtime from '../runtime';
import {
    GetConnectorsResponse,
    GetConnectorsResponseFromJSON,
    GetConnectorsResponseToJSON,
} from '../models';

export interface ConnectConnectorRequest {
    connectorName: ConnectConnectorConnectorNameEnum;
    userId?: number;
}

export interface DisconnectConnectorRequest {
    connectorName: DisconnectConnectorConnectorNameEnum;
}

export interface GetConnectorsRequest {
    clientId?: string;
}

export interface GetIntegrationJsRequest {
    clientId?: string;
}

export interface GetMobileConnectPageRequest {
    userId?: number;
}

export interface UpdateConnectorRequest {
    connectorName: UpdateConnectorConnectorNameEnum;
    userId?: number;
}

/**
 *
 */
export class ConnectorsApi extends runtime.BaseAPI {

    /**
     * Attempt to obtain a token from the data provider, store it in the database. With this, the connector to continue to obtain new user data until the token is revoked.
     * Obtain a token from 3rd party data source
     */
    async connectConnectorRaw(requestParameters: ConnectConnectorRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.connectorName === null || requestParameters.connectorName === undefined) {
            throw new runtime.RequiredError('connectorName','Required parameter requestParameters.connectorName was null or undefined when calling connectConnector.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("curedao_oauth2", ["basic"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/connectors/{connectorName}/connect`.replace(`{${"connectorName"}}`, encodeURIComponent(String(requestParameters.connectorName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Attempt to obtain a token from the data provider, store it in the database. With this, the connector to continue to obtain new user data until the token is revoked.
     * Obtain a token from 3rd party data source
     */
    async connectConnector(requestParameters: ConnectConnectorRequest): Promise<void> {
        await this.connectConnectorRaw(requestParameters);
    }

    /**
     * The disconnect method deletes any stored tokens or connection information from the connectors database.
     * Delete stored connection info
     */
    async disconnectConnectorRaw(requestParameters: DisconnectConnectorRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.connectorName === null || requestParameters.connectorName === undefined) {
            throw new runtime.RequiredError('connectorName','Required parameter requestParameters.connectorName was null or undefined when calling disconnectConnector.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("curedao_oauth2", ["basic"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/connectors/{connectorName}/disconnect`.replace(`{${"connectorName"}}`, encodeURIComponent(String(requestParameters.connectorName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * The disconnect method deletes any stored tokens or connection information from the connectors database.
     * Delete stored connection info
     */
    async disconnectConnector(requestParameters: DisconnectConnectorRequest): Promise<void> {
        await this.disconnectConnectorRaw(requestParameters);
    }

    /**
     * A connector pulls data from other data providers using their API or a screenscraper. Returns a list of all available connectors and information about them such as their id, name, whether the user has provided access, logo url, connection instructions, and the update history.
     * List of Connectors
     */
    async getConnectorsRaw(requestParameters: GetConnectorsRequest): Promise<runtime.ApiResponse<GetConnectorsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("curedao_oauth2", ["basic"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/connectors/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetConnectorsResponseFromJSON(jsonValue));
    }

    /**
     * A connector pulls data from other data providers using their API or a screenscraper. Returns a list of all available connectors and information about them such as their id, name, whether the user has provided access, logo url, connection instructions, and the update history.
     * List of Connectors
     */
    async getConnectors(requestParameters: GetConnectorsRequest): Promise<GetConnectorsResponse> {
        const response = await this.getConnectorsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get embeddable connect javascript. Usage:   - Embedding in applications with popups for 3rd-party authentication windows.     Use `qmSetupInPopup` function after connecting `connect.js`.   - Embedding in applications with popups for 3rd-party authentication windows.     Requires a selector to block. It will be embedded in this block.     Use `qmSetupOnPage` function after connecting `connect.js`.   - Embedding in mobile applications without popups for 3rd-party authentication.     Use `qmSetupOnMobile` function after connecting `connect.js`.     If using in a Cordova application call  `qmSetupOnIonic` function after connecting `connect.js`.
     * Get embeddable connect javascript
     */
    async getIntegrationJsRaw(requestParameters: GetIntegrationJsRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/integration.js`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get embeddable connect javascript. Usage:   - Embedding in applications with popups for 3rd-party authentication windows.     Use `qmSetupInPopup` function after connecting `connect.js`.   - Embedding in applications with popups for 3rd-party authentication windows.     Requires a selector to block. It will be embedded in this block.     Use `qmSetupOnPage` function after connecting `connect.js`.   - Embedding in mobile applications without popups for 3rd-party authentication.     Use `qmSetupOnMobile` function after connecting `connect.js`.     If using in a Cordova application call  `qmSetupOnIonic` function after connecting `connect.js`.
     * Get embeddable connect javascript
     */
    async getIntegrationJs(requestParameters: GetIntegrationJsRequest): Promise<void> {
        await this.getIntegrationJsRaw(requestParameters);
    }

    /**
     * This page is designed to be opened in a webview.  Instead of using popup authentication boxes, it uses redirection. You can include the user\'s access_token as a URL parameter like https://api.curedao.org/api/v3/connect/mobile?access_token=123
     * Mobile connect page
     */
    async getMobileConnectPageRaw(requestParameters: GetMobileConnectPageRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/connect/mobile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This page is designed to be opened in a webview.  Instead of using popup authentication boxes, it uses redirection. You can include the user\'s access_token as a URL parameter like https://api.curedao.org/api/v3/connect/mobile?access_token=123
     * Mobile connect page
     */
    async getMobileConnectPage(requestParameters: GetMobileConnectPageRequest): Promise<void> {
        await this.getMobileConnectPageRaw(requestParameters);
    }

    /**
     * The update method tells the QM Connector Framework to check with the data provider (such as Fitbit or MyFitnessPal) and retrieve any new measurements available.
     * Sync with data source
     */
    async updateConnectorRaw(requestParameters: UpdateConnectorRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.connectorName === null || requestParameters.connectorName === undefined) {
            throw new runtime.RequiredError('connectorName','Required parameter requestParameters.connectorName was null or undefined when calling updateConnector.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("curedao_oauth2", ["basic"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/connectors/{connectorName}/update`.replace(`{${"connectorName"}}`, encodeURIComponent(String(requestParameters.connectorName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * The update method tells the QM Connector Framework to check with the data provider (such as Fitbit or MyFitnessPal) and retrieve any new measurements available.
     * Sync with data source
     */
    async updateConnector(requestParameters: UpdateConnectorRequest): Promise<void> {
        await this.updateConnectorRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum ConnectConnectorConnectorNameEnum {
    Facebook = 'facebook',
    Fitbit = 'fitbit',
    Github = 'github',
    Googlecalendar = 'googlecalendar',
    Googlefit = 'googlefit',
    Medhelper = 'medhelper',
    Mint = 'mint',
    Moodpanda = 'moodpanda',
    Moodscope = 'moodscope',
    Myfitnesspal = 'myfitnesspal',
    Mynetdiary = 'mynetdiary',
    Netatmo = 'netatmo',
    Rescuetime = 'rescuetime',
    Runkeeper = 'runkeeper',
    Slack = 'slack',
    Sleepcloud = 'sleepcloud',
    Slice = 'slice',
    Up = 'up',
    Whatpulse = 'whatpulse',
    Withings = 'withings',
    Worldweatheronline = 'worldweatheronline',
    Foursquare = 'foursquare',
    Strava = 'strava',
    Gmail = 'gmail'
}
/**
    * @export
    * @enum {string}
    */
export enum DisconnectConnectorConnectorNameEnum {
    Facebook = 'facebook',
    Fitbit = 'fitbit',
    Github = 'github',
    Googlecalendar = 'googlecalendar',
    Googlefit = 'googlefit',
    Medhelper = 'medhelper',
    Mint = 'mint',
    Moodpanda = 'moodpanda',
    Moodscope = 'moodscope',
    Myfitnesspal = 'myfitnesspal',
    Mynetdiary = 'mynetdiary',
    Netatmo = 'netatmo',
    Rescuetime = 'rescuetime',
    Runkeeper = 'runkeeper',
    Slack = 'slack',
    Sleepcloud = 'sleepcloud',
    Slice = 'slice',
    Up = 'up',
    Whatpulse = 'whatpulse',
    Withings = 'withings',
    Worldweatheronline = 'worldweatheronline',
    Foursquare = 'foursquare',
    Strava = 'strava',
    Gmail = 'gmail'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateConnectorConnectorNameEnum {
    Facebook = 'facebook',
    Fitbit = 'fitbit',
    Github = 'github',
    Googlecalendar = 'googlecalendar',
    Googlefit = 'googlefit',
    Medhelper = 'medhelper',
    Mint = 'mint',
    Moodpanda = 'moodpanda',
    Moodscope = 'moodscope',
    Myfitnesspal = 'myfitnesspal',
    Mynetdiary = 'mynetdiary',
    Netatmo = 'netatmo',
    Rescuetime = 'rescuetime',
    Runkeeper = 'runkeeper',
    Slack = 'slack',
    Sleepcloud = 'sleepcloud',
    Slice = 'slice',
    Up = 'up',
    Whatpulse = 'whatpulse',
    Withings = 'withings',
    Worldweatheronline = 'worldweatheronline',
    Foursquare = 'foursquare',
    Strava = 'strava',
    Gmail = 'gmail'
}
