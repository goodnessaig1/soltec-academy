import { Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Home from './components/HomePage/Home';
import Courses from './components/CoursesPage/Courses';
import ProductDesign from './components/CoursesPage/ProductDesign/ProductDesign';
import CyberSecurity from './components/CoursesPage/CyberSecurity/CyberSecurity';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import PaymentGuide from './components/Blog/PaymentGuide';
import ProductDesignPayment from './components/CoursesPage/ProductDesign/ProductDesignPayment';
import CyberSecurityPayment from './components/CoursesPage/CyberSecurity/CyberSecurityPayment';
import PaymentConfirmation from './components/Payment/PaymentConfirmation';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/courses' Component={Courses} />
        <Route path='/courses/product-design' Component={ProductDesign} />
        <Route
          path='/courses/product-design/payment'
          Component={ProductDesignPayment}
        />
        <Route path='/courses/cybersecurity' Component={CyberSecurity} />
        <Route
          path='/courses/cybersecurity/payment'
          Component={CyberSecurityPayment}
        />
        <Route path='/blog' Component={Blog} />
        <Route path='/blog/post' Component={BlogPost} />
        <Route path='/blog/payment-guide' Component={PaymentGuide} />
        <Route path='/payment-confirmation' Component={PaymentConfirmation} />

        <Route path='/about-us' Component={AboutUs} />
      </Routes>
    </>
  );
}

export default App;
