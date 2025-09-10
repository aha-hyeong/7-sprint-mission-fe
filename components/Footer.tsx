import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>©codeit - 2024</div>
      <div className={styles.footerMenu}>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/faq">FAQ</Link>
      </div>
      <div className={styles.socialMedia}>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ic_facebook.svg"
            alt="페이스북"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ic_twitter.svg"
            alt="트위터"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ic_youtube.svg"
            alt="유튜브"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ic_instagram.svg"
            alt="인스타그램"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </footer>
  );
}
