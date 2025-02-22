import footerImage from "../assets/images/portfolio.png"; // Importa la imagen del footer
import whatsappLogo from "../assets/images/whatsapp_logo.png"; // Importa el logo de WhatsApp
import "./Contacto.css"; // Importa el archivo CSS
const whatsappNumber = "5493533438449";
<footer>
        <img src={footerImage} alt="Footer" />
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <img src={whatsappLogo} alt="WhatsApp Logo" className="footer-logo" />
        </a>
</footer>