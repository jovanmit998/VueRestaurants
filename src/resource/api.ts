import axios, { AxiosResponse } from "axios";
import {
  AuthTokenResponse,
  SearchIdResponse,
  SearchResponse,
  SearchTokenRequest,
} from "./api.dto";

const apiClient = axios.create({
  baseURL: "https://site.ontopo.work/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAuthToken = (): Promise<AxiosResponse<AuthTokenResponse>> => {
  return apiClient.post("/loginAnonymously");
};

export const getSearchId = (
  token: string,
  body: SearchTokenRequest
): Promise<AxiosResponse<SearchIdResponse>> => {
  return apiClient.post(
    "/search_token",
    {
      criteria: body,
      marketplace_id: "15380287",
      locale: "en",
      geocodes: ["belgrade"],
    },
    {
      headers: {
        token,
      },
    }
  );
};

export const getSearchRequest = (
  token: string,
  searchId: string
): Promise<AxiosResponse<SearchResponse>> => {
  return apiClient.post(
    "/search_request",
    {
      search_id: searchId,
    },
    {
      headers: {
        token,
      },
    }
  );
};
