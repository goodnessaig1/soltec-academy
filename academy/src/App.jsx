import { useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import Courses from "./components/Courses/Courses";
import SingleCourse from "./components/Courses/SingleCourse/SingleCourse";
import CoursePayment from "./components/Courses/SingleCourse/CoursePayment";
import VerifyPayment from "./components/Courses/SingleCourse/VerifyPayment";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import BookSpace from "./components/WorkSpace/BookSpace";
import WorkspaceVerifyPayment from "./components/WorkSpace/WorkspacePayment";
import SingleBlogPost from "./components/Blog/SingleBlogPost";
import PaymentGuide from "./components/Blog/PaymentGuide";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";
import ContactUsAcademy from "./components/ContactUs/ContactUs";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import AdminCourses from "./components/Admin/Courses/Courses";
import AddCourses from "./components/Admin/Courses/AddCourse";
import AuthRoutes from "./components/Auth/AuthRoute";
import { useAuth } from "./components/Context/AuthContext";
import SignIn from "./components/Admin/SignIn/SignIn";
import Cohorts from "./components/Admin/Courses/Cohorts";
import EditCourse from "./components/Admin/Courses/EditCourse";
import BlogManagement from "./components/Admin/Blog/BlogManagement";
import EditBlogPost from "./components/Admin/Blog/EditBlogPost";
import BlogPostAdmin from "./components/Admin/Blog/BlogPost";
import AddBlog from "./components/Admin/Blog/AddBlog";
import EditTestimonial from "./components/Admin/Testimonials/EditTestimonial";
import AdminTestimonials from "./components/Admin/Testimonials/Testimonials";
import AddTestimonial from "./components/Admin/Testimonials/AddTestimonial";
import AdminSponsors from "./components/Admin/Sponsors/Sponsors";
import AddSponsor from "./components/Admin/Sponsors/AddSponsor";
import EditSponsor from "./components/Admin/Sponsors/EditSponsor";
import AdminPayment from "./components/Admin/Payment/AdminPayment";
import Newsletter from "./components/Admin/Newsletter/Newsletter";
import Settings from "./components/Admin/Settings/Settings";
import Register from "./components/Admin/Register/Register";
import AdminWorkspace from "./components/Admin/Workspace/Workspace";
import Terms from "./components/Terms_Conditions/Terms";

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/courses" exact Component={Courses} />
        <Route path="/courses/:id/:courseTitle" Component={SingleCourse} />
        <Route
          path="/courses/:id/:courseTitle/payment"
          Component={CoursePayment}
        />
        <Route
          path="/courses/payment/verify/:reference"
          Component={VerifyPayment}
        />

        <Route path="/book-workspace" Component={WorkSpace} />
        <Route path="/book-workspace/bookspace" Component={BookSpace} />
        <Route
          path="/book-workspace/payment/verify/:reference"
          Component={WorkspaceVerifyPayment}
        />

        <Route path="/blog" Component={Blog} />
        <Route path="/blog/post" Component={BlogPost} />
        <Route path="/blog/:id/:author/:title" Component={SingleBlogPost} />
        <Route path="/blog/payment-guide" Component={PaymentGuide} />

        <Route path="/contact-us" Component={ContactUsAcademy} />
        <Route path="/terms-conditions" Component={Terms} />

        {/* Admin */}
        <Route element={<AuthRoutes />}>
          <Route element={<Dashboard />} path="/admin/dashboard" exact />
          <Route path="/admin/courses" Component={AdminCourses} />
          <Route path="/admin/courses/add-course" Component={AddCourses} />
          <Route path="/admin/courses/cohorts" Component={Cohorts} />
          <Route
            path="/admin/courses/edit-course/:id/:title"
            Component={EditCourse}
          />
          <Route path="/admin/blogs" Component={BlogManagement} />
          <Route path="/admin/blogs/post" Component={BlogPostAdmin} />
          <Route path="/admin/blogs/add-blog" Component={AddBlog} />
          <Route path="/admin/blogs/edit-blog/:id" Component={EditBlogPost} />

          <Route path="/admin/workspace" Component={AdminWorkspace} />

          <Route path="/admin/testimonials" Component={AdminTestimonials} />
          <Route
            path="/admin/testimonials/add-testimonial"
            Component={AddTestimonial}
          />
          <Route
            path="/admin/testimonials/edit-testimonial/:id"
            Component={EditTestimonial}
          />
          <Route path="/admin/sponsors" Component={AdminSponsors} />
          <Route path="/admin/sponsors/add-sponsor" Component={AddSponsor} />
          <Route
            path="/admin/sponsors/edit-sponsor/:id"
            Component={EditSponsor}
          />
          <Route path="/admin/payments" Component={AdminPayment} />

          <Route path="/admin/newsletter" Component={Newsletter} />

          <Route path="/admin/create-admin" Component={Register} />

          <Route path="/admin/settings" Component={Settings} />
        </Route>

        <Route
          path="/admin/sign-in"
          element={
            user && user !== null ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <SignIn />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
