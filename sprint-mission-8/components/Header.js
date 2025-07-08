import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <h1 className={styles.logo}>
          <Link
            className={styles.main__logo}
            href="/"
          >
            <Image
              src="/panda_face.svg"
              width={40}
              height={40}
              alt="판다마켓 로고"
            />
            판다 마켓
          </Link>
        </h1>
        <div className={styles.top__navigation}>
          <Link
            href="/freeboard"
            className={styles.freeboard}
          >
            자유게시판
          </Link>
          <Link
            href="/market"
            className={styles.market}
          >
            중고마켓
          </Link>
        </div>
      </div>

      <Link
        href="/login"
        className={styles.login}
      >
        로그인
      </Link>
    </header>
  );
}
