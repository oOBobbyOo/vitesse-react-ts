import type { FetchOptions } from 'ofetch'

import { api } from './api'

/** 通用 GET 请求 自动传递 React Query 的 signal 以支持请求取消 */
export async function get<T>(
  url: string,
  options?: FetchOptions<'json'> & { signal?: AbortSignal },
): Promise<T> {
  return api<T>(url, {
    method: 'GET',
    ...options,
  })
}

/** 通用 POST 请求 */
export async function post<T>(
  url: string,
  body?: RequestInit['body'] | Record<string, any>,
  options?: FetchOptions<'json'> & { signal?: AbortSignal },
): Promise<T> {
  return api<T>(url, {
    method: 'POST',
    body,
    ...options,
  })
}

/** 通用 PUT 请求 */
export async function put<T>(
  url: string,
  body?: RequestInit['body'] | Record<string, any>,
  options?: FetchOptions<'json'> & { signal?: AbortSignal },
): Promise<T> {
  return api<T>(url, {
    method: 'PUT',
    body,
    ...options,
  })
}

/** 通用 DELETE 请求 */
export async function del<T>(
  url: string,
  options?: FetchOptions<'json'> & { signal?: AbortSignal },
): Promise<T> {
  return api<T>(url, {
    method: 'DELETE',
    ...options,
  })
}
