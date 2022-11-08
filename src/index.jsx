import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement/index.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import APropos from './pages/A-Propos';
import NotFound from './components/NotFound';
import { createGlobalStyle } from 'styled-components';

const container = document.getElementById('root');
const root = createRoot(container);

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);