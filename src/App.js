import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Order from './Pages/OrderOnline';
import Reservations from './Pages/Reservations';
import Navbar from './Components/Navbar';
import Head from './Components/Head';
import './App.css';

const App = () => {
 return (
    <>
      <Head />
      <body>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
       </body>
    </>
 );
};

export default App;