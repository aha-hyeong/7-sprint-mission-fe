import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer__list}>
          <Link
            className={styles.footer__home}
            href={"/"}
          >
            ©codeit - 2024
          </Link>
          <div className={styles.footer__middle}>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>FAQ</Link>
          </div>
          <div className={styles.footer__icons}>
            <Link
              href="https://facebook.com"
              target="_blank"
            >
              <Image
                className={styles.footer__icon}
                src="/footer_icons/ic_facebook.svg"
                width={20}
                height={20}
                alt="Facebook"
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
            >
              <Image
                className={styles.footer__icon}
                src="/footer_icons/ic_twitter.svg"
                width={20}
                height={20}
                alt="Twitter"
              />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
            >
              <Image
                src="/footer_icons/ic_youtube.svg"
                width={20}
                height={20}
                alt="YouTube"
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
            >
              <Image
                src="/footer_icons/ic_instagram.svg"
                width={20}
                height={20}
                alt="Instagram"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
