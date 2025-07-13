import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import LoadingScreen from './components/layout/LoadingScreen.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './config/queryClient.ts'
import App from './App.tsx'
import store from './store/index.tsx'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import 'nprogress/nprogress.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen />} >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
      <Toaster
        position="bottom-left"
      />
      {/* Fake element (for apply tailwindcss dynamic class ) */}
      <div className="z-30"></div>
    </Suspense>
  </StrictMode>,
)
