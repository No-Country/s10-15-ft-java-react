import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SideBar } from './components/Sidebar/SideBar'
import { Dashboard } from './components/Dashboard'
import { Help } from './components/Help'
import { Inventory } from './components/Inventory'
import { Users } from './components/Users'
import { Settings } from './components/Settings/Settings'
import { NewUser } from './components/NewUser'
import { NavBar } from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import { useEffect, useState } from 'react'
import { UserContext } from './libs/context/useContext'
import AddItem from './components/AddItem'

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
