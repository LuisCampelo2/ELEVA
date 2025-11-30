export const Footer = () => {
  return (
    <>
        <div className="footer-container">
          <div className="footer-column">
            <h3>Eleva</h3>
            <p>Transformando ideias estudantis em grandes projetos.</p>
          </div>

          <div className="footer-column">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="/projects">Projetos</a>
              </li>
              <li>
                <a href="/students">Estudantes</a>
              </li>
              <li>
                <a href="/sobre">Sobre nós</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contato</h4>
            <ul>
              <li>Brasília - DF</li>
              <li>contato@eleva.com</li>
              <li>(61) 99999-8888</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Social</h4>
            <div className="footer-social">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-github"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Eleva. Todos os direitos reservados.</p>
        </div>
    </>
  );
};
