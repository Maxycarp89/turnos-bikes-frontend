import React, { useState } from 'react'
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import SearchShift from '../components/SearchShift'
import TableShifts from '../components/TableShifts'

const PanelTurnos = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-4">Panel de Turnos</h2>
    <SearchShift />
    <TableShifts />
  </div>
)

const AdminTurnos = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-4">Administrar Turnos</h2>
    <p className="mb-4 text-sm text-gray-600">Gestiona la cantidad de turnos por horario.</p>
    <TableShifts />
  </div>
)

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Eliminar todas las cookies
    Object.keys(cookies).forEach(cookieName => {
      removeCookie(cookieName, { path: '/' })
    })
    navigate('/login')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-4 border-b">
            <img src={isSidebarOpen?"/logo.png" :"/miniLogo.png"} alt="Logo" className="h-auto mx-auto" />
          </div>

          {/* User Info */}
          <div className="p-4 border-b">
            <p className="text-sm font-medium text-gray-900">{cookies.user}</p>
            <p className="text-xs text-gray-500">{"Suc"+cookies.officeSelected?.BPLName}</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/turnos/panel')}
                  className="w-full flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-50"
                >
                  <span className="material-icons mr-3">calendar_today</span>
                  {isSidebarOpen && <span>Panel de Turnos</span>}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/turnos/admin')}
                  className="w-full flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-50"
                >
                  <span className="material-icons mr-3">settings</span>
                  {isSidebarOpen && <span>Administración</span>}
                </button>
              </li>
            </ul>
          </nav>

          {/* Footer/Controls */}
          <div className="p-4 border-t">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-50 mb-2"
            >
              <span className="material-icons mr-3">
                {isSidebarOpen ? 'chevron_left' : 'chevron_right'}
              </span>
              {isSidebarOpen && <span></span>}
            </button>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center p-2 text-red-600 rounded-lg hover:bg-red-50"
            >
              <span className="material-icons mr-3">logout</span>
              {isSidebarOpen && <span>Cerrar Sesión</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4">
            <h1 className="text-xl font-semibold text-gray-900">
              {location.pathname.includes('/panel') ? 'Panel de Turnos' : 'Administración de Turnos'}
            </h1>
          </div>
        </header>

        <main className="p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <Routes>
              <Route path="panel" element={<PanelTurnos />} />
              <Route path="admin" element={<AdminTurnos />} />
             
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
        


