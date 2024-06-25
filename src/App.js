import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/pages/Main";
import Departments from "./Components/pages/departments";
import Services from "./Components/pages/service";
import Purchases from "./Components/pages/purchases";
import OrederDetails from "./Components/pages/orederDetails";
import RecievedRequest from "./Components/pages/recievedRequest";
import Requests from "./Components/pages/requests";
import ReaquestDetails from "./Components/pages/ReaquestDetails";
import RequestAdd from "./Components/pages/requestAdd";
import Chat from "./Components/pages/chat";
import Search from "./Components/pages/Search";
import Contact from "./Components/pages/Contact";
import About from "./Components/pages/About";
import Terms from "./Components/pages/Terms";
import Blogs from "./Components/pages/Blogs";
import BlogDetails from "./Components/pages/BlogDetails";
import HowItWork from "./Components/pages/HowItWork";
import Faq from "./Components/pages/Faq";
import RecivedReqOrder from "./Components/pages/Recived-req-order";


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
          <Route path="/RecievedRequest" element={<RecievedRequest/>} />
          <Route path="Requests" element={<Requests/>} />
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
