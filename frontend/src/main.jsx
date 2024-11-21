import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/User.jsx'
import AttendanceProvider from './context/Attendance.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <AttendanceProvider>
    <App />
      </AttendanceProvider>
    </UserProvider>
  </StrictMode>,
)
