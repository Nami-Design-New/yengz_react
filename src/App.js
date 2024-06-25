import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Chat from "./Pages/Chat/chat";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Main from "./Pages/Main/Main";
import Contact from "./Pages/Contact/Contact";
import Departments from "./Pages/Departments/departments";
import Faq from "./Pages/Faq/Faq";
import Layout from "./Components/Layout/Layout";
import HowItWork from "./Pages/HowitWork/HowItWork";
import OrederDetails from "./Pages/OrderDetails/orederDetails";
import Purchases from "./Pages/Purchases/purchases";
import ReaquestDetails from "./Pages/ReaquestDetails/ReaquestDetails";
import RecievedRequest from "./Pages/recivedRequest/recievedRequest";
import RecivedReqOrder from "./Pages/RecivedReqOrder/Recived-req-order";
import Terms from "./Pages/Terms/Terms";
import RequestAdd from "./Pages/RequestAdd/requestAdd";
import Requests from "./Pages/Requests/requests";
import Services from "./Pages/Services/service";
import Search from "./Pages/Search/Search";
import "./styles/styleAR.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/Services" element={<Services />} />
          <Route path="departments" element={<Departments />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="/orderDetails" element={<OrederDetails />} />
          <Route path="/RecievedRequest" element={<RecievedRequest />} />
          <Route path="Requests" element={<Requests />} />
          <Route path="ReaquestDetails" element={<ReaquestDetails />} />
          <Route path="/RequestAdd" element={<RequestAdd />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/BlogDetails" element={<BlogDetails />} />
          <Route path="/HowItWork" element={<HowItWork />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/RecivedReqOrder" element={<RecivedReqOrder />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
