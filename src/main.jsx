import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HompePage from './routes/homepage/Homepage'
import ChatPage from './routes/chatPage/ChatPage'
import DashboardPage from './routes/dashboardPage/DashboardPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HompePage />,
  },
  {
    path: '/dashboard',
    children : [
      {path: "/dashboard", element: <DashboardPage/>},
      {path: "/dashboard/chats/:id", element: <ChatPage/>}]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
