import axios, { AxiosError, AxiosResponse } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: `http://localhost:3000`,
});

interface ErrorType {
  data: {
    error: boolean,
    status: number,
    msg: string
  }
}
interface CustomAxiosError<T> extends AxiosError {
  response?: AxiosResponse<T>
}

const axiosBaseQuery =
  (): BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig["method"];
  }> =>
    async ({ url, method }) => {
      try {
        const res = await instance({ url, method });
        return { data: res.data.data };
      } catch (axiosError) {
        const err = axiosError as CustomAxiosError<ErrorType["data"]>;
        if (err.response && err.response.status === 404) {
          throw new Error("User not found");
        }
        return {
          error: err.response?.data.msg,
        };
      }
    };

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: [
    "GETTOTAL",
    "GETClASS",
  ],
  endpoints(build) {
    return {
      getTotalData: build.query({
				query: () => ({
					url: `/api/totaldata`,
					method: "get",
				}),
				providesTags: ["GETTOTAL"],
			}),
      getClassData: build.query({
				query: () => ({
					url: `/api/classdata`,
					method: "get",
				}),
				providesTags: ["GETClASS"],
			}),
    }
  }
})

export const {
  useGetTotalDataQuery,
  useGetClassDataQuery
} = api