import { Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Home from './components/HomePage/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact Component={Home} />
      </Routes>
    </>
  );
}

export default App;
