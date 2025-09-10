import styles from "./ProductCard.module.css";
import Image from "next/image";
import { Product } from "types/Product";
import { mockProducts } from "@/constants/mockProducts";

interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className={styles.container}>
      <div className={styles.productImg}>상품사진</div>
      <div className={styles.productTitle}></div>
      <p className={styles.productPrice}>{product.price}</p>
      <div className={styles.like}></div>
    </div>
  );
}
