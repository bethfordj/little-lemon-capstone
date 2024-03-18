import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Order from './Pages/OrderOnline';
import Reservations from './Pages/Reservations';
import Navbar from './Components/Navbar';
import './App.css';

const App = () => {
 return (
    <>
      <Helmet>
        <title>Little Lemon Restaurant</title>
        <meta name="description" content="The Little Lemon Restaurant's site for reading the menu, ordering food, making reservations, and checking your account."/>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:description" content="The Little Lemon Restaurant's site for reading the menu, ordering food, making reservations, and checking your account."/>
        <meta name="og:image" content="src/assets/restaurant.jpg"/>
      </Helmet>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
 );
};

export default App;