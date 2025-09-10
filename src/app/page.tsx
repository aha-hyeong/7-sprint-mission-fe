import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContents}>
        <section
          id="hero"
          className={styles.banner + " " + styles.hero}
        >
          <div className={styles.wrapper}>
            <h2>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h2>
            <Link
              href="/products"
              className={styles.pillButton}
            >
              구경하러 가기
            </Link>
          </div>
          <Image
            src="/img_home_top.svg"
            alt="판다마켓 홈"
            width={746}
            height={340}
            className={styles.mainLogo}
          />
        </section>

        <section
          id="features"
          className={styles.wrapper + " " + styles.features}
        >
          <div className={styles.feature}>
            <Image
              src="/Img_home_01.svg"
              alt="인기 상품"
              width={588}
              height={444}
            />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTag}>Hot item</h3>
              <h2>
                인기 상품을
                <br />
                확인해 보세요
              </h2>
              <p className={styles.featureDescription}>
                가장 HOT한 중고거래 물품을
                <br />
                판다마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTag}>Search</h3>
              <h2>
                구매를 원하는
                <br />
                상품을 검색하세요
              </h2>
              <p className={styles.featureDescription}>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
            <Image
              src="/Img_home_02.svg"
              alt="검색 기능"
              width={588}
              height={444}
            />
          </div>
          <div className={styles.feature}>
            <Image
              src="/Img_home_03.svg"
              alt="판매 상품 등록"
              width={588}
              height={444}
            />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTag}>Register</h3>
              <h2>
                판매를 원하는
                <br />
                상품을 등록하세요
              </h2>
              <p className={styles.featureDescription}>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <section
          id="bottomBanner"
          className={styles.banner + " " + styles.bottomBanner}
        >
          <div className={styles.wrapper}>
            <h2>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h2>
          </div>
          <Image
            src="/Img_home_bottom.svg"
            alt="판다마켓 홈 바텀"
            width={746}
            height={397}
            className={styles.mainLogo}
          />
        </section>
      </div>
    </div>
  );
}
