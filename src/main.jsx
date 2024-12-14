import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';

import { RouterProvider } from 'react-router-dom'
import { routers } from './Routers/Routers.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ScrollButton from './components/ScrollButton/ScrollButton.jsx';
import ThemeProvider from './providers/ThemeProvider.jsx';
// Create a client
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
<ThemeProvider>
    <AuthProviders>
   
      <HelmetProvider>
        <ScrollButton></ScrollButton>
<RouterProvider router={routers}>

</RouterProvider>
</HelmetProvider>

</AuthProviders>
</ThemeProvider>
</QueryClientProvider>
  </React.StrictMode>,
)
