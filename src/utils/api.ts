import { ofetch } from 'ofetch'

import { getEnv } from './env'

const baseUrl = getEnv('API_BASE_URL')
const prefix = getEnv('API_PREFIX')

const finalBaseURL = baseUrl ? `${baseUrl}${prefix}` : prefix

export const api = ofetch.create({
  baseURL: finalBaseURL,

  // 全局关闭 ofetch 重试，交给 React Query 处理
  retry: 0,

  // 超时设置（可选）
  timeout: 15000,

  // 请求拦截器
  onRequest({ options }) {
    const token = localStorage.getItem('access_token')
    if (token) {
      options.headers = new Headers(options.headers)
      options.headers.set('Authorization', `Bearer ${token}`)
    }
  },

  // 请求出错拦截器（网络断开等）
  onRequestError({ error }) {
    console.error('[API] 请求失败:', error)
  },

  // 响应错误拦截器：统一处理全局错误
  onResponseError({ response }) {
    const { status } = response

    if (status === 401) {
      localStorage.removeItem('access_token')
      window.location.href = '/login'
      return
    }

    if (status === 403) {
      console.warn('[API] 无权限访问')
    }
    if (status >= 500) {
      console.error('[API] 服务器错误:', response._data)
    }
  },
})
