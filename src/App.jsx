
import './App.css'

import { Mail, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function App() {
  return (
    <main>
      {/* NAVEGAÇÃO */}
      <nav className="navbar">
        <a href="#inicio" className="logo">
          ALTIVO JUNIOR<span>DEV</span>
        </a>

        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      {/* APRESENTAÇÃO */}
      <section className="hero" id="inicio">
        <p className="eyebrow">DESENVOLVEDOR EM FORMAÇÃO</p>

        <h1>
          Olá, eu sou
          <br />
          <span>Altivo Junior.</span>
        </h1>

        <p className="description">
          Construindo soluções digitais com tecnologia,
          criatividade e vontade de evoluir.
        </p>

        <div className="hero-buttons">
          <a href="#projetos" className="button primary">
            Ver meus projetos
          </a>

          <a href="#contato" className="button secondary">
            Entrar em contato
          </a>
        </div>

        {/* CARTÃO DE CÓDIGO */}
        <div className="code-card">
          <div className="window-dots">
            <span />
            <span />
            <span />
            <p>altivo.js</p>
          </div>

          <pre>
            <code>
              <span className="purple">const</span> desenvolvedor = {'{'}
              {'\n'}  nome: <span className="green">'Altivo Junior'</span>,
              {'\n'}  foco: <span className="green">'Desenvolvimento Web'</span>,
              {'\n'}  objetivo: <span className="green">'Criar soluções'</span>
              {'\n'}{'}'}
            </code>
          </pre>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="content-section" id="sobre">
        <p className="eyebrow">01 / SOBRE MIM</p>

        <h2>Transformando aprendizado em projetos.</h2>

        <p>
          Formado em Análise e Desenvolvimento de Sistemas
          e estudante de Engenharia de Software.
          Estou construindo minha trajetória na tecnologia,
          desenvolvendo projetos e aprimorando minhas
          habilidades em programação e desenvolvimento de software.
        </p>
      </section>

      {/* TECNOLOGIAS COM TOOLTIPS */}
      <section className="content-section" id="tecnologias">
        <p className="eyebrow">02 / TECNOLOGIAS</p>

        <h2>Ferramentas que utilizo</h2>

        <div className="tags">

          <span
            className="tech-item"
            data-tooltip="Linguagem de marcação utilizada para estruturar páginas web."
            tabIndex={0}
          >
            HTML
          </span>

          <span
            className="tech-item"
            data-tooltip="Linguagem de estilos responsável pelo visual e layout das páginas."
            tabIndex={0}
          >
            CSS
          </span>

          <span
            className="tech-item"
            data-tooltip="Linguagem de programação que adiciona interatividade às aplicações."
            tabIndex={0}
          >
            JavaScript
          </span>

          <span
            className="tech-item"
            data-tooltip="Superset do JavaScript que adiciona tipagem estática ao código."
            tabIndex={0}
          >
            TypeScript
          </span>

          <span
            className="tech-item"
            data-tooltip="Biblioteca JavaScript utilizada para construir interfaces de usuário."
            tabIndex={0}
          >
            React
          </span>

          <span
            className="tech-item"
            data-tooltip="Ferramenta de build que oferece um ambiente rápido de desenvolvimento."
            tabIndex={0}
          >
            Vite
          </span>

          <span
            className="tech-item"
            data-tooltip="Sistema de controle de versão para acompanhar alterações no código."
            tabIndex={0}
          >
            Git
          </span>

          <span
            className="tech-item"
            data-tooltip="Plataforma para hospedar projetos e colaborar com outros desenvolvedores."
            tabIndex={0}
          >
            GitHub
          </span>

        </div>
      </section>

      {/* PROJETOS */}
      <section className="content-section" id="projetos">
        <p className="eyebrow">03 / PORTFÓLIO</p>

        <h2>Meus projetos</h2>

        <p>
          Este espaço será atualizado conforme novos projetos
          forem desenvolvidos.
        </p>

        <article className="project-card">
          <span className="project-number">PROJETO 001</span>

          <h3>Meu portfólio</h3>

          <p>
            Um espaço para apresentar minha evolução,
            minhas habilidades e meus projetos.
          </p>

          <span className="project-status">
            Em desenvolvimento
          </span>
        </article>
      </section>

      {/* CONTATO */}
      <section className="content-section contact" id="contato">
        <p className="eyebrow">04 / CONTATO</p>

        <h2>Vamos construir algo juntos?</h2>

        <p>
          Tem uma ideia ou oportunidade? Entre em contato.
          Será um prazer conversar com você!
        </p>

        <div className="contact-list">

          {/* EMAIL */}
          <a
            href="mailto:altivoajunior@outlook.com"
            className="contact-item"
          >
            <span className="contact-icon">
              <Mail size={22} />
            </span>

            <span>
              <small>E-mail</small>
              <strong>altivoajunior@outlook.com</strong>
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/55DDDNUMERO"
            className="contact-item"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon whatsapp">
              <Phone size={22} />
            </span>

            <span>
              <small>WhatsApp</small>
              <strong>Vamos conversar</strong>
            </span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/SEU-USUARIO"
            className="contact-item"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon github">
              <FaGithub size={22} />
            </span>

            <span>
              <small>GitHub</small>
              <strong>Ver meus projetos</strong>
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/altivo-junior-113297379/"
            className="contact-item"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon linkedin">
              <FaLinkedin size={22} />
            </span>

            <span>
              <small>LinkedIn</small>
              <strong>Conecte-se comigo</strong>
            </span>
          </a>

        </div>
      </section>

      {/* RODAPÉ */}
      <footer>
        <a href="#inicio" className="logo">
          ALTIVO<span>DEV</span>
        </a>

        <p>
          © {new Date().getFullYear()} Altivo Junior.
          Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}

export default App
