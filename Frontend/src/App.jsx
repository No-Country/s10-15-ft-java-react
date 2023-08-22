import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { SideBar } from './components/SideBar'

function App() {


  return (
    <>
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    </>
  )
}

export default App
