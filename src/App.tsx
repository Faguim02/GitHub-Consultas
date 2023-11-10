import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import UserView from './pages/UserView'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:name' element={<UserView/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
