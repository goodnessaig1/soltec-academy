import { Route, Routes, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import './components/Engineering/engineering.css';
import Home from './components/HomePage/Home';
import Courses from './components/CoursesPage/Courses';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import PaymentGuide from './components/Blog/PaymentGuide';
import PaymentConfirmation from './components/Payment/PaymentConfirmation';
import AboutUs from './components/AboutUs/AboutUs';
import WorkSpace from './components/WorkSpace/WorkSpace';
import BookSpace from './components/WorkSpace/BookSpace';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AdminCourses from './components/Admin/Courses/Courses';
import { useEffect } from 'react';
import AddCourses from './components/Admin/Courses/AddCourse';
import BlogManagement from './components/Admin/Blog/BlogManagement';
import BlogPostAdmin from './components/Admin/Blog/BlogPost';
import AddBlog from './components/Admin/Blog/AddBlog';
import AdminSponsors from './components/Admin/Sponsors/Sponsors';
import AddSponsor from './components/Admin/Sponsors/AddSponsor';
import AdminTestimonials from './components/Admin/Testimonials/Testimonials';
import AddTestimonial from './components/Admin/Testimonials/AddTestimonial';
import AdminPayment from './components/Admin/Payment/AdminPayment';
import EngineeringDashboard from './components/Engineering/Dashboard/EngineeringDashboard';
import SingleCourse from './components/CoursesPage/SingleCourse/SingleCourse';
import CoursePayment from './components/CoursesPage/SingleCourse/CoursePayment';
import Payment from './components/CoursesPage/SingleCourse/PaymentSuccess';
import VerifyPayment from './components/CoursesPage/SingleCourse/VerifyPayment';
import GetQuote from './components/Engineering/GetQuote/GetQuote';
import ContactUs from './components/Engineering/ContactUs/ContactUs';
import WorkspaceVerifyPayment from './components/WorkSpace/WorkspacePayment';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/courses' Component={Courses} />
        <Route path='/courses/:id/:courseTitle' Component={SingleCourse} />
        <Route
          path='/courses/:id/:courseTitle/payment'
          Component={CoursePayment}
        />
        <Route
          path='/courses/payment/verify/:reference'
          Component={VerifyPayment}
        />

        <Route path='/courses/payment' Component={Payment} />

        <Route path='/book-workspace' Component={WorkSpace} />
        <Route path='/book-workspace/bookspace' Component={BookSpace} />
        <Route
          path='/book-workspace/payment/verify/:reference'
          Component={WorkspaceVerifyPayment}
        />

        <Route path='/blog' Component={Blog} />
        <Route path='/blog/post' Component={BlogPost} />
        <Route path='/blog/payment-guide' Component={PaymentGuide} />
        <Route path='/payment-confirmation' Component={PaymentConfirmation} />

        <Route path='/about-us' Component={AboutUs} />

        <Route path='/admin/dashboard' Component={Dashboard} />
        <Route path='/admin/courses' Component={AdminCourses} />
        <Route path='/admin/courses/add-course' Component={AddCourses} />
        <Route path='/admin/blogs' Component={BlogManagement} />
        <Route path='/admin/blogs/post' Component={BlogPostAdmin} />
        <Route path='/admin/blogs/add-blog' Component={AddBlog} />
        <Route path='/admin/sponsors' Component={AdminSponsors} />
        <Route path='/admin/sponsors/add-sponsor' Component={AddSponsor} />
        <Route path='/admin/testimonials' Component={AdminTestimonials} />
        <Route
          path='/admin/testimonials/add-testimonial'
          Component={AddTestimonial}
        />
        <Route path='/admin/payments' Component={AdminPayment} />

        <Route path='/engineering/dashboard' Component={EngineeringDashboard} />
        <Route path='/engineering/get-quote' Component={GetQuote} />
        <Route path='/engineering/contact-us' Component={ContactUs} />
      </Routes>
    </>
  );
}

export default App;
