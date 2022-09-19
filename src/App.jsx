import React from "react"
import GlobalStyle from "./globalstyles";
import Homepage from "./pages/Homepage";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import { BrowserRouter , Route , Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
