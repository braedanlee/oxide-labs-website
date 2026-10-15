import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()

  const recoveryKey = 'oxide-preload-recovery'
  if (sessionStorage.getItem(recoveryKey)) {
    sessionStorage.removeItem(recoveryKey)
    return
  }

  sessionStorage.setItem(recoveryKey, '1')
  window.location.reload()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
