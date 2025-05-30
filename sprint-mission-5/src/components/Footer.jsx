import facebook from '../assets/image/facebook.svg';
import twitter from '../assets/image/twitter.svg';
import youtube from '../assets/image/youtube.svg';
import instagram from '../assets/image/instagram.svg';
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
        <a href="">
          <img src={twitter} alt="트위터" />
        </a>
        <a href="">
          <img src={youtube} alt="유튜브" />
        </a>
        <a href="">
          <img src={instagram} alt="인스타그램" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
