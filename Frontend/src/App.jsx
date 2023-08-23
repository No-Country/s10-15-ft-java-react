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

function App() {


  return (
    <>
    <BrowserRouter>
    <div className='flex text-black'>
      <SideBar />
      <div className='flex flex-col w-full'>

      <NavBar  />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/inventario' element={<Inventory />} />
        <Route path='/proveedores' element={<Suppliers />} />
        <Route path='/historial' element={<History />} />
        <Route path='/usuarios' element={<Users />} />
        <Route path='/nuevoUsuario' element={<NewUser />} />
        <Route path='/configuracion' element={<Settings />} />
        <Route path='/ayuda' element={<Help />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
