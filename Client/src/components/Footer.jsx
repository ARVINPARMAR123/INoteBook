import {Link} from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>iNoteBook</h2>
          <p>Your go-to app for quick and easy notes!</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/about">Contact</Link>
          <Link to="/about">Privacy Policy</Link>
        </div>

        <div className="footer-socials">
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Link>
          <Link
             to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
             to="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} iNoteBook. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
