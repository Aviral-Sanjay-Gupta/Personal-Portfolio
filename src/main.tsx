import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { loadFull } from 'tsparticles'
import { tsParticles } from '@tsparticles/engine'
import './index.css'
import App from './App.tsx'

loadFull(tsParticles)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
