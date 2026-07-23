import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ReactNode } from 'react'

import { getEnv, isDevelopment, queryClient } from '@/utils'

export function TanstackReactQuery({ children }: { children: ReactNode }) {
  const queryDevtools = getEnv<boolean>('REACT_QUERY_DEVTOOLS')

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {isDevelopment() && queryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}
