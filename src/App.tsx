import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import ZpedidosPage from "./pages/ZpedidosPage";
import Footer from "./components/Footer";
import { Desktop } from "./pages/Desktop"; // importar Desktop
import { GdAayra } from "./pages/GdAayra";
import { GdPmi } from "./pages/GdPmi";
import { GdSmitocap } from "./pages/GdSmitocap";
import { GdTentstacle } from "./pages/GdTentstacle";
import { GdRued } from "./pages/GdRued";
import { GdSydney } from "./pages/GdSydney";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Desktop />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/portfolio/zpedidos" element={<ZpedidosPage />} />
            <Route path="/portfolio/aayra" element={<GdAayra />} />
            <Route path="/portfolio/pmiwa" element={<GdPmi />} />
            <Route path="/portfolio/smitocap" element={<GdSmitocap />} />
            <Route path="/portfolio/tentstacle" element={<GdTentstacle />} />
            <Route path="/portfolio/rudeglasses" element={<GdRued />} />
            <Route path="/portfolio/sydneyclothes" element={<GdSydney />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
