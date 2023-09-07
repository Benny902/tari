import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Collector from './pages/Collector'
import Customer from './pages/Customer'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App" dir="rtl"> {/*rtl = right to left for hebrew*/}
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>

            <Route 
              path="/" 
              element={<Home />} 
            />

             <Route 
              path="/collector" 
              element={<Collector />} 
            />

              <Route 
              path="/customer" 
              element={<Customer />} 
            />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

