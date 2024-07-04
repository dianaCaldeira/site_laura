import React from 'react';
import './AboutPage.css';
import Laura02 from '../../assets/Laura02.png';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-image">
          <img src={Laura02} alt="Dra. Laura Thiersch" />
        </div>
        <div className="about-text">
          <h2>Laura Thiersch</h2>
          <p>
            Sejam bem vindos! Sou médica formada pela Universidade Federal de Minas Gerais (UFMG); Pediatra e Neurologista Infantil pelo Hospital Infantil João Paulo II (FHEMIG).
          </p>
          <p>
            Escolhi minha vocação ainda na graduação. Ao ter contato com casos da Neuropediatria, não tive dúvidas que estudar neurologia e trabalhar com crianças era minha vocação. Toda minha trajetória desde então tem sido um caminho muito prazeroso e recompensador.
          </p>
          <p>
            Minha formação em Neurologia Infantil no Hospital Infantil João Paulo II (CGP), maior hospital pediátrico de Minas Gerais, me garantiu experiência em casos ambulatoriais e hospitalares. Além disso, me deu segurança para condução de diversos casos da neuropediatria, inclusive doenças raras.
          </p>
          <p>
            Hoje, atuo como pediatra do corpo clínico do Hospital das Clínicas da UFMG e neuropediatra no Hospital Infantil Padre Anchieta.
          </p>
          <p>
            Meus atendimentos são na clínica Alegrart. Será um prazer cuidar da sua criança! Fiquem à vontade para dúvidas e para entrar em contato por aqui!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;