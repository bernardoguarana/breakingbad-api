import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header/Index"
import { Router } from "./Router"
import { Footer } from "./components/Footer"
import "./global.css"

function App() {
  
  return (
      <BrowserRouter>     
        <Header/>
        <Router />    
        <Footer/>   
      </BrowserRouter>
  )
}

export default App
