import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Chats from "./routes/Chats";
import Cart from "./routes/Cart";
import Profile from "./routes/Profile";
import ProjectDetails from "./routes/ProjectDetails";
import Purchases from "./routes/Purchases";
import Categories from "./routes/Categories";
import EditProfile from "./features/profile/EditProfile";
import Login from "./features/auth/login/Login";
import AddServices from "./features/services/AddServices";
import VerifyPhone from "./features/auth/verification/VerifyPhone";
import Register from "./features/auth/register/Register";
import ForgetPassword from "./features/auth/resetPassword/ForgetPassword";
import VerifyIdentity from "./features/auth/verification/VerifyIdentity";
import OrderDetails from "./routes/OrderDetails";
import RecievedOrders from "./routes/RecievedOrders";
import Terms from "./routes/Terms";
import Notifcations from "./routes/Notifcations";
import Projects from "./routes/Projects";
import ServiceDetails from "./routes/ServiceDetails";
import Services from "./routes/Services";
import ProjectsOrders from "./routes/ProjectsOrders";
import ProjectsOrdersDetails from "./routes/ProjectsOrdersDetails";
import Privacy from "./routes/Privacy";
import AddProject from "./routes/AddProject";
import AboutPreview from "./routes/AboutPreview";
import SubCategories from "./routes/SubCategories";
import Complaints from "./routes/Complaints";
import MyCollections from "./routes/MyCollections";
import MyCollection from "./routes/MyCollection";
import BestFreeLancers from "./routes/BestFreeLancers";
import ErrorPage from "./routes/ErrorPage";
import Blogs from "./routes/Blogs";
import BlogDetails from "./routes/BlogDetails";
import Portfolios from "./routes/Portfolios";
import CommunityPosts from "./routes/CommunityPosts";
import CommunitySubjectDetails from "./routes/CommunitySubjectDetails";
import MyBids from "./routes/MyBids";
import Balance from "./routes/Balance";
import ManageAccounts from "./routes/ManageAccounts";
import MyBidDetails from "./routes/MyBidDetails";

const routesConfig = [
  // main routes
  { path: "/", element: <Home />, index: true },
  { path: "*", element: <ErrorPage /> },

  // auth routes
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forget-password", element: <ForgetPassword /> },

  // category routes
  { path: "/categories", element: <Categories /> },
  { path: "/categories/:id", element: <SubCategories /> },

  // service routes
  { path: "/services", element: <Services /> },
  { path: "/services/:id", element: <ServiceDetails /> },
  { path: "/add-service", element: <AddServices />, protected: true },
  { path: "/edit-service/:id", element: <AddServices />, protected: true },
  { path: "/cart", element: <Cart />, protected: true },
  { path: "/purchases", element: <Purchases />, protected: true },
  { path: "/purchases/:id", element: <OrderDetails />, protected: true },
  { path: "/recieved-orders", element: <RecievedOrders />, protected: true },
  { path: "/recieved-orders/:id", element: <OrderDetails />, protected: true },

  // project routes
  { path: "/projects", element: <Projects /> },
  { path: "/projects/:id", element: <ProjectDetails /> },
  { path: "/add-project", element: <AddProject />, protected: true },
  { path: "/edit-project/:id", element: <AddProject />, protected: true },
  { path: "/projects-orders", element: <ProjectsOrders />, protected: true },
  {
    path: "/projects-orders/:id",
    element: <ProjectsOrdersDetails />,
    protected: true,
  },

  // profile routes
  { path: "/profile", element: <Profile />, protected: true },
  { path: "/profile/:id", element: <Profile /> },
  { path: "/edit-profile", element: <EditProfile />, protected: true },
  { path: "/verify-phone", element: <VerifyPhone />, protected: true },
  { path: "/my-collections", element: <MyCollections />, protected: true },
  { path: "/my-collections/:id", element: <MyCollection />, protected: true },
  { path: "/chat", element: <Chats />, protected: true },
  { path: "/bids", element: <MyBids />, protected: true },
  { path: "/bids/:id", element: <MyBidDetails />, protected: true },
  { path: "/verify-identity", element: <VerifyIdentity />, protected: true },
  { path: "/notifications", element: <Notifcations />, protected: true },
  { path: "/balance", element: <Balance />, protected: true },
  { path: "/manage-accounts", element: <ManageAccounts />, protected: true },

  // community routes
  { path: "/community/:name", element: <CommunityPosts /> },
  { path: "/community/:name/:id", element: <CommunitySubjectDetails /> },

  // freelancers routes
  { path: "/freelancers", element: <BestFreeLancers /> },
  { path: "/portfolios", element: <Portfolios /> },

  // support routes
  { path: "/complaints-suggestions", element: <Complaints />, protected: true },
  { path: "/contact", element: <Contact /> },

  // landing routes
  { path: "/about/:id", element: <About /> },
  { path: "/about/preview/:id", element: <AboutPreview /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/blogs/:id", element: <BlogDetails /> },
  { path: "/privacy-policy", element: <Privacy /> },
  { path: "/terms-conditions", element: <Terms /> },
];

export default routesConfig;
