import facebook from '../assets/image/facebook.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="bottom-footer">
      <div className="footer-left">
        <p>©codeit - 2024</p>
      </div>
      <div className="footer-center">
        <a href="">Privacy Policy</a>
        <a href="">FAQ</a>
      </div>
      <div className="footer-right">
        <a href="">
          <img src={facebook} alt="페이스북" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
