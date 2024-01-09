import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Acerca from "./components/Acerca";
import ServiciosLegales from "./components/ServiciosLegales";
import Faq from "./components/Faq";
import Recursos from "./components/Recursos";
import Contacto from "./components/Contacto";

function App() {
  
  return (
    <div id="app">
      <Header />
      <main>
        <Inicio />
        <Acerca />
        <ServiciosLegales />
        <Faq />
        <Recursos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
