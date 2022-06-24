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
    CommonResponse,
    CommonResponseFromJSON,
    CommonResponseToJSON,
    GetStudiesResponse,
    GetStudiesResponseFromJSON,
    GetStudiesResponseToJSON,
    JsonErrorResponse,
    JsonErrorResponseFromJSON,
    JsonErrorResponseToJSON,
    PostStudyCreateResponse,
    PostStudyCreateResponseFromJSON,
    PostStudyCreateResponseToJSON,
    PostStudyPublishResponse,
    PostStudyPublishResponseFromJSON,
    PostStudyPublishResponseToJSON,
    Study,
    StudyFromJSON,
    StudyToJSON,
    StudyCreationBody,
    StudyCreationBodyFromJSON,
    StudyCreationBodyToJSON,
    StudyJoinResponse,
    StudyJoinResponseFromJSON,
    StudyJoinResponseToJSON,
    Vote,
    VoteFromJSON,
    VoteToJSON,
} from '../models';

export interface CreateStudyRequest {
    body: StudyCreationBody;
    clientId?: string;
}

export interface DeleteVoteRequest {
    userId?: number;
}

export interface GetOpenStudiesRequest {
    causeVariableName?: string;
    effectVariableName?: string;
    userId?: number;
    clientId?: string;
    includeCharts?: boolean;
    recalculate?: boolean;
    studyId?: string;
}

export interface GetStudiesRequest {
    causeVariableName?: string;
    effectVariableName?: string;
    userId?: number;
    clientId?: string;
    includeCharts?: boolean;
    recalculate?: boolean;
    studyId?: string;
    sort?: string;
    limit?: number;
    offset?: number;
    correlationCoefficient?: string;
    updatedAt?: string;
    outcomesOfInterest?: boolean;
    principalInvestigatorUserId?: number;
    open?: boolean;
    joined?: boolean;
    created?: boolean;
    aggregated?: boolean;
    downvoted?: boolean;
}

export interface GetStudiesCreatedRequest {
    causeVariableName?: string;
    effectVariableName?: string;
    sort?: string;
    limit?: number;
    offset?: number;
    userId?: number;
    updatedAt?: string;
    clientId?: string;
}

export interface GetStudiesJoinedRequest {
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
}

export interface GetStudyRequest {
    causeVariableName?: string;
    effectVariableName?: string;
    userId?: number;
    clientId?: string;
    includeCharts?: boolean;
    recalculate?: boolean;
    studyId?: string;
}

export interface JoinStudyRequest {
    studyId?: string;
    causeVariableName?: string;
    effectVariableName?: string;
    userId?: number;
    clientId?: string;
}

export interface PostVoteRequest {
    body: Vote;
    userId?: number;
}

export interface PublishStudyRequest {
    causeVariableName?: string;
    effectVariableName?: string;
    userId?: number;
    clientId?: string;
    includeCharts?: boolean;
    recalculate?: boolean;
    studyId?: string;
}

/**
 * 
 */
export class StudiesApi extends runtime.BaseAPI {

