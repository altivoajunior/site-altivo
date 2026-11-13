
import { useState } from 'react'
import emailjs from '@emailjs/browser'

import './App.css'

import { Mail, Phone, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

// =========================================
// CONFIGURAÇÃO EMAILJS
// =========================================

const EMAILJS_SERVICE_ID = 'service_8eyuqng'
const EMAILJS_CONTACT_TEMPLATE = 'template_c1r2k05'
const EMAILJS_AUTOREPLY_TEMPLATE = 'template_yheq9js'
const EMAILJS_PUBLIC_KEY = 'u8WVjqOvAKgMd79yr'

function App() {
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: ''
  })

  // =========================================
  // ENVIO DO FORMULÁRIO
  // =========================================

  async function handleSubmit(event) {
    event.preventDefault()

    if (sending) return

    const form = event.currentTarget
    const formData = new FormData(form)

    const nome = formData.get('nome')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const assunto = formData.get('assunto')?.toString().trim()
    const mensagem = formData.get('mensagem')?.toString().trim()

    if (!nome || !email || !assunto || !mensagem) {
      setStatus({
        type: 'error',
        message: 'Preencha todos os campos antes de enviar.'
      })
      return
    }

    setSending(true)

    setStatus({
      type: '',
      message: ''
    })

    const templateParams = {
      nome,
      email,
      assunto,
      mensagem
    }

    try {
      // ENVIA A MENSAGEM PARA SEU OUTLOOK

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // ENVIA A RESPOSTA AUTOMÁTICA AO VISITANTE

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )

        setStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Você receberá uma confirmação por e-mail.'
        })
      } catch (autoReplyError) {
        console.error(
          'Erro ao enviar resposta automática:',
          autoReplyError
        )

        setStatus({
          type: 'success',
          message: 'Sua mensagem foi enviada com sucesso! Obrigado pelo contato.'
        })
      }

      form.reset()

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)

      setStatus({
        type: 'error',
        message: 'Não foi possível enviar sua mensagem. Tente novamente em alguns instantes.'
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <main>

      {/* =====================================
          NAVEGAÇÃO
      ===================================== */}

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

      {/* =====================================
          APRESENTAÇÃO
      ===================================== */}

      <section className="hero" id="inicio">

        <p className="eyebrow">
          DESENVOLVEDOR EM FORMAÇÃO
        </p>

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

      {/* =====================================
          SOBRE MIM
      ===================================== */}

      <section className="content-section" id="sobre">

        <p className="eyebrow">
          01 / SOBRE MIM
        </p>

        <h2>
          Transformando aprendizado em projetos.
        </h2>

        <p>
          Formado em Análise e Desenvolvimento de Sistemas
          e estudante de Engenharia de Software.
          Estou construindo minha trajetória na tecnologia,
          desenvolvendo projetos e aprimorando minhas
          habilidades em programação e desenvolvimento de software.
        </p>

      </section>

      {/* =====================================
          TECNOLOGIAS COM TOOLTIPS
      ===================================== */}

      <section className="content-section" id="tecnologias">

        <p className="eyebrow">
          02 / TECNOLOGIAS
        </p>

        <h2>
          Ferramentas que utilizo
        </h2>

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

      {/* =====================================
          PROJETOS
      ===================================== */}

      <section className="content-section" id="projetos">

        <p className="eyebrow">
          03 / PORTFÓLIO
        </p>

        <h2>
          Meus projetos
        </h2>

        <p>
          Este espaço será atualizado conforme novos projetos
          forem desenvolvidos.
        </p>

        <article className="project-card">

          <span className="project-number">
            PROJETO 001
          </span>

          <h3>
            Meu portfólio
          </h3>

          <p>
            Um espaço para apresentar minha evolução,
            minhas habilidades e meus projetos.
          </p>

          <span className="project-status">
            Em desenvolvimento
          </span>

        </article>

      </section>

      {/* =====================================
          CONTATO
      ===================================== */}

      <section className="content-section contact" id="contato">

        <p className="eyebrow">
          04 / CONTATO
        </p>

        <h2>
          Vamos construir algo juntos?
        </h2>

        <p>
          Tem uma ideia ou oportunidade? Entre em contato.
          Será um prazer conversar com você!
        </p>

        {/* CARTÕES DE CONTATO */}

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
            href="https://github.com/altivoajunior"
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

        {/* =================================
            FORMULÁRIO DE CONTATO
        ================================= */}

        <div className="contact-form-container">

          <div className="contact-form-heading">

            <span className="form-label">
              ENTRE EM CONTATO
            </span>

            <h3>
              Envie uma mensagem
            </h3>

            <p>
              Preencha os campos abaixo. Responderei
              assim que possível!
            </p>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label htmlFor="nome">
                Nome completo
              </label>

              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                autoComplete="name"
                maxLength={100}
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="email">
                Seu e-mail
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                autoComplete="email"
                maxLength={150}
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="assunto">
                Assunto
              </label>

              <input
                type="text"
                id="assunto"
                name="assunto"
                placeholder="Sobre o que deseja conversar?"
                maxLength={150}
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="mensagem">
                Mensagem
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Escreva sua mensagem..."
                rows={6}
                maxLength={3000}
                required
              />

            </div>

            {/* STATUS DO ENVIO */}

            {status.message && (
              <div
                className={`form-status ${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}

            {/* BOTÃO */}

            <button
              type="submit"
              className="form-submit"
              disabled={sending}
            >

              {sending ? (
                <>
                  <span className="loading-spinner" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar mensagem
                </>
              )}

            </button>

            <p className="form-privacy">
              Suas informações serão utilizadas apenas
              para responder ao seu contato.
            </p>

          </form>

        </div>

      </section>

      {/* =====================================
          RODAPÉ
      ===================================== */}

      <footer>

        <a href="#inicio" className="logo">
          ALTIVO JUNIOR<span>DEV</span>
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
