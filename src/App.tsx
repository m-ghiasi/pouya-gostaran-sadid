import { Routes, Route } from "react-router";
import "./App.css";

import HomePage from "./pages/HomePage";
import Managers from "./pages/Mannagers";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="HomePage" element={<HomePage />}></Route>

          <Route path="Managers" element={<Managers />}></Route>
          <Route path="Services" element={<Services />}></Route>
          <Route path="ContactUs" element={<ContactUs />}></Route>
          <Route path="About" element={<About />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
