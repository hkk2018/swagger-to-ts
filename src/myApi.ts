/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserUpdate {
  id?: string;
  email?: string;
  displayName?: string;
  domainId?: string;
  disabled?: boolean;
}

export interface UcpUserVO {
  id?: string;
  account?: string;
  email?: string;
  displayName?: string;
  domainId?: string;
  disabled?: boolean;
  /** @format int64 */
  createdTime?: number;
  /** @format int64 */
  updatedTime?: number;
  updaterId?: string;
}

export interface UserLoginVO {
  id?: string;
  account?: string;
  email?: string;
  displayName?: string;
  domainId?: string;
  disabled?: boolean;
  /** @format int64 */
  createdTime?: number;
  /** @format int64 */
  updatedTime?: number;
  updaterId?: string;
  accessToken?: string;
  tokenType?: string;
  refreshToken?: string;
  /** @format int64 */
  expiresIn?: number;
  scope?: string;
  jti?: string;
  authorities?: string[];
}

export interface UserQuery {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  account?: string;
  email?: string;
  domainId?: string;
  enabled?: boolean;
}

export interface PageUcpUserVO {
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int32 */
  size?: number;
  content?: UcpUserVO[];
  /** @format int32 */
  number?: number;
  sort?: Sort;
  pageable?: PageableObject;
  /** @format int32 */
  numberOfElements?: number;
  first?: boolean;
  last?: boolean;
  empty?: boolean;
}

export interface PageableObject {
  /** @format int64 */
  offset?: number;
  sort?: Sort;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  paged?: boolean;
  unpaged?: boolean;
}

export interface Sort {
  empty?: boolean;
  sorted?: boolean;
  unsorted?: boolean;
}

export interface TenantMemberProfileVO {
  tenantId?: string;
  virtImageIds?: string[];
  virtOsSoftwareIds?: string[];
  containerImageNames?: string[];
  containerCreate?: boolean;
  containerUpdate?: boolean;
  containerQuery?: boolean;
  containerDelete?: boolean;
  manager?: boolean;
  user?: boolean;
}

export interface TenantMemberVO {
  tenantId?: string;
  userVO?: UcpUserVO;
  profile?: TenantMemberProfileVO;
}

