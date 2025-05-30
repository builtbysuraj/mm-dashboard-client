import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './App.css'
import App from './App.tsx'

const queryClient = new QueryClient()

if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
  console.warn = () => {}
  console.error = () => {}
}

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    {/* <StrictMode> */}
    <App />
    <Toaster richColors />
    {/* </StrictMode> */}
  </QueryClientProvider>
)
