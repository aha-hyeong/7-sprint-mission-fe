import Link from "next/link";
import Image from "next/image";
import styles from "./MainLogo.module.css";

interface MainLogoProps {
  variant?: "header" | "auth";
  size?: "small" | "big";
}

export default function MainLogo({ variant = "header", size = "small" }: MainLogoProps) {
  const imageSize = size === "small" ? 40 : 80;

  return (
    <div className={`${styles.mainLogoCon} ${styles[variant]}`}>
      <Link
        rel="homePage"
        href={"/"}
        className={styles.mainLogo}
      >
        <Image
          src="/panda_face.svg"
          alt="판다로고"
          width={imageSize}
          height={imageSize}
        />
        <h1 className={styles.mainText}>판다마켓</h1>
      </Link>
    </div>
  );
}
