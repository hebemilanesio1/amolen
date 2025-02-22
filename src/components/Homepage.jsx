import React from "react";
import profileImage from "../assets/images/profile.png";
import img1 from "../assets/images/1.png";
import icon2 from "../assets/images/2.png";
import icon3 from "../assets/images/3.png";
import icon4 from "../assets/images/4.png";
import footerImage from "../assets/images/portfolio.png"; // Importa la imagen del footer
import whatsappLogo from "../assets/images/whatsapp_logo.png"; // Importa el logo de WhatsApp
import "./Homepage.css"; // Importa el archivo CSS

const Homepage = () => {
  const whatsappNumber = "5493533438449"; // Número de WhatsApp en formato internacional sin el signo +

  return (
    <div className="homepage">
      <div className="homepage-container">
        {/* Sección de imagen y texto */}
        <div className="profile-text-container">
          <img src={profileImage} alt="Marlen Morena" className="profile-image" />

          <div className="text-container">
            <h2>Soy <span>Marlen Morena</span></h2>
            <h3>DISEÑADORA DE INDUMENTARIA Y COMPLEMENTOS <br />
              COSTURERA <br />
              MODISTA <br/>
            </h3>
            <br></br>
            <p>
              Vivo en Alicia, Córdoba. Me especializo en la creación de indumentaria y/o 
              accesorios personalizados, desde el diseño hasta la confección.
            </p>
          </div>
        </div>

        {/* Proceso de trabajo */}
        <div className="work-process">
          <div>
            <p>1</p>
            <img src={img1} alt="Descripción de la imagen" />
          </div>
          <div>
            <p>2</p>
            <img src={icon2} alt="Icono 2" />
          </div>
          <div>
            <p>3</p>
            <img src={icon3} alt="Icono 3" />
          </div>
          <div>
            <p>4</p>
            <img src={icon4} alt="Icono 4" />
          </div>
        </div>
      </div>
      {/* Agrega el footer */}
      <footer>
        <img src={footerImage} alt="Footer" />
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, soy Marlen Morena. ¿En qué te puedo ayudar?")}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={whatsappLogo} alt="WhatsApp Logo" className="footer-logo" />
        </a>
      </footer>

    </div>
  );
};

export default Homepage;
