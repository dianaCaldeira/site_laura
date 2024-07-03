import React from 'react';
import './HomePage.css';
import Button from '../../components/Button/Button';
import Laura01 from '../../assets/Laura01.png';
import Passarinho02 from '../../assets/Passarinho02.jpeg';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-image">
          <img src={Laura01} alt="Dra. Laura Thiersch" />
        </div>
        <div className="home-text">
          <h1>Bem-vindo</h1>
          <h2>Dra. Laura Thiersch</h2>
          <ul>
            <li>Médica formada pela Universidade Federal de Minas Gerais (UFMG). </li>
            <li>Pediatra e Neurologista Infantil pelo Hospital Infantil João Paulo II (FHEMIG).</li>
            <li>Atualmente, Neurologista Infantil no Hospital das Clínicas da Universidade Federal de Minas Gerais (HC UFMG) e Hospital Infantil Padre Anchieta.</li>
          </ul>
          <div className="button-container">
            <Button to="/sobre" text="Saiba Mais" />
          </div>
        </div>
      </div>

      <div className="when-to-see-neuropediatra">
        <div className="neuropediatra-image">
          <img src={Passarinho02} alt="Passarinho" />
        </div>
        <div className="neuropediatra-text">
          <h2>Quando procurar um Neuropediatra?</h2>
          <p>
            O Neuropediatra, ou Neurologista Infantil, é o responsável por acompanhar e tratar crianças e adolescentes com doenças neurológicas. O acompanhamento com Neuropediatria é indicado em casos de:
          </p>
          <ul>
            <li>Atraso de desenvolvimento motor;</li>
            <li>Atraso de fala;</li>
            <li>Epilepsia;</li>
            <li>Cefaleia e enxaqueca;</li>
            <li>Transtornos de aprendizagem (como dislexia e discalculia);</li>
            <li>Transtorno de Déficit de Atenção e Hiperatividade (TDAH);</li>
            <li>Transtorno do Espectro Autista (TEA);</li>
            <li>Paralisia cerebral;</li>
            <li>Distúrbios do sono;</li>
            <li>Doenças genéticas e metabólicas.</li>
          </ul>
        </div>
      </div>

     <div className="faq-container">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-topics">
          <div className="faq-topic">
            <h3>O que devo levar em uma primeira consulta com o Neuropediatra?</h3>
            <p>
              Na primeira consulta não se esqueça de levar a caderneta da criança e a alta da maternidade. Se possível, leve exames prévios que já foram realizados e sumários de alta de internações hospitalares. Em caso de queixas escolares, não se esqueça de levar relatório atualizado da escola! Se a criança for acompanhada por algum outro profissional, como psicólogos, terapeutas ocupacionais e fonoaudiólogos, relatórios destes profissionais são sempre bem-vindos.
            </p>
          </div>
          <div className="faq-topic">
            <h3>Meu filho está atrasado ou "cada criança tem seu tempo"?</h3>
            <p>
              Muito cuidado ao aguardar "o tempo" de cada criança para atingir os marcos esperados no desenvolvimento neuropsicomotor. Qualquer dúvida em relação a marcos deve levar à busca de profissional capacitado o mais rapidamente possível! A intervenção precoce é a melhor forma de tratamento para atrasos do desenvolvimento e não podemos perder tempo para iniciar a estimulação.
            </p>
          </div>
          <div className="faq-topic">
            <h3>O que fazer quando a criança apresenta problemas para dormir?</h3>
            <p>
              Queixas relacionadas ao sono são muito recorrentes no dia a dia do Neurologista Infantil. O sono é indispensável para o crescimento e desenvolvimento adequados da criança, e problemas no mesmo devem levar à busca de ajuda especializada.
              Para o dia da consulta, lembre-se de detalhar toda a rotina da criança, bem como os hábitos da casa. Alterações de sono, em geral, dizem respeito à saúde integral e aos hábitos da criança e, muitas vezes, podem ser corrigidas apenas com mudanças no dia a dia da criança e da família.
            </p>
          </div>
          <div className="faq-topic">
            <h3>Como saber se meu filho tem TDAH?</h3>
            <p>
              O diagnóstico de TDAH é confiável e válido quando realizado por profissional capacitado e seguindo os critérios estabelecidos na literatura. Hoje, o diagnóstico é feito por meio de entrevista clínica com a família buscando avaliar os critérios de TDAH do Manual Diagnóstico de Transtornos Mentais. Não existem exames para diagnóstico. Em caso de suspeita, leve seu filho a profissional capaz de realizar o diagnóstico, como um neurologista infantil ou psiquiatra.
              Diagnosticar e tratar corretamente o TDAH é de extrema importância, uma vez que o comprometimento funcional causado pelo transtorno acarreta em piora da qualidade de vida do paciente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;