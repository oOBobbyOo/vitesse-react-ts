import { env } from '@/validators/env.validator'

/**
 * 获取自定义环境变量
 *
 * @param key 环境变量名（不需要 VITE_ 前缀）
 * @param defaultValue 默认值
 * @returns 环境变量值
 */
export function getEnv(key: string, defaultValue?: string): string {
  // Vite 环境变量必须以 VITE_ 开头
  const viteKey = `VITE_${key.toUpperCase()}`
  const value = env[viteKey as keyof typeof env]

  if (value !== undefined) {
    return String(value)
  }

  if (defaultValue !== undefined) {
    return defaultValue
  }

  throw new Error(`环境变量 ${viteKey} 未定义`)
}

/** 获取当前运行环境 */
export function getEnvMode(): 'development' | 'production' | 'test' {
  return env.MODE
}

/** 判断是否为开发环境 */
export function isDevelopment(): boolean {
  return env.DEV
}

/** 判断是否为生产环境 */
export function isProduction(): boolean {
  return env.PROD
}
