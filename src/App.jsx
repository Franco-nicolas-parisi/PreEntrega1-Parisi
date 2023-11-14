import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <>
      <div className='appMain'>
        <Navbar/>
        <ItemListContainer greeting={`Productos Destacados`}/>
      </div>
    </>
  )
}

export default App
