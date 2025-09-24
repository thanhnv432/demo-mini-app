import axios, { AxiosResponse, AxiosError } from "axios";

interface IRequestParams {
  url: string;
  params?: any;
}

interface IOptions {
  timeout?: number;
  headers?: Record<string, string>;
}

interface IApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  code?: number;
  message?: string;
}

// Tạo header cơ bản
const getHeader = (
  isFile = false,
  customHeaders: Record<string, string> = {}
) => {
  const headers: Record<string, string> = {
    "Content-Type": isFile ? "multipart/form-data" : "application/json",
  };
  return { ...headers, ...customHeaders };
};

//===========================Axios Instance===================================
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3000/api",
  timeout: Number(process.env.REACT_APP_DEFAULT_TIME_OUT) || 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor request
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Interceptor response
axiosInstance.interceptors.response.use(
  function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// Xử lý khi mất kết nối mạng
const handleOffline = (): IApiResponse => {
  return {
    data: null,
    status: 0,
    statusText: "Network Error",
    headers: {},
    config: {} as any,
    code: -1,
    message: "Mất kết nối Internet, vui lòng kiểm tra đường truyền",
  };
};

//======================================API Methods===========================================

export const get = async <T = any>(
  requestParams: IRequestParams,
  options?: IOptions
): Promise<AxiosResponse<T>> => {
  if (!window.navigator.onLine) return handleOffline() as any;

  try {
    const response = await axiosInstance.get<T>(requestParams.url, {
      params: requestParams.params,
      timeout:
        options?.timeout || Number(process.env.REACT_APP_DEFAULT_TIME_OUT),
      headers: getHeader(false, options?.headers),
      ...options,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const post = async <T = any>(
  requestParams: IRequestParams,
  options?: IOptions
): Promise<AxiosResponse<T>> => {
  if (!window.navigator.onLine) return handleOffline() as any;

  try {
    const isFile = requestParams.params instanceof FormData;
    const response = await axiosInstance.post<T>(
      requestParams.url,
      requestParams.params,
      {
        timeout:
          options?.timeout || Number(process.env.REACT_APP_DEFAULT_TIME_OUT),
        headers: getHeader(isFile, options?.headers),
        ...options,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const put = async <T = any>(
  requestParams: IRequestParams,
  options?: IOptions
): Promise<AxiosResponse<T>> => {
  if (!window.navigator.onLine) return handleOffline() as any;

  try {
    const isFile = requestParams.params instanceof FormData;
    const response = await axiosInstance.put<T>(
      requestParams.url,
      requestParams.params,
      {
        timeout:
          options?.timeout || Number(process.env.REACT_APP_DEFAULT_TIME_OUT),
        headers: getHeader(isFile, options?.headers),
        ...options,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const patch = async <T = any>(
  requestParams: IRequestParams,
  options?: IOptions
): Promise<AxiosResponse<T>> => {
  if (!window.navigator.onLine) return handleOffline() as any;

  try {
    const isFile = requestParams.params instanceof FormData;
    const response = await axiosInstance.patch<T>(
      requestParams.url,
      requestParams.params,
      {
        timeout:
          options?.timeout || Number(process.env.REACT_APP_DEFAULT_TIME_OUT),
        headers: getHeader(isFile, options?.headers),
        ...options,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async <T = any>(
  requestParams: IRequestParams,
  options?: IOptions
): Promise<AxiosResponse<T>> => {
  if (!window.navigator.onLine) return handleOffline() as any;

  try {
    const response = await axiosInstance.delete<T>(requestParams.url, {
      params: requestParams.params,
      timeout:
        options?.timeout || Number(process.env.REACT_APP_DEFAULT_TIME_OUT),
      headers: getHeader(false, options?.headers),
      ...options,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// Export axios instance để sử dụng trực tiếp nếu cần
export { axiosInstance };

// Export default cho convenience
export default {
  get,
  post,
  put,
  patch,
  delete: deleteData,
  instance: axiosInstance,
};
