"use client"
import Link from "next/link";
export default function FooterPrincipal() {
  return (
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>
                <span className="brand-name">Food Hub</span>
              </h2>
              <p>A melhor experiência em delivery.</p>
            </div>
            <div className="footer-links">
              <h3>Links Úteis</h3>
              <ul>
                <li><Link href="#">Sobre nós</Link></li>
                <li><Link href="#">Termos de serviço</Link></li>
                <li><Link href="#">Política de privacidade</Link></li>
                <li><Link href="#">Contato</Link></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contato</h3>
              <p>
                <i className="fas fa-envelope"></i>{' '}
                <a href="mailto:vieirabrayan42@gmail.com">vieirabrayan42@gmail.com</a>
              </p>
              <p>
                <i className="fas fa-phone"></i> (34) 98418-0453
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Food Hub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
  );
}