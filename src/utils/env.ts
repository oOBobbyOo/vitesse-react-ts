/**
 * 获取环境变量
 *
 * @param key 环境变量名（不需要 VITE_ 前缀）
 * @param defaultValue 默认值
 * @returns 环境变量值
 */
export function getEnv(key: string, defaultValue?: string): string {
  // Vite 环境变量必须以 VITE_ 开头
  const viteKey = `VITE_${key.toUpperCase()}`
  const value = import.meta.env[viteKey]

  if (value !== undefined) {
    return value
  }

  if (defaultValue !== undefined) {
    return defaultValue
  }

  throw new Error(`环境变量 ${viteKey} 未定义`)
}

/** 获取当前运行环境 */
export function getEnvMode(): 'development' | 'production' | 'test' {
  return import.meta.env.MODE as 'development' | 'production' | 'test'
}

/** 判断是否为开发环境 */
export function isDevelopment(): boolean {
  return import.meta.env.DEV
}

/** 判断是否为生产环境 */
export function isProduction(): boolean {
  return import.meta.env.PROD
}
