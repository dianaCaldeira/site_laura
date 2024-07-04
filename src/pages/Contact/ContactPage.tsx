import React from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="contact-heading">Entre em Contato</h1>
      <div className="contact-page">
        <p>
          Estamos aqui para atender você e sua família. Para marcar uma consulta ou esclarecer dúvidas com a Dra. Laura, entre em contato conosco:
        </p>
        <ul>
          <li>
            <strong>Telefone:</strong> (31) 99562-6630
          </li>
          <li>
            <strong>E-mail:</strong> laurathiersch@gmail.com
          </li>
          <li>
            <strong>Endereço:</strong> Rua Turquesa, 347 - Prado, Belo Horizonte - MG
          </li>
        </ul>
        <p>Ficaremos felizes em atendê-lo e cuidar da saúde do seu filho.</p>
        <div className="map-container">
          <iframe
            title="Localização do consultório da Dra. Laura Thiersch"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5531658636087!2d-43.97748492376092!3d-19.93528623986721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6965e7e7f2c39%3A0x4f6c7e3c2b7e9d6a!2sR.%20Turquesa%2C%20347%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG%2C%2030411-090!5e0!3m2!1sen!2sbr!4v1689284567890!5m2!1sen!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;