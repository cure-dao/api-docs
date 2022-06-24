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


import * as runtime from '../runtime';
import {
    GetCorrelationsResponse,
    GetCorrelationsResponseFromJSON,
    GetCorrelationsResponseToJSON,
} from '../models';

export interface GetCorrelationsRequest {
    causeVariableName?: string;
    effectVariableName?: string;
    sort?: string;
    limit?: number;
    offset?: number;
    userId?: number;
    correlationCoefficient?: string;
    updatedAt?: string;
    outcomesOfInterest?: boolean;
    clientId?: string;
    commonOnly?: boolean;
}

/**
 * 
 */
export class AnalyticsApi extends runtime.BaseAPI {

    /**
     * Get a list of correlations that can be used to display top predictors of a given outcome like mood, for instance.
     * Get correlations
     */
    async getCorrelationsRaw(requestParameters: GetCorrelationsRequest): Promise<runtime.ApiResponse<GetCorrelationsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.causeVariableName !== undefined) {
            queryParameters['causeVariableName'] = requestParameters.causeVariableName;
        }

        if (requestParameters.effectVariableName !== undefined) {
            queryParameters['effectVariableName'] = requestParameters.effectVariableName;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.correlationCoefficient !== undefined) {
            queryParameters['correlationCoefficient'] = requestParameters.correlationCoefficient;
        }

        if (requestParameters.updatedAt !== undefined) {
            queryParameters['updatedAt'] = requestParameters.updatedAt;
        }

        if (requestParameters.outcomesOfInterest !== undefined) {
            queryParameters['outcomesOfInterest'] = requestParameters.outcomesOfInterest;
        }

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        if (requestParameters.commonOnly !== undefined) {
            queryParameters['commonOnly'] = requestParameters.commonOnly;
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
            path: `/v3/correlations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCorrelationsResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of correlations that can be used to display top predictors of a given outcome like mood, for instance.
     * Get correlations
     */
    async getCorrelations(requestParameters: GetCorrelationsRequest): Promise<GetCorrelationsResponse> {
        const response = await this.getCorrelationsRaw(requestParameters);
        return await response.value();
    }

}
