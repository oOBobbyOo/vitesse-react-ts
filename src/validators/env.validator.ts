import { z } from 'zod'

/**
 * 环境变量验证 Schema
 *
 * 使用 zod 对 import.meta.env 进行运行时验证， 确保所有必需的环境变量都已正确配置。
 */
export const envSchema = z.object({
  // ========== Vite 内置变量 ==========
  /** 运行模式 */
  MODE: z.enum(['development', 'production', 'test']),
  /** 是否为开发环境 */
  DEV: z.boolean(),
  /** 是否为生产环境 */
  PROD: z.boolean(),
  /** 是否为服务端渲染 */
  SSR: z.boolean(),
  /** 应用基础路径 */
  BASE_URL: z.string(),

  // ========== 自定义 VITE_ 变量 ==========
  /** 应用标题 */
  VITE_APP_TITLE: z.string().default('Vitesse React TS'),
  /** API 基础地址 */
  VITE_API_BASE_URL: z.string(),
  /** API 前缀 */
  VITE_API_PREFIX: z.string().default('/api'),
})

/**
 * 验证后的环境变量
 *
 * 验证失败时抛出错误并终止应用。
 */
export const env = envSchema.parse(import.meta.env)

/** 环境变量类型 */
export type Env = z.infer<typeof envSchema>
