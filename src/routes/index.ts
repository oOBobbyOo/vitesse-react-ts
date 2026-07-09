import { createBrowserRouter } from 'react-router'

import RootLayout from '../layouts/RootLayout'
import App from '../pages/App/App'
import NotFound from '../pages/NotFound'

let router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: '*', Component: NotFound },
    ],
  },
])

export default router
