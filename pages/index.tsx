// Ficheiro: pages/index.tsx
// VERSÃO DE TESTE - SIMPLIFICADA PARA ENCONTRAR O ERRO

// --- DADOS DO PORTFÓLIO ---
const experiences = [
  // ... (a sua lista de experiências continua aqui, não precisa de a apagar)
  {
    company: "Inmetrics | Claro Brasil",
    role: "SRE - Middleware - DevOps Engineer",
    period: "2024 – 2025",
    description: "Implantação de automações com Ansible e pipelines CI/CD. Monitoramento com Zabbix, Grafana, Kibana, Dynatrace."
  },
  {
    company: "Meta | Tokio Marine",
    role: "DevOps Engineer | SRE",
    period: "2023 – 2024",
    description: "Redução de 70% no tempo médio de detecção de problemas com nova stack de monitoramento. Implantação de esteiras CI/CD com +90% de sucesso. Gestão de SLIs, SLOs e Error Budgets agressivos."
  },
  {
    company: "Kalendae | Banco Bradesco",
    role: "Middleware - DevOps Engineer - SRE",
    period: "2023",
    description: "Definição de MTTR, MTBF, MTTA. Criação de dashboards SRE e FinOps. Cultura de confiabilidade com SLI, SLO, Error Budget."
  },
  {
    company: "Financeira Alfa",
    role: "Arquiteto de Soluções - Middleware - SRE",
    period: "2022 – 2023",
    description: "Capacity Planning, observabilidade com Dynatrace e AppDynamics, uso de Elasticsearch e Splunk. Aplicação de práticas ITIL + Agile."
  },
  {
    company: "Capgemini | Banco Bradesco, Vector ITC | Santander",
    role: "SRE - Middleware - Infraestrutura",
    period: "2015 – 2022",
    description: "Migração de sistemas para Azure, criação de esteiras DevOps, suporte a ambientes críticos, monitoramento via Dynatrace."
  },
  {
    company: "AGSNasoft | Produban | Banco Santander",
    role: "Analista de Sistemas / Suporte a Aplicações Pleno",
    period: "01/2013 – 01/2014",
    description: "Suporte aos Portais de grande tráfego como Internet Banking e Intranet. Tecnologias: Java, WebSphere, Tomcat, Liferay, Fatwire, Oracle, Apache, DB2. Implantação de certificados digitais multi-domínio e suporte à equipe de segurança da informação."
  },
  {
    company: "Masterdom | PRODESP | Tribunal de Justiça",
    role: "Analista de Sistemas Júnior",
    period: "10/2010 – 01/2013",
    description: "Desenvolvimento Web com J2EE, análise de requisitos, testes, HTML/CSS/JS com Dreamweaver. Utilização de WebSphere 6/7 ND, Aqua Data Studio, Rational Application Developer, CVS, SVN e StarTeam para versionamento."
  }
];

const certifications = [
  "MBA em Arquitetura de Soluções – FIAP",
  "SRE Foundation (2023)",
  "DevOps Pro",
  "Linux SysAdmin – 4Linux (2022)",
  "DevOps Essentials – CertProf (DEPC)",
  "Oracle OCI Foundations [1Z0-1085-21] (2021)"
];

// --- COMPONENTE PRINCIPAL DO PORTFÓLIO ---
export default function Portfolio() {
  return (
    <div>
      {/* <Navbar />  <-- Desativado por agora */}

      {/* --- SEÇÃO INÍCIO --- */}
      <section id="inicio">
        <h1>João Renato Alves</h1>
        <h2>SRE | DevOps Engineer</h2> {/* <-- Versão simples */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <a href="https://www.linkedin.com/in/joaorenatoalves" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/jraalves" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>

      {/* --- SEÇÃO SOBRE --- */}
      <section id="sobre">
        <h2>Sobre Mim</h2>
        {/* Foto desativada temporariamente para simplificar */}
        <p>
          Engenheiro SRE/DevOps com sólida experiência...
        </p>
      </section>

      {/* --- SEÇÃO HABILIDADES --- */}
      <section id="habilidades">
        <h2>Habilidades Técnicas</h2>
        {/* Versão simples com lista de texto */}
        <ul>
          <li>Cloud: AWS, Azure, OCI</li>
          <li>Contêineres: Docker, Kubernetes</li>
          <li>CI/CD: Jenkins, GitLab CI</li>
        </ul>
      </section>

      {/* O resto das seções (Experiência, Certificações, Contato, Footer ) continua igual */}
      <section id="experiencia">
        <h2>Experiência Profissional</h2>
        {experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: '25px' }}>
            <h3>{exp.role}</h3>
            <p style={{ color: '#bbb', fontStyle: 'italic', margin: '0' }}>{exp.company} | {exp.period}</p>
            <p style={{ marginTop: '5px' }}>{exp.description}</p>
          </div>
        ))}
      </section>
      <section id="certificacoes">
        <h2>Cursos e Certificações</h2>
        <ul>{certifications.map((cert, index) => (<li key={index}>{cert}</li>))}</ul>
      </section>
      <section id="contato">
        <h2>Contato</h2>
        <p>Email: jotatoxxi@gmail.com</p>
      </section>
      <footer style={{ textAlign: 'center', padding: '20px' }}><p>Desenvolvido por João Renato Alves.</p></footer>
    </div>
  );
}
