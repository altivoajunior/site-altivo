
import './App.css'

function App() {
  return (
    <main>
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

      <section className="content-section" id="sobre">
        <p className="eyebrow">01 / SOBRE MIM</p>
        <h2>Transformando aprendizado em projetos.</h2>
        <p>
          Formado em Análise e Desenvolvimento de Sistemas e estudande de Engenharia de Software.
          Estou construindo minha trajetória na tecnologia,
          desenvolvendo projetos e aprimorando minhas habilidades
          em programação e desenvolvimento de software.
        </p>
      </section>

      <section className="content-section" id="tecnologias">
        <p className="eyebrow">02 / TECNOLOGIAS</p>
        <h2>Ferramentas que utilizo</h2>

        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Typescript</span>
          <span>React</span>
          <span>Vite</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>

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
          <span className="project-status">Em desenvolvimento</span>
        </article>
      </section>

      
<section className="content-section contact" id="contato">
  <p className="eyebrow">04 / CONTATO</p>

  <h2>Vamos construir algo juntos?</h2>

  <p>
    Tem uma ideia ou oportunidade? Entre em contato.
    Será um prazer conversar com você!
  </p>

  <div className="contact-list">
    <a href="mailto:SEUEMAIL@EXEMPLO.COM" className="contact-item">
      <span className="contact-icon">✉</span>
      <span>
        <small>E-mail</small>
        <strong>SEUEMAIL@EXEMPLO.COM</strong>
      </span>
    </a>

    <a
      href="https://wa.me/55DDDNUMERO"
      className="contact-item"
      target="_blank"
      rel="noreferrer"
    >
      <span className="contact-icon">☏</span>
      <span>
        <small>WhatsApp</small>
        <strong>(DD) 99999-9999</strong>
      </span>
    </a>

    <a
      href="https://github.com/SEU-USUARIO"
      className="contact-item"
      target="_blank"
      rel="noreferrer"
    >
      <span className="contact-icon">⌘</span>
      <span>
        <small>GitHub</small>
        <strong>Ver meus projetos</strong>
      </span>
    </a>
  </div>
</section>


      <footer>
        <a href="#inicio" className="logo">
          ALTIVO<span>DEV</span>
        </a>
        <p>© {new Date().getFullYear()} Altivo Junior. Todos direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App
