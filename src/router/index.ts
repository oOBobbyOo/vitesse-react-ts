import { createBrowserRouter } from 'react-router'

import RootLayout from '@/layouts/RootLayout'
import NotFound from '@/pages/NotFound'
import Welcome from '@/pages/Welcome'

let router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Welcome },
      { path: '*', Component: NotFound },
    ],
  },
])

export default router
