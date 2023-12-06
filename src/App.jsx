import './App.css'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {

  return (
    <>
      <div className='appMain'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/products' element={<ItemListContainer/>}/>
            <Route path='/products/:category' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
        
      </div>
    </>
  )
}

export default App
