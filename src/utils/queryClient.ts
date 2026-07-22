import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 全局默认重试 3 次（只针对 useQuery）
      retry: 3,

      // 重试延迟：指数退避 (1s → 2s → 4s)
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

      staleTime: 5 * 60 * 1000, // 5 分钟
    },
    mutations: {
      // mutation 默认不重试（POST/PUT/DELETE 重试可能产生副作用）
      retry: 0,
    },
  },
})
