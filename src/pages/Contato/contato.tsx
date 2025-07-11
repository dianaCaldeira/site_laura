import { siteConfig } from '../../siteConfig';
import React, { useState, FormEvent, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Importamos o Helmet para meta tags
import './contato.css';
import Button from '../../components/Button/button'; // Certifique-se de que o caminho está correto
import WhatsAppService, { ContactFormData } from '../../services/WhatsAppService';
// Importar ícones personalizados
import whatsappIcon from '../../assets/icon/dra-laura-thiersch-neuropediatra-logo-Whatsapp.png';
import instagramIcon from '../../assets/icon/dra-laura-thiersch-neuropediatra-logo-Instagram.png';
import facebookIcon from '../../assets/icon/dra-laura-thiersch-neuropediatra-logo-Facebook.png';
import doctoraliaIcon from '../../assets/icon/dra-laura-thiersch-neuropediatra-logo-Doctoralia.png';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Inicializar WhatsApp Service quando o componente carregar
  useEffect(() => {
    // WhatsApp Service não precisa de inicialização
    console.log('WhatsApp Service pronto para uso');
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Enviar mensagem usando WhatsAppService
      const result = await WhatsAppService.sendContactForm(formData);
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ // Limpa o formulário após o sucesso
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Tracking de conversão
        if (window.gtag) {
          window.gtag('event', 'form_submit_success', {
            event_category: 'Conversao_Contato',
            event_label: 'Formulario_Contato_Enviado',
            conversion_type: 'form',
            contact_method: 'form',
            area_conversao: 'neuropediatra_bh',
            localizacao_consultorio: 'prado_bh',
            value: 1,
            currency: 'BRL'
          });
          console.log('🎯 Formulário enviado com sucesso - rastreado');
        }
      } else {
        setSubmitError(result.message);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde ou entre em contato por WhatsApp: (31) 98548-6226');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
              {/* Configuração de meta tags */}
      <Helmet>
                  {/* Título da Página: Deve ser único e descritivo. */}
        <title>Contato e Agendamento | Neuropediatra em Belo Horizonte | Dra. Laura Thiersch</title>
        
                {/* Meta Descrição: Resumo do conteúdo da página. Aparece nos resultados de busca. */}
        <meta
          name="description"
          content="Agende sua consulta com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. WhatsApp: (31) 98548-6226. Consultório no Prado, BH. Atendimento especializado em TEA, TDAH e Epilepsia Infantil. Entre em contato agora!"
        />
        
                  {/* Meta Keywords */}
        <meta 
          name="keywords" 
          content="contato neuropediatra BH, agendar consulta neuropediatra, telefone neurologista infantil Belo Horizonte, email Dra. Laura Thiersch, WhatsApp neuropediatra, clínica neurologia infantil BH, dúvidas TEA, TDAH, Epilepsia Infantil" 
        />
        
        {/* Canonical URL: Indica ao Google a versão preferencial da página para evitar conteúdo duplicado. */}
        <link rel="canonical" href={`${siteConfig.baseUrl}/contato`} />
        
        {/* Open Graph Tags (para compartilhamento em redes sociais como Facebook, LinkedIn) */}
        <meta property="og:title" content="Contato e Agendamento | Neuropediatra em Belo Horizonte | Dra. Laura Thiersch" />
        <meta property="og:description" content="Entre em contato com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Agende sua consulta por WhatsApp, telefone, e-mail ou preencha nosso formulário. Atendimento especializado em TEA, TDAH, Epilepsia Infantil." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.baseUrl}/contato`} />
        <meta property="og:image" content={`${siteConfig.baseUrl}/images/laura-thiersch-contato-social.jpg`} />
        
        {/* Twitter Card Tags (para compartilhamento no Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contato e Agendamento | Neuropediatra em Belo Horizonte | Dra. Laura Thiersch" />
        <meta name="twitter:description" content="Entre em contato com a Dra. Laura Thiersch, neuropediatra em Belo Horizonte. Agende sua consulta por WhatsApp, telefone, e-mail ou preencha nosso formulário. Atendimento especializado em TEA, TDAH, Epilepsia Infantil." />
        <meta name="twitter:image" content={`${siteConfig.baseUrl}/images/laura-thiersch-contato-social.jpg`} />

        {/* Schema Markup para LocalBusiness (Organização Médica) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Dra. Laura Thiersch - Neuropediatra em Belo Horizonte",
              "url": "${siteConfig.baseUrl}",
              "logo": "${siteConfig.baseUrl}/images/logo-dra-laura-thiersch-neuropediatra.png",
              "image": "${siteConfig.baseUrl}/images/consultorio-neuropediatra-belo-horizonte.jpg",
              "description": "Clínica de Neurologia Pediátrica da Dra. Laura Thiersch em Belo Horizonte, especializada em TEA, TDAH, Epilepsia Infantil e outros transtornos do neurodesenvolvimento.",
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
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "${siteConfig.contact.phone}",
                "contactType": "Agendamento de Consultas",
                "areaServed": "Belo Horizonte e Região Metropolitana",
                "availableLanguage": ["Portuguese"]
              },
              "sameAs": [
                "https://www.instagram.com/lauraneuroped/",
                "https://www.facebook.com/lauraneuroped/",
                "https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte",
                "https://g.co/kgs/tWPeVGb" // Link do Google My Business
              ],
              "hasMap": "https://maps.google.com/?q=Rua+Turquesa,+347+-+Prado,+Belo+Horizonte+-+MG,+30411-177"
            }
          `}
        </script>
      </Helmet>

      {/* main: Tag semântica que indica o conteúdo principal e único da página. */}
      <main className="contato-page">
        {/* Seção Hero: Introdução da página. */}
        <section 
          className="hero-section" 
          aria-labelledby="hero-title" // Acessibilidade
          itemScope itemType="https://schema.org/WebPage" // Tipo de página
        >
          <div className="container">
            <h1 id="hero-title" className="page-title">
              Entre em Contato com a Dra. Laura Thiersch
            </h1>
            <p className="hero-description">
              Estamos à disposição para esclarecer suas dúvidas sobre neurologia infantil, agendar consultas e oferecer o melhor cuidado para o desenvolvimento do seu filho em Belo Horizonte.
            </p>
          </div>
        </section>
        
        {/* Seção Formulário e Informações */}
        <section className="contact-section" aria-labelledby="contact-form-title">
          <div className="container contact-container">
            <div className="contact-info">
              <h2 className="section-title">Informações de Contato da Clínica</h2> {/* Título para acessibilidade */}
              
              <address className="info-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <h3 className="sub-title">Endereço</h3>
                <p>
                  <span itemProp="streetAddress">{siteConfig.contact.address.street}</span><br />
                  <span itemProp="addressLocality">{siteConfig.contact.address.city}</span>, 
                  <span itemProp="addressRegion"> {siteConfig.contact.address.state}</span><br />
                  CEP: <span itemProp="postalCode">{siteConfig.contact.address.zipCode}</span>
                </p>
                <p>
                  <a 
                    href="https://maps.google.com/?q=Rua+Turquesa,+347+-+Prado,+Belo+Horizonte+-+MG,+30411-177"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Obter rota para o consultório da Dra. Laura Thiersch no Google Maps"
                    title="Obter rota para o consultório"
                  >
                    Ver no Mapa e Obter Rota
                  </a>
                </p>
              </address>

              <div className="info-item">
                <h3 className="sub-title">Telefone e WhatsApp</h3>
                <p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'Clique_Telefone', {
                          event_category: 'Conversao_Contato',
                          event_label: 'Telefone_Contato',
                          conversion_type: 'phone',
                          contact_method: 'phone',
                          area_conversao: 'neuropediatra_bh',
                          localizacao_consultorio: 'prado_bh',
                          value: 1,
                          currency: 'BRL'
                        });
                        console.log('🎯 Clique no telefone rastreado');
                      }
                    }}

                    rel="noopener noreferrer"
                    itemProp="telephone"
                    aria-label="Ligar para Dra. Laura Thiersch"
                    title="Ligue para a Dra. Laura Thiersch"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <Button
                  variant="appointment"
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  ariaLabel="Enviar mensagem para Dra. Laura Thiersch via WhatsApp"
                  title="Converse com a Dra. Laura Thiersch no WhatsApp"
                  trackingCategory="Conversao_Contato"
                  trackingAction="Clique_WhatsApp_Contato"
                  trackingLabel="Botao_WhatsApp_Contato"
                  conversionType="whatsapp"
                >
                  Enviar Mensagem via WhatsApp
                </Button>
              </div>

              <div className="info-item">
                <h3 className="sub-title">Email</h3>
                <p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'Clique_Email', {
                          event_category: 'Conversao_Contato',
                          event_label: 'Email_Contato',
                          conversion_type: 'email',
                          contact_method: 'email',
                          area_conversao: 'neuropediatra_bh',
                          localizacao_consultorio: 'prado_bh',
                          value: 1,
                          currency: 'BRL'
                        });
                        console.log('🎯 Clique no email rastreado');
                      }
                    }}

                    rel="noopener noreferrer"
                    itemProp="email"
                    aria-label="Enviar email para Dra. Laura Thiersch"
                    title="Envie um email para a Dra. Laura Thiersch"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>

              <div className="info-item">
                <h3 className="sub-title">Horário de Atendimento</h3>
                <p>Segunda a Sexta: 08:00h às 17:00h</p>
                <p>Sábado e Domingo: Fechado</p>
              </div>

              <div className="info-item">
                <h3 className="sub-title">Conecte-se nas Redes Sociais</h3>
                <div className="social-links">
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Dra. Laura Thiersch" title="Entre em contato via WhatsApp com a Dra. Laura Thiersch Neuropediatra">
                    <img src={whatsappIcon} alt="WhatsApp da Dra. Laura Thiersch" className="social-icon-image" />
                  </a>
                  <a href="https://instagram.com/lauraneuroped/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Dra. Laura Thiersch" title="Siga a Dra. Laura Thiersch no Instagram">
                    <img src={instagramIcon} alt="Instagram da Dra. Laura Thiersch" className="social-icon-image" />
                  </a>
                  <a href="https://facebook.com/lauraneuroped/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Dra. Laura Thiersch" title="Siga a Dra. Laura Thiersch no Facebook">
                    <img src={facebookIcon} alt="Facebook da Dra. Laura Thiersch" className="social-icon-image" />
                  </a>
                  <a href="https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte" target="_blank" rel="noopener noreferrer" aria-label="Perfil da Dra. Laura Thiersch no Doctoralia" title="Veja o perfil da Dra. Laura Thiersch no Doctoralia">
                    <img src={doctoraliaIcon} alt="Perfil da Dra. Laura Thiersch no Doctoralia" className="social-icon-image" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2 id="contact-form-title" className="section-title">Envie sua Mensagem</h2>
              {submitSuccess ? (
                <div className="success-message">
                  <p>Sua mensagem foi enviada com sucesso!</p>
                  <p>Agradecemos seu contato. Entraremos em contato o mais breve possível para auxiliar sua família.</p>
                  <Button 
                    variant="primary" 
                    onClick={() => setSubmitSuccess(false)}
                    ariaLabel="Enviar nova mensagem para a Dra. Laura Thiersch"
                    title="Clique para enviar outra mensagem"
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate> {/* noValidate para controle via JS */}
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo<span className="required-star">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      aria-required="true"
                      aria-label="Seu nome completo"
                      autoComplete="name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">E-mail<span className="required-star">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      aria-required="true"
                      aria-label="Seu endereço de e-mail"
                      autoComplete="email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Telefone (com DDD)<span className="required-star">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      pattern="[0-9]{2}[0-9]{4,5}[0-9]{4}" // Padrão simples para telefone
                      aria-required="true"
                      aria-label="Seu telefone com DDD"
                      autoComplete="tel"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Sua Mensagem<span className="required-star">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} // Aumentar um pouco as linhas para melhor visualização
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      aria-required="true"
                      aria-label="Digite sua mensagem para a Dra. Laura Thiersch"
                    ></textarea>
                  </div>
                  
                  {submitError && <p className="error-message" role="alert">{submitError}</p>}
                  
                    <Button
                      type="submit"
                      variant="primary"
                      className={isSubmitting ? 'submitting' : ''}
                      ariaLabel={isSubmitting ? 'Enviando sua mensagem' : 'Enviar sua mensagem agora'}
                      title={isSubmitting ? 'Aguarde o envio da mensagem' : 'Clique para enviar sua mensagem'}
                      trackingCategory="Conversao_Contato"
                      trackingAction="Envio_Formulario_Contato"
                      trackingLabel="Botao_Enviar_Formulario"
                      conversionType="form"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                </form>
              )}
            </div>
          </div>
        </section>
        
        {/* Seção Mapa - Importante para localização */}
        <section className="map-section" id="map-section" aria-labelledby="map-title">
          <div className="container">
            <h2 id="map-title" className="section-title">Encontre a Clínica da Dra. Laura Thiersch em Belo Horizonte</h2>
            <div className="map-container">
              {/* IFRAME GOOGLE MAPS: Mapa do consultório */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.726964964019!2d-43.96385768462244!3d-19.93085798660937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa698fdc1e2e3e7%3A0x7e2e2e2e2e2e2e2e!2sR.%20Turquesa%2C%20347%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG%2C%2030411-177!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório da Dra. Laura Thiersch, Neuropediatra em Belo Horizonte"
                aria-label="Obter rota para o consultório da Dra. Laura Thiersch no Google Maps"
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* Seção CTA */}
        <section 
          className="cta-section" 
          aria-labelledby="cta-title"
          itemScope itemType="https://schema.org/CallToAction"
        >
          <div className="container">
            <h2 id="cta-title">Agende a Consulta do Seu Filho com a Dra. Laura Thiersch Hoje Mesmo!</h2>
            <p className="cta-description">
              Agende uma consulta com a Dra. Laura Thiersch e proporcione ao seu filho um cuidado neurológico especializado, humanizado e focado no seu desenvolvimento.
            </p>
            <Button
              variant="appointment"
              href="/agendar-consulta"
              ariaLabel="Agendar sua consulta de neuropediatria com a Dra. Laura Thiersch"
              title="Agende sua consulta de neuropediatria em Belo Horizonte com a Dra. Laura Thiersch"
              trackingCategory="Conversao_Contato_Final"
              trackingAction="Clique_Agendamento_Contato_CTA"
              trackingLabel="Botao_Agendamento_Contato"
              conversionType="navigation"
            >
              Agende Sua Consulta
            </Button>
            <p className="cta-contact-info">
              <span className="cta-label">Prefere ligar?</span> <a className="cta-link" href={`tel:${siteConfig.contact.phone}`} target="_blank" rel="noopener noreferrer">{siteConfig.contact.phone}</a>
              <span className="cta-label"> | Ou envie um e-mail: </span>
              <a className="cta-link" href={`mailto:${siteConfig.contact.email}`} target="_blank" rel="noopener noreferrer">{siteConfig.contact.email}</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contato;
