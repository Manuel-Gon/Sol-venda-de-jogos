import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Front-end/router/Router.jsx'
import { GlobalContextProvider } from './Front-end/GlobalContext/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={router}>
    </RouterProvider>
  </GlobalContextProvider>
)