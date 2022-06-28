import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Currency from "./components/Currency/Currency";
import Converter from "./components/Converter/Converter";
function App() {

   
  const getData = async(url) => {
    const res = await fetch(url)
    if(!res.ok) {
       alert("Error!!!!")
    }
    return await res.json()
 }



  return (
    <div className="App"> 
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Currency getData={getData}/>}/>
        <Route path='/cur' element={<Converter getData={getData}/>}/>
      </Routes>
      </BrowserRouter>
   
      
   
    </div>
  );
}

export default App;
