import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import GetQuote from './component/GetQuote/GetQuote';
import ContactUs from './component/ContactUs/ContactUs';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/get-quote' Component={GetQuote} />
        <Route path='/contact-us' Component={ContactUs} />
      </Routes>
    </>
  );
}

export default App;
