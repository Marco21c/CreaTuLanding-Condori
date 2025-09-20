import './App.css'
import NavBar from './components/navbarComponents'
import Welcome from './components/ItemListContainer'
function App() {
  const userName = prompt("Ingresa tu nombre: ")
  return (
    <>   
        <NavBar/>
        <Welcome name={userName}/>
    </>
  )
}

export default App
