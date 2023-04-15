import Footer from "./components/footer/footer";
import NavBar from "./components/nav/navBar";
import "bootstrap/dist/css/bootstrap.css";

import "./css/main.css";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Login from "./layouts/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollTop";
// import gitHubblack from "./img/icons/gitHub-black.svg";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:idPost" element={<Project />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/login/:type?" element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
