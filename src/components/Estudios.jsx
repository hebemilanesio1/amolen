import React from "react";
import footerImage from "../assets/images/portfolio.png"; // Importa la imagen del footer
import whatsappLogo from "../assets/images/whatsapp_logo.png"; // Importa el logo de WhatsApp
import "./Estudios.css"; // Importa el archivo CSS
import img1 from "../assets/images/instituto_logo.png";
import img2 from "../assets/images/bellasartes_logo.png";
import img3 from "../assets/images/costurabebe_logo.png";
import img4 from "../assets/images/oratoria_logo.png";
import img5 from "../assets/images/ceramica_logo.png";
import img6 from "../assets/images/fotografia_logo.png";
import img7 from "../assets/images/estilismo_logo.png";
import img8 from "../assets/images/señorabatata_logo.png";
import img9 from "../assets/images/we_logo.png";
import img10 from "../assets/images/patopampa_logo.png";

const Estudios = () => {
  const whatsappNumber = "5493533438449";
  return (
    
    <div className="estudios">
      <div className="image-container">
        <img src={img1} alt="Imagen 1" />
        <span className="image-text">Estudios Secundarios Completos en "Instituto Domingo Faustino Sarmiento" (2015-2020).</span>
      </div>
      <div className="image-container">
        <img src={img2} alt="Imagen 2" />
        <span className="image-text">Esc. Superior de Bellas Artes "Emiliano Gómez Clara". Diseño de Indumentaria y Complementos (2020-2022).</span>
      </div>
      <div className="image-container">
        <img src={img3} alt="Imagen 3" />
        <span className="image-text">Curso/Capacitación en Confección de Ropa de Bebé (2021).</span>
      </div>
      <div className="image-container">
        <img src={img4} alt="Imagen 4" />
        <span className="image-text">Taller de Oratoria (2022).</span>
      </div>
      <div className="image-container">
        <img src={img5} alt="Imagen 5" />
        <span className="image-text">Taller de Cerámica (2023).</span>
      </div>
      <div className="image-container">
        <img src={img6} alt="Imagen 6" />
        <span className="image-text">Curso de Fotografía (2024).</span>
      </div>
      <div className="image-container">
        <img src={img7} alt="Imagen 7" />
        <span className="image-text">Curso de Estilismo (2024 - cursando).</span>
      </div>
      <div className="image-container">
        <img src={img8} alt="Imagen 8" />
        <span className="image-text">Trabajé en el diseño de Indumentaria Corporativa en "Señora Batata".</span>
      </div>
      <div className="image-container">
        <img src={img9} alt="Imagen 9" />
        <span className="image-text">Trabajé en el diseño de Indumentaria Corporativa en "We".</span>
      </div>
      <div className="image-container">
        <img src={img10} alt="Imagen 10" />
        <span className="image-text">Trabajé en el diseño de Indumentaria Corporativa en "Pato Pampa".</span>
      </div>
      {/* Agregar el footer */}
      <footer>
        <img src={footerImage} alt="Footer" />
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, soy Marlen Morena😊. ¿En qué te puedo ayudar?✨👗")}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={whatsappLogo} alt="WhatsApp Logo" className="footer-logo" />
        </a>
      </footer>
    </div>
    
  );
};

export default Estudios;