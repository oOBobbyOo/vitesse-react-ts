import { RouterProvider } from 'react-router'

import { TanstackReactQuery } from '@/providers/tanstack-react-query'
import router from '@/router'

function App() {
  return (
    <TanstackReactQuery>
      <RouterProvider router={router} />
    </TanstackReactQuery>
  )
}

export default App