export interface TenantVO {
  id: string;
  name: string;
  ownerUuid?: string;
  description?: string;
  members?: TenantMemberVO[];
  virtImageIds?: string[];
  virtOsSoftwareIds?: string[];
  containerImageNames?: string[];
  virtProjectName?: string;
  containerProjectName?: string;
  gcpProjectName?: string;
  gcpId?: string;
  /** @format int32 */
  maxVms?: number;
  /** @format int32 */
  maxVirtCpus?: number;
  /** @format int32 */
  maxVirtGpus?: number;
  /** @format int64 */
  maxVirtRamMB?: number;
  /** @format int32 */
  maxVolumes?: number;
  /** @format int64 */
  maxBlockStorageGB?: number;
  /** @format int32 */
  maxFloatingIps?: number;
  /** @format int32 */
  maxContainers?: number;
  /** @format int32 */
  maxContainerCpus?: number;
  /** @format int32 */
  maxLimitContainerCpus?: number;
  /** @format int32 */
  maxContainerGpus?: number;
  /** @format int32 */
  maxLimitContainerGpus?: number;
  /** @format int64 */
  maxContainerRamMB?: number;
  /** @format int64 */
  maxLimitContainerRamMB?: number;
  /** @format int32 */
  maxPVs?: number;
  /** @format int64 */
  maxContainerPVGB?: number;
  /** @format int64 */
  maxContainerEphemeralStorageGB?: number;
  /** @format int64 */
  maxLimitContainerEphemeralStorageGB?: number;
  /** @format int64 */
  maxContainerBandwidthDownloadMB?: number;
  /** @format int64 */
  maxContainerBandwidthUploadMB?: number;
  defaultTenantUserId?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://10.7.181.230:8080" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title UCP PAAS AWS API
 * @version v1.0.0
 * @baseUrl http://10.7.181.230:8080
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  user = {
    /**
     * @description Find UCP users by conditions
     *
     * @tags user-controller
     * @name FindByCondition
     * @request GET:/user
     * @secure
     */
    findByCondition: (
      query: {
        query: UserQuery;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageUcpUserVO, any>({
        path: `/user`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Update a UCP user
     *
     * @tags user-controller
     * @name Update
     * @request PUT:/user
     * @secure
     */
    update: (data: UserUpdate, params: RequestParams = {}) =>
      this.request<UcpUserVO, any>({
        path: `/user`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  visitor = {
    /**
     * No description
     *
     * @tags visitor-controller
     * @name Login
     * @request GET:/visitor/login
     */
    login: (
      query: {
        account: string;
        /** The encrypted password generated by invoking /visitor/encrypt */
        password: string;
        /**
         * Set to true if the request is redirected; otherwise, leave it empty.
         * @default false
         */
        redirected?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserLoginVO, any>({
        path: `/visitor/login`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags visitor-controller
     * @name Greeting
     * @request GET:/visitor/greeting
     */
    greeting: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/visitor/greeting`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags visitor-controller
     * @name Encrypt
     * @request GET:/visitor/encrypt
     */
    encrypt: (
      query: {
        account: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/visitor/encrypt`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  tenant = {
    /**
     * @description Find all tenants that are owned by current user
     *
     * @tags tenant-controller
     * @name ListTenantsOwnedByCurrentUser
     * @request GET:/tenant/owner/me
     * @secure
     */
    listTenantsOwnedByCurrentUser: (
      query: {
        /** Set to true if the returned tenants should contain tenant members' data if any. Otherwise set to false */
        showMembers: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantVO[], any>({
        path: `/tenant/owner/me`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Find all tenants that are owned by the specified owner
     *
     * @tags tenant-controller
     * @name ListTenantsOwnedByUserId
     * @request GET:/tenant/owner/find
     * @secure
     */
    listTenantsOwnedByUserId: (
      query: {
        /** The id of the tenant owner to find the tenant data */
        ownerId: string;
        /** Set to true if the returned tenants should contain tenant members' data if any. Otherwise set to false */
        showMembers: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantVO[], any>({
        path: `/tenant/owner/find`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Find the tenant member with the specified tenant id and the member id of the current user. If the tenant id is not specified, find all tenant members with the member id of the current user.
     *
     * @tags tenant-controller
     * @name FindTenantMemberByCurrentUser
     * @request GET:/tenant/member/me
     * @secure
     */
    findTenantMemberByCurrentUser: (
      query?: {
        /** The id of the tenant used to find the tenant. If the value is not specified, find all tenant members with the member id of the current user. */
        tenantId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantMemberVO[], any>({
        path: `/tenant/member/me`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Find the tenant member with the specified tenant id and the member id. If the tenant id is not specified, find all tenant members with the specified member id.
     *
     * @tags tenant-controller
     * @name FindTenantMemberByMemberId
     * @request GET:/tenant/member/find
     * @secure
     */
    findTenantMemberByMemberId: (
      query: {
        /** The id of the member used to find the tenant member */
        memberId: string;
        /** The id of the tenant used to find the tenant. If the value is not specified, find all tenant members with the specified member id. */
        tenantId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantMemberVO[], any>({
        path: `/tenant/member/find`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Check if the specified member is one of the tenant members is in the specified tenant
     *
     * @tags tenant-controller
     * @name ExistingTenantMemberInTenant
     * @request GET:/tenant/member/exists
     * @secure
     */
    existingTenantMemberInTenant: (
      query: {
        /** The id of the member used to find the tenant member */
        memberId: string;
        /** The id of the tenant used to find the tenant */
        tenantId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/tenant/member/exists`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Check if the current user is one of the tenant members in the specified tenant
     *
     * @tags tenant-controller
     * @name ExistingTenantMemberInTenantByCurrentUser
     * @request GET:/tenant/member/exists/me
     * @secure
     */
    existingTenantMemberInTenantByCurrentUser: (
      query: {
        /** The id of the tenant used to find the tenant */
        tenantId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/tenant/member/exists/me`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Find the tenant by tenant id
     *
     * @tags tenant-controller
     * @name FindTenantById
     * @request GET:/tenant/find
     * @secure
     */
    findTenantById: (
      query: {
        /** The id of the tenant used to find the tenant data */
        tenantId: string;
        /** Set to true if the returned tenant should contain tenant members' data if any. Otherwise set to false */
        showMembers: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<TenantVO, any>({
        path: `/tenant/find`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
