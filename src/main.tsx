import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.tsx'

// Inicializar tema antes del render: localStorage -> 'dark' (por defecto)
(() => {
  try {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const theme: 'light' | 'dark' = saved || 'dark'
    document.documentElement.setAttribute('data-theme', theme)
  } catch {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
