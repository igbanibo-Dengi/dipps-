import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Services from './Componenets/Servicees/Services';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
