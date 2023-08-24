import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SideBar } from './components/SideBar'
import { Dashboard } from './components/Dashboard'
import { Help } from './components/Help'
import { Inventory } from './components/Inventory'
import { Suppliers } from './components/Suppliers'
import { History } from './components/History'
import { Users } from './components/Users'
import { Settings } from './components/Settings'
import { NewUser } from './components/NewUser'
import { NavBar } from './components/NavBar'
import Login from './components/Login'
import { useEffect, useState } from 'react'
import { UserContext } from './libs/context/useContext'
import AddItem from './components/addItem'

function App() {
  //logical part of user logged
  const [log, setLog] = useState(localStorage.getItem('log'))

  useEffect(() => {
    setLog(localStorage.getItem('log') ?? 'false')
  }, [])
  useEffect(() => {
    localStorage.setItem('log', log)
  }, [log])
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          log,
          setLog
        }}
      >
        <div className='flex text-black'>
          {
            //diferencial rendering if user are logged
            log === 'true' ? (
              <>
                <SideBar />
                <div className='flex flex-col w-full'>
                  <NavBar />
                  <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/inventario' element={<Inventory />} />
                    <Route path='/AgregarItem' element={<AddItem />} />
                    <Route path='/proveedores' element={<Suppliers />} />
                    <Route path='/historial' element={<History />} />
                    <Route path='/usuarios' element={<Users />} />
                    <Route path='/nuevoUsuario' element={<NewUser />} />
                    <Route path='/configuracion' element={<Settings />} />
                    <Route path='/ayuda' element={<Help />} />
                  </Routes>
                </div>
              </>
            ) : (
              <Login />
            )
          }
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