    /**
     * Create an individual, group, or population study examining the relationship between a predictor and outcome variable. You will be given a study id which you can invite participants to join and share their measurements for the specified variables.
     * Create a Study
     */
    async createStudyRaw(requestParameters: CreateStudyRequest): Promise<runtime.ApiResponse<PostStudyCreateResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createStudy.');
        }

        const queryParameters: any = {};

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/v3/study/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StudyCreationBodyToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PostStudyCreateResponseFromJSON(jsonValue));
    }

    /**
     * Create an individual, group, or population study examining the relationship between a predictor and outcome variable. You will be given a study id which you can invite participants to join and share their measurements for the specified variables.
     * Create a Study
     */
    async createStudy(requestParameters: CreateStudyRequest): Promise<PostStudyCreateResponse> {
        const response = await this.createStudyRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete previously posted vote
     * Delete vote
     */
    async deleteVoteRaw(requestParameters: DeleteVoteRequest): Promise<runtime.ApiResponse<CommonResponse>> {
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
            path: `/v3/votes/delete`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonResponseFromJSON(jsonValue));
    }

    /**
     * Delete previously posted vote
     * Delete vote
     */
    async deleteVote(requestParameters: DeleteVoteRequest): Promise<CommonResponse> {
        const response = await this.deleteVoteRaw(requestParameters);
        return await response.value();
    }

    /**
     * These are studies that anyone can join and share their data for the predictor and outcome variables of interest.
     * These are open studies that anyone can join
     */
    async getOpenStudiesRaw(requestParameters: GetOpenStudiesRequest): Promise<runtime.ApiResponse<GetStudiesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.causeVariableName !== undefined) {
            queryParameters['causeVariableName'] = requestParameters.causeVariableName;
        }

        if (requestParameters.effectVariableName !== undefined) {
            queryParameters['effectVariableName'] = requestParameters.effectVariableName;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        if (requestParameters.includeCharts !== undefined) {
            queryParameters['includeCharts'] = requestParameters.includeCharts;
        }

        if (requestParameters.recalculate !== undefined) {
            queryParameters['recalculate'] = requestParameters.recalculate;
        }

        if (requestParameters.studyId !== undefined) {
            queryParameters['studyId'] = requestParameters.studyId;
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
            path: `/v3/studies/open`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetStudiesResponseFromJSON(jsonValue));
    }

    /**
     * These are studies that anyone can join and share their data for the predictor and outcome variables of interest.
     * These are open studies that anyone can join
     */
    async getOpenStudies(requestParameters: GetOpenStudiesRequest): Promise<GetStudiesResponse> {
        const response = await this.getOpenStudiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * If you have enough data, this will be a list of your personal studies, otherwise it will consist of aggregated population studies.
     * Get Personal or Population Studies
     */
    async getStudiesRaw(requestParameters: GetStudiesRequest): Promise<runtime.ApiResponse<GetStudiesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.causeVariableName !== undefined) {
            queryParameters['causeVariableName'] = requestParameters.causeVariableName;
        }

        if (requestParameters.effectVariableName !== undefined) {
            queryParameters['effectVariableName'] = requestParameters.effectVariableName;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        if (requestParameters.includeCharts !== undefined) {
            queryParameters['includeCharts'] = requestParameters.includeCharts;
        }

        if (requestParameters.recalculate !== undefined) {
            queryParameters['recalculate'] = requestParameters.recalculate;
        }

        if (requestParameters.studyId !== undefined) {
            queryParameters['studyId'] = requestParameters.studyId;
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

        if (requestParameters.correlationCoefficient !== undefined) {
            queryParameters['correlationCoefficient'] = requestParameters.correlationCoefficient;
        }

        if (requestParameters.updatedAt !== undefined) {
            queryParameters['updatedAt'] = requestParameters.updatedAt;
        }

        if (requestParameters.outcomesOfInterest !== undefined) {
            queryParameters['outcomesOfInterest'] = requestParameters.outcomesOfInterest;
        }

        if (requestParameters.principalInvestigatorUserId !== undefined) {
            queryParameters['principalInvestigatorUserId'] = requestParameters.principalInvestigatorUserId;
        }

        if (requestParameters.open !== undefined) {
            queryParameters['open'] = requestParameters.open;
        }

        if (requestParameters.joined !== undefined) {
            queryParameters['joined'] = requestParameters.joined;
        }

        if (requestParameters.created !== undefined) {
            queryParameters['created'] = requestParameters.created;
        }

        if (requestParameters.aggregated !== undefined) {
            queryParameters['aggregated'] = requestParameters.aggregated;
        }

        if (requestParameters.downvoted !== undefined) {
            queryParameters['downvoted'] = requestParameters.downvoted;
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
            path: `/v3/studies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetStudiesResponseFromJSON(jsonValue));
    }

    /**
     * If you have enough data, this will be a list of your personal studies, otherwise it will consist of aggregated population studies.
     * Get Personal or Population Studies
     */
    async getStudies(requestParameters: GetStudiesRequest): Promise<GetStudiesResponse> {
        const response = await this.getStudiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * These are studies that you have created.
     * Get studies you have created
     */
    async getStudiesCreatedRaw(requestParameters: GetStudiesCreatedRequest): Promise<runtime.ApiResponse<GetStudiesResponse>> {
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

        if (requestParameters.updatedAt !== undefined) {
            queryParameters['updatedAt'] = requestParameters.updatedAt;
        }

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
            path: `/v3/studies/created`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetStudiesResponseFromJSON(jsonValue));
    }

    /**
     * These are studies that you have created.
     * Get studies you have created
     */
    async getStudiesCreated(requestParameters: GetStudiesCreatedRequest): Promise<GetStudiesResponse> {
        const response = await this.getStudiesCreatedRaw(requestParameters);
        return await response.value();
    }

    /**
     * These are studies that you are currently sharing your data with.
     * Studies You Have Joined
     */
    async getStudiesJoinedRaw(requestParameters: GetStudiesJoinedRequest): Promise<runtime.ApiResponse<GetStudiesResponse>> {
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
            path: `/v3/studies/joined`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetStudiesResponseFromJSON(jsonValue));
    }

    /**
     * These are studies that you are currently sharing your data with.
     * Studies You Have Joined
     */
    async getStudiesJoined(requestParameters: GetStudiesJoinedRequest): Promise<GetStudiesResponse> {
        const response = await this.getStudiesJoinedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get Study
     * Get Study
     */
    async getStudyRaw(requestParameters: GetStudyRequest): Promise<runtime.ApiResponse<Study>> {
        const queryParameters: any = {};

        if (requestParameters.causeVariableName !== undefined) {
            queryParameters['causeVariableName'] = requestParameters.causeVariableName;
        }

        if (requestParameters.effectVariableName !== undefined) {
            queryParameters['effectVariableName'] = requestParameters.effectVariableName;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        if (requestParameters.includeCharts !== undefined) {
            queryParameters['includeCharts'] = requestParameters.includeCharts;
        }

        if (requestParameters.recalculate !== undefined) {
            queryParameters['recalculate'] = requestParameters.recalculate;
        }

        if (requestParameters.studyId !== undefined) {
            queryParameters['studyId'] = requestParameters.studyId;
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
            path: `/v4/study`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StudyFromJSON(jsonValue));
    }

    /**
     * Get Study
     * Get Study
     */
    async getStudy(requestParameters: GetStudyRequest): Promise<Study> {
        const response = await this.getStudyRaw(requestParameters);
        return await response.value();
    }

    /**
     * Anonymously share measurements for specified variables
     * Join a Study
     */
    async joinStudyRaw(requestParameters: JoinStudyRequest): Promise<runtime.ApiResponse<StudyJoinResponse>> {
        const queryParameters: any = {};

        if (requestParameters.studyId !== undefined) {
            queryParameters['studyId'] = requestParameters.studyId;
        }

        if (requestParameters.causeVariableName !== undefined) {
            queryParameters['causeVariableName'] = requestParameters.causeVariableName;
        }

        if (requestParameters.effectVariableName !== undefined) {
            queryParameters['effectVariableName'] = requestParameters.effectVariableName;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

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
            path: `/v3/study/join`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StudyJoinResponseFromJSON(jsonValue));
    }

    /**
     * Anonymously share measurements for specified variables
     * Join a Study
     */
    async joinStudy(requestParameters: JoinStudyRequest): Promise<StudyJoinResponse> {
        const response = await this.joinStudyRaw(requestParameters);
        return await response.value();
    }

    /**
     * I am really good at finding correlations and even compensating for various onset delays and durations of action. However, you are much better than me at knowing if there\'s a way that a given factor could plausibly influence an outcome. You can help me learn and get better at my predictions by pressing the thumbs down button for relationships that you think are coincidences and thumbs up once that make logic sense.
     * Post or update vote
     */
    async postVoteRaw(requestParameters: PostVoteRequest): Promise<runtime.ApiResponse<CommonResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling postVote.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/v3/votes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VoteToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonResponseFromJSON(jsonValue));
    }

    /**
     * I am really good at finding correlations and even compensating for various onset delays and durations of action. However, you are much better than me at knowing if there\'s a way that a given factor could plausibly influence an outcome. You can help me learn and get better at my predictions by pressing the thumbs down button for relationships that you think are coincidences and thumbs up once that make logic sense.
     * Post or update vote
     */
    async postVote(requestParameters: PostVoteRequest): Promise<CommonResponse> {
        const response = await this.postVoteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Make a study and all related measurements publicly visible by anyone
     * Publish Your Study
     */
    async publishStudyRaw(requestParameters: PublishStudyRequest): Promise<runtime.ApiResponse<PostStudyPublishResponse>> {
        const queryParameters: any = {};

        if (requestParameters.causeVariableName !== undefined) {
            queryParameters['causeVariableName'] = requestParameters.causeVariableName;
        }

        if (requestParameters.effectVariableName !== undefined) {
            queryParameters['effectVariableName'] = requestParameters.effectVariableName;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        if (requestParameters.includeCharts !== undefined) {
            queryParameters['includeCharts'] = requestParameters.includeCharts;
        }

        if (requestParameters.recalculate !== undefined) {
            queryParameters['recalculate'] = requestParameters.recalculate;
        }

        if (requestParameters.studyId !== undefined) {
            queryParameters['studyId'] = requestParameters.studyId;
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
            path: `/v3/study/publish`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PostStudyPublishResponseFromJSON(jsonValue));
    }

    /**
     * Make a study and all related measurements publicly visible by anyone
     * Publish Your Study
     */
    async publishStudy(requestParameters: PublishStudyRequest): Promise<PostStudyPublishResponse> {
        const response = await this.publishStudyRaw(requestParameters);
        return await response.value();
    }

}
