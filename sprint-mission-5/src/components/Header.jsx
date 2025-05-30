import logo from '../assets/image/panda-face.svg';
import './Header.css';

function Header() {
  return (
    <header className="top-header">
      <div className="navigation">
        <div className="main-title">
          <img className="logo" src={logo} alt="판다마켓 로고" />
          <h1 className="title">판다마켓</h1>
        </div>
        <ul className="menu">
          <li className="free-board">
            <a href="">자유게시판</a>
          </li>
          <li className="used-market">
            <a href="">중고마켓</a>
          </li>
        </ul>
        <a className="login" href="asdf">
          로그인
        </a>
      </div>
    </header>
  );
}

export default Header;
