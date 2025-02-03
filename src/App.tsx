import { Routes, Route } from "react-router";
import "./App.css";

import HomePage from "./pages/HomePage";
import Managers from "./pages/Mannagers";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Paper from "./pages/Paper";
import License from "./pages/License";
import CheshmAndaz from "./pages/CheshmAndaz";
import Dispaching from "./pages/Dispaching";
import Ability from "./pages/Ability";
import Kahab from "./pages/Kahab";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="HomePage" element={<HomePage />}></Route>

          <Route path="HomePage/paper" element={<Paper />}></Route>
          <Route path="HomePage/License" element={<License />}></Route>
          <Route path="HomePage/CheshmAndaz" element={<CheshmAndaz />}></Route>

          <Route path="HomePage/Dispaching" element={<Dispaching />}></Route>
          <Route path="HomePage/kahab" element={<Kahab />}></Route>
          <Route path="HomePage/Ability" element={<Ability />}></Route>

          <Route path="paper" element={<Paper />}></Route>
          <Route path="License" element={<License />}></Route>
          <Route path="CheshmAndaz" element={<CheshmAndaz />}></Route>

          <Route path="Dispaching" element={<Dispaching />}></Route>
          <Route path="kahab" element={<Kahab />}></Route>
          <Route path="Ability" element={<Ability />}></Route>

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
