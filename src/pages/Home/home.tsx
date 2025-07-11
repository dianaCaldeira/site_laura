import { siteConfig } from '../../siteConfig';
import React from 'react';
import { Helmet } from 'react-helmet';
import './home.css';
import Button from '../../components/Button/button';
import FAQ from '../../components/FAQ/faq';
// Imagem da Dra. Laura otimizada em WebP para melhor performance
import doctorImage from '../../assets/images/optimized/dra-laura-thiersch-neuropediatra-bh-06.webp';

// DECLARAÇÃO GLOBAL PARA GTAG (PARA GARANTIR TIPAGEM E ACESSO)
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Home: React.FC = () => {
  // Dados para o FAQ da Dra. Laura
  const faqItems = [
    {
      question: "A Dra. Laura atende crianças com suspeita de TEA em Belo Horizonte?",
      answer: "Sim, a Dra. Laura Thiersch é uma neuropediatra em Belo Horizonte com vasta experiência no diagnóstico e acompanhamento de crianças com suspeita ou já diagnosticadas com Transtorno do Espectro Autista (TEA), oferecendo um plano de cuidados individualizado e humanizado."
    },
    {
      question: "Qual a idade mínima para atendimento com a Dra. Laura?",
      answer: "A Dra. Laura Thiersch atende pacientes desde o nascimento (recém-nascidos) até a adolescência, acompanhando todas as fases do neurodesenvolvimento infantil."
    },
    {
      question: "A Dra. Laura faz diagnóstico e acompanhamento de TDAH em crianças?",
      answer: "Sim, a Dra. Laura Thiersch realiza o diagnóstico e acompanhamento completo do Transtorno do Déficit de Atenção e Hiperatividade (TDAH) em crianças e adolescentes. Ela oferece abordagens terapêuticas que incluem orientações comportamentais, escolares e, quando necessário, manejo medicamentoso."
    },
    {
      question: "A Dra. Laura trata epilepsia infantil?",
      answer: "Sim, o tratamento da epilepsia infantil é uma das grandes áreas de expertise da Dra. Laura Thiersch. Ela atua no diagnóstico preciso, manejo medicamentoso e acompanhamento contínuo de crianças com diferentes tipos de epilepsia, buscando o controle das crises e a melhor qualidade de vida."
    },
    {
      question: "Como agendar uma consulta com a Dra. Laura?",
      answer: "Para agendar uma consulta com a Dra. Laura Thiersch, você pode entrar em contato diretamente pelo WhatsApp: (31) 98548-6226, ou através do formulário de contato em nosso site. Nossa equipe está pronta para auxiliar você com datas e horários disponíveis em Belo Horizonte."
    },
    {
      question: "A Dra. Laura atende convênio ou particular?",
      answer: "A Dra. Laura Thiersch realiza atendimentos particulares. Para mais informações sobre valores e formas de pagamento, por favor, entre em contato diretamente com nossa equipe pelo WhatsApp ou telefone."
    },
    {
      question: "O consultório da Dra. Laura é acessível?",
      answer: `Sim, o consultório da Dra. Laura Thiersch, localizado na ${siteConfig.contact.address.street}, Prado, ${siteConfig.contact.address.city} - ${siteConfig.contact.address.state} ${siteConfig.contact.address.zipCode}, é projetado para oferecer acessibilidade e conforto a todos os pacientes e suas famílias. Em caso de necessidades específicas, por favor, nos informe previamente.`
    },
    {
      question: "A Dra. Laura faz avaliação de atraso no desenvolvimento?",
      answer: "Com certeza. A avaliação de atrasos no desenvolvimento neuropsicomotor é uma área fundamental da atuação da Dra. Laura Thiersch. Ela identifica e orienta intervenções precoces para atrasos na fala, motor, cognitivo e social, garantindo o máximo potencial de desenvolvimento para a criança."
    },
    {
      question: "Quais os primeiros sinais de TEA que devo observar no meu filho?",
      answer: "Alguns sinais de alerta para TEA incluem dificuldades na interação social (pouco contato visual, não responde ao nome), atraso na fala ou ausência dela, movimentos repetitivos, sensibilidade sensorial e interesses restritos. Se notar algum desses sinais, procure uma avaliação neuropediátrica."
    },
    {
      question: "Como é o tratamento da epilepsia infantil?",
      answer: "O tratamento da epilepsia infantil é individualizado e visa controlar as crises com o mínimo de efeitos colaterais. Envolve o uso de medicações antiepilépticas, orientações sobre segurança, mudanças no estilo de vida e, em alguns casos. A Dra. Laura Thiersch acompanhará todo o processo."
    },
  ];

  return (
    <>
      {/* Helmet: Define o título da página, meta descrição e palavras-chave. */}
      <Helmet>
        {/* Título da Página: Deve ser único e descritivo. */}
        <title>Dra. Laura Thiersch - Neuropediatra em Belo Horizonte | TEA, TDAH, Epilepsia</title>

        {/* Meta Descrição: Resumo do conteúdo da página. */}
        <meta
          name="description"
          content="Neuropediatra em BH especialista em TEA, TDAH e epilepsia infantil. Consultas particulares e convênio. Agende sua consulta com a Dra. Laura Thiersch."
        />
        {/* Meta Keywords: Podem ajudar a reforçar o tema. */}
        <meta
          name="keywords"
          content="neuropediatra Belo Horizonte, neuropediatra BH, neurologista infantil Belo Horizonte, médico TEA Belo Horizonte, tratamento TDAH crianças BH, diagnóstico autismo infantil BH, atraso desenvolvimento neurológico Belo Horizonte, epilepsia infantil tratamento BH, consulta neuropediatra particular BH, avaliação neuropsicológica infantil Belo Horizonte, Dra. Laura Thiersch"
        />

        {/* Canonical URL: Indica a versão preferencial da página. */}
        <link rel="canonical" href={siteConfig.baseUrl} />

        {/* Open Graph Tags (para compartilhamento em redes sociais) */}
        <meta property="og:title" content="Dra. Laura Thiersch: Neuropediatra em Belo Horizonte | TEA, TDAH, Epilepsia Infantil" />
        <meta property="og:description" content="Pediatra em Belo Horizonte com atuação em Transtorno do Espectro Autista (TEA), TDAH, Epilepsia Infantil e desenvolvimento neurológico de crianças e adolescentes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.baseUrl} />
        <meta property="og:image"
          content={`${siteConfig.baseUrl}/images/laura-thiersch-neuropediatra-bh-social.jpg`} />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dra. Laura Thiersch: Neuropediatra em Belo Horizonte | TEA, TDAH, Epilepsia Infantil" />
        <meta name="twitter:description" content="Pediatra em Belo Horizonte com atuação em Transtorno do Espectro Autista (TEA), TDAH, Epilepsia Infantil e desenvolvimento neurológico de crianças e adolescentes." />
        <meta name="twitter:image"
          content={`${siteConfig.baseUrl}/images/laura-thiersch-neuropediatra-bh-social.jpg`} />

        {/* Schema Markup para LocalBusiness/Physician */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dra. Laura Maria Silva Thiersch - Neuropediatra",
              "url": "${siteConfig.baseUrl}",
              "image": "${siteConfig.baseUrl}/images/dra-laura-thiersch-perfil.jpg",
              "logo": "${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png",
              "description": "Neuropediatra em Belo Horizonte especialista em TEA, TDAH e epilepsia infantil. Consultas particulares e convênio. Agende sua consulta com a Dra. Laura Thiersch.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "${siteConfig.contact.address.street}",
                "addressLocality": "${siteConfig.contact.address.city}",
                "addressRegion": "${siteConfig.contact.address.state}",
                "postalCode": "${siteConfig.contact.address.zipCode}",
                "addressCountry": "${siteConfig.contact.address.country}"
              },
              "telephone": "${siteConfig.contact.phone}",
              "email": "${siteConfig.contact.email}",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 08:00-17:00",
              "areaServed": {
                "@type": "City",
                "name": "${siteConfig.contact.address.city}"
              },
              "serviceArea": {
                "@type": "City",
                "name": "${siteConfig.contact.address.city}"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Neuropediatria",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Consulta Neuropediátrica",
                      "description": "Avaliação completa de crianças com suspeita de TEA, TDAH ou epilepsia"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Diagnóstico TEA",
                      "description": "Avaliação especializada para diagnóstico de Transtorno do Espectro Autista"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tratamento TDAH",
                      "description": "Diagnóstico e tratamento do Transtorno do Déficit de Atenção e Hiperatividade"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Epilepsia Infantil",
                      "description": "Tratamento especializado para epilepsia em crianças"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.instagram.com/lauraneuroped/",
                "https://www.facebook.com/lauraneuroped/",
                "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte"
              ]
            }
          `}
        </script>
        
        {/* Schema Markup para Physician */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "${siteConfig.contact.fullName}",
              "url": "${siteConfig.baseUrl}",
              "image": "${siteConfig.baseUrl}/images/dra-laura-thiersch-perfil.jpg",
              "description": "Neuropediatra em Belo Horizonte com atendimento especializado em Transtorno do Espectro Autista (TEA), TDAH, Epilepsia Infantil e desenvolvimento neurológico de crianças e adolescentes.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "${siteConfig.contact.address.street}",
                "addressLocality": "${siteConfig.contact.address.city}",
                "addressRegion": "${siteConfig.contact.address.state}",
                "postalCode": "${siteConfig.contact.address.zipCode}",
                "addressCountry": "${siteConfig.contact.address.country}"
              },
              "telephone": "${siteConfig.contact.phone}",
              "email": "${siteConfig.contact.email}",
              "medicalSpecialty": "https://schema.org/Pediatric",
              "knowsAbout": [
                "Transtorno do Espectro Autista (TEA)",
                "Transtorno do Déficit de Atenção e Hiperatividade (TDAH)",
                "Epilepsia Infantil",
                "Atraso no Desenvolvimento Neuropsicomotor",
                "Cefaleia Infantil",
                "Distúrbios do Sono em Crianças",
                "Paralisia Cerebral",
                "Síndromes Genéticas com Acometimento Neurológico",
                "Neurologia Pediátrica",
                "Desenvolvimento Infantil"
              ]
            }
          `}
        </script>
      </Helmet>

      <main className="home-page">
        {/* Seção Hero com fundo ondulado */}
        <section
          className="hero-section"
          aria-labelledby="hero-title"
          itemScope itemType="https://schema.org/WebPageElement"
        >
          <div className="hero-container">
            <div className="hero-content">
              <h1 id="hero-title">
                Dra. Laura Thiersch: Neuropediatra
              </h1>
              <h2>Cuidado Humanizado para o Desenvolvimento do Seu Filho</h2>
              <p>
                Médica com experiência em Transtorno do Espectro Autista (TEA), TDAH e
                Epilepsia Infantil. Proporcionamos um acompanhamento dedicado e personalizado para
                cada criança e sua família.
              </p>
              <Button
                variant="appointment"
                href="/agendar-consulta"
                ariaLabel="Agendar consulta de neuropediatria em Belo Horizonte com a Dra.
                Laura Thiersch"
                title="Agende sua Consulta de Neuropediatria"
                trackingCategory="Conversao_Principal"
                trackingAction="Clique_Agendamento_Hero"
                trackingLabel="Botao_Agendamento_Principal"
                conversionType="navigation"
              >
                Agende sua Consulta
              </Button>
            </div>
            <div className="hero-image">
              <img
                src={doctorImage}
                loading="lazy"
                alt="Dra. Laura Thiersch - Pediatra com experiência em TEA, TDAH e Epilepsia Infantil em Belo Horizonte"
                title="Dra. Laura Thiersch, Neurologista Infantil em BH"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>

        {/* Seção Sobre a Dra. Laura */}
        <section
          className="about-section"
          aria-labelledby="about-title"
          itemScope itemType="https://schema.org/AboutPage"
        >
          <div className="container">
            <h2 id="about-title" className="section-title">
              <span className="elegant-title">Sobre a Dra. Laura Thiersch</span>
              <span className="section-subtitle">Paixão e Expertise em Neurologia
                Pediátrica</span>
            </h2>
            <div className="about-content">
              <p>
                Dra. Laura Thiersch sempre foi movida pela paixão em cuidar e transformar a vida
                das crianças. Sua jornada na medicina foi marcada pelo profundo interesse no
                desenvolvimento infantil e nas complexidades do sistema nervoso pediátrico. Formada
                em Medicina, dedicou-se à residência em Pediatria e, posteriormente, especializou-se em
                Neurologia Pediátrica no renomado Hospital Infantil João Paulo II em Belo Horizonte,
                referência em Minas Gerais para condições neurológicas complexas.
              </p>
              <p>
                Com anos de experiência e um olhar atento e carinhoso, a Dra. Laura se dedica a
                oferecer cuidados de excelência, combinando seu vasto conhecimento científico com um
                atendimento humanizado e individualizado. Seu compromisso é com o potencial de cada
                criança, buscando diagnósticos precisos e tratamentos eficazes que promovam a melhor
                qualidade de vida e o pleno desenvolvimento.
              </p>
              <Button
                variant="secondary"
                href="/sobre"
                ariaLabel="Saiba mais sobre a formação e experiência da Dra. Laura Thiersch
                Neuropediatra"
                title="Conheça a história e especialidades da Dra. Laura Thiersch"
                trackingCategory="Navegacao_Interna"
                trackingAction="Clique_Sobre"
                trackingLabel="Botao_Conheca_Mais"
                conversionType="navigation"
              >
                Conheça Mais
              </Button>
            </div>
          </div>
        </section>

        {/* Seção Diferenciais / Nossos Pilares de Atendimento */}
        <section
          className="features-section"
          aria-labelledby="features-title"
          itemScope itemType="https://schema.org/Service" // A seção inteira pode ser vista como um tipo de serviço ou característica
        >
          <div className="container">
            <h2 id="features-title" className="section-title">
              <span className="elegant-title">Nossos Diferenciais</span>
              <span className="section-subtitle">O Atendimento Que o Seu Filho Merece em
                Belo Horizonte</span>
            </h2>
            <div className="features-grid">
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">🧠</div>

                <h3>Atendimento Humanizado e Acolhedor</h3>
                <p>Priorizamos um ambiente seguro e de escuta ativa, onde a criança e a família
                  se sintam compreendidas e confortáveis desde o primeiro contato com a
                  neuropediatra.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">🔬</div>
                <h3>Prática Baseada em Evidências Científicas</h3>
                <p>Nossa abordagem é fundamentada nas mais recentes pesquisas e diretrizes
                  da neurologia infantil, garantindo diagnósticos precisos e tratamentos eficazes e
                  inovadores.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">🤝</div>
                <h3>Abordagem Familiar e Multidisciplinar</h3>

                <p>Envolvemos ativamente os pais e trabalhamos em colaboração com outros
                  especialistas (fonoaudiólogos, psicólogos e outros terapeutas) para um cuidado integral e
                  coordenado.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">🌱</div>

                <h3>Foco no Pleno Desenvolvimento Infantil</h3>
                <p>Nossa missão é maximizar o potencial de cada criança, promovendo o
                  neurodesenvolvimento saudável e superando desafios, seja em casos de TEA, TDAH,
                  Epilepsia ou atrasos gerais.</p>
              </article>
            </div>
          </div>
        </section>
        {/* Seção Importância da Neuropediatria */}
        <section
          className="importance-section"
          aria-labelledby="importance-title"
          itemScope itemType="https://schema.org/AboutPage" // Abordando o tema da importância da especialidade
        >
          <div className="container">
            <h2 id="importance-title" className="section-title">
              <span className="elegant-title">A Importância da Neuropediatria para o Futuro
                do Seu Filho</span>
              <span className="section-subtitle">Entenda Como um Especialista Pode Fazer a
                Diferença</span>
            </h2>
            <div className="importance-content">
              <p>
                A Neurologia Pediátrica é uma especialidade médica vital para o diagnóstico,
                tratamento e acompanhamento de condições que afetam o cérebro, a medula espinhal,
                os nervos e os músculos de crianças e adolescentes. Desde o nascimento, o sistema
                nervoso está em constante desenvolvimento, e qualquer alteração pode impactar
                significativamente o aprendizado, o comportamento e a qualidade de vida.
              </p>
              <p>
                Um acompanhamento neurológico infantil adequado, realizado por uma
                neuropediatra experiente como a Dra. Laura Thiersch, permite a identificação precoce de
                transtornos como TEA, TDAH e epilepsia, bem como atrasos no desenvolvimento
                psicomotor e outros. Intervenções realizadas no momento certo podem maximizar o
                potencial de cada criança, proporcionando-lhes as ferramentas necessárias para um
                futuro mais autônomo e feliz.
              </p>
              <p>
                Com um olhar atento, carinhoso e cientificamente embasado, a Dra. Laura se
                dedica a oferecer cuidados de excelência, combinando seu amor pela medicina e seu
                compromisso inabalável em proporcionar o melhor para seus pequenos pacientes e suas
                famílias em Belo Horizonte.
              </p>
            </div>
          </div>
        </section>

        {/* Seção FAQ */}
        <FAQ items={faqItems} />

        {/* Seção CTA */}
        <section
          className="cta-section"
          aria-labelledby="cta-title"
          itemScope itemType="https://schema.org/CallToAction"
        >
          <div className="container">
            <h2 id="cta-title">Proporcione o Melhor Cuidado Neurológico para o Seu Filho em
              Belo Horizonte</h2>
            <p className="cta-description">
              Convidamos você a conhecer o consultório da Dra. Laura Thiersch, onde
              compromisso, paixão e ciência se unem para transformar a saúde e o desenvolvimento
              das crianças.
            </p>
            <Button
              variant="appointment"
              href="/agendar-consulta"
              ariaLabel="Agende a primeira consulta com a Dra. Laura Thiersch Neuropediatra
              em BH"
              title="Agende sua Consulta de Neuropediatria em Belo Horizonte"
              trackingCategory="Conversao_Secundaria"
              trackingAction="Clique_Agendamento_CTA"
              trackingLabel="Botao_Agendamento_Final"
              conversionType="navigation"
            >
              Agende sua Consulta Agora!
            </Button>
            <p className="cta-contact-info">
              <span className="cta-label">Prefere ligar?</span> <a className="cta-link"
                href="tel:+5531985486226"
                
                rel="noopener noreferrer"
                onClick={() => { // Rastreamento GA4 para clique no telefone
                  if (window.gtag) {
                    window.gtag('event', 'Clique_Telefone', {
                      event_category: 'Conversao_Home_CTA',
                      event_label: 'Telefone_Home_CTA',
                      conversion_type: 'phone',
                      contact_method: 'phone',
                      area_conversao: 'neuropediatra_bh',
                      localizacao_consultorio: 'prado_bh',
                      value: 1,
                      currency: 'BRL'
                    });
                    console.log('🎯 Clique no telefone (Home CTA) rastreado');
                  }
                }}
              >
                (31) 98548-6226
              </a>
              <span className="cta-label"> | Ou envie um e-mail: </span>
              <a className="cta-link"
                href={`mailto:${siteConfig.contact.email}`}
                
                rel="noopener noreferrer"
                onClick={() => { // Rastreamento GA4 para clique no e-mail
                  if (window.gtag) {
                    window.gtag('event', 'Clique_Email', {
                      event_category: 'Conversao_Home_CTA',
                      event_label: 'Email_Home_CTA',
                      conversion_type: 'email',
                      contact_method: 'email',
                      area_conversao: 'neuropediatra_bh',
                      localizacao_consultorio: 'prado_bh',
                      value: 1,
                      currency: 'BRL'
                    });
                    console.log('🎯 Clique no email (Home CTA) rastreado');
                  }
                }}
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
