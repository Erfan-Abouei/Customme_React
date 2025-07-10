import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import store from './store/index.tsx'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import 'nprogress/nprogress.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </StrictMode>,
)
