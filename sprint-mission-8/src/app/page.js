import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.main__top}>
        <div className={styles.main__top__text}>
          <h2>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h2>
          <Link
            href="/products"
            className={styles.products__link}
          >
            구경하러가기
          </Link>
        </div>
        <Image
          src="/Img_home_top.svg"
          width={746}
          height={340}
          alt="구경하러가기 이미지"
          className={styles.img__home__top}
        />
      </div>
      <div className={styles.main__page__items}>
        <div className={styles.hot__items}>
          <Link
            href={"/"}
            className={styles.hot__item}
          >
            <Image
              src="/img_hot_item.svg"
              width={588}
              height={444}
              alt="핫 아이템"
            />
            <div className={styles.hot__item__text}>
              <span>Hot item</span>
              <h2>
                인기 상품을
                <br />
                확인해 보세요
              </h2>
              <h3>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </h3>
            </div>
          </Link>
        </div>
        <div className={styles.search__items}>
          <Link
            href={"/search"}
            className={styles.search__item}
          >
            <div className={styles.search__item__text}>
              <span>Search</span>
              <h2>
                구매를 원하는
                <br />
                상품을 검색하세요
              </h2>
              <h3>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </h3>
            </div>
            <Image
              src={"/img_search_item.svg"}
              width={588}
              height={444}
              alt="검색 아이템"
            />
          </Link>
        </div>
        <div className={styles.home__register}>
          <Link
            href={"/market"}
            className={styles.home__register__link}
          >
            <Image
              src={"/img_register.svg"}
              width={588}
              height={444}
              alt="상품 등록"
            />
            <div className={styles.home__register__text}>
              <span>Register</span>
              <h2>
                판매를 원하는
                <br />
                상품을 등록하세요
              </h2>
              <h3>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </h3>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.main__bottom}>
        <div className={styles.main__bottom__text}>
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
        </div>
        <Image
          src={"/Img_home_bottom.svg"}
          width={746}
          height={397}
          className={styles.img__home__bottom}
          alt="판다마켓 하단 이미지"
        />
      </div>
    </main>
  );
}
