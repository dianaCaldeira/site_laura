import React from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Entre em Contato</h1>
      <p>
        Se você tiver alguma dúvida ou desejar marcar uma consulta com a Dra. Laura, por favor, entre em contato conosco através das seguintes informações:
      </p>
      <ul>
        <li>Telefone: (XX) XXXX-XXXX</li>
        <li>E-mail: contato@dralauraneuropediatra.com.br</li>
        <li>Endereço: Rua ABC, 123 - Cidade/Estado</li>
      </ul>
    </div>
  );
};

export default ContactPage;