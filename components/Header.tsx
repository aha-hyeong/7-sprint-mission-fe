import Link from "next/link";
import styles from "./Header.module.css";
import MainLogo from "./MainLogo";

export default function Header() {
  return (
    <header className={styles.container}>
      <MainLogo
        variant="header"
        size="small"
      />

      <Link
        href={"/login"}
        className={styles.loginBtn}
      >
        로그인
      </Link>
    </header>
  );
}
