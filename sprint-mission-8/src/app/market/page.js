"use client";

import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import React, { useState } from "react";
import TagInput from "../../../components/TagInput";
import styles from "./page.module.css";

export default function MarketPage() {
  const [form, setForm] = useState({
    productName: "",
    productDesc: "",
    price: "",
    tags: [],
  });
  const [errors, setErrors] = useState({
    productName: "",
    productDesc: "",
    price: "",
    tags: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  React.useEffect(() => {
    const valid =
      form.productName.trim() &&
      form.productDesc.length >= 10 &&
      /^[0-9]+$/.test(form.price.replace(/,/g, "")) &&
      form.tags.length > 0 &&
      form.tags.every((tag) => tag.length <= 10) &&
      !errors.productName &&
      !errors.productDesc &&
      !errors.price &&
      !errors.tags;
    setIsFormValid(valid);
  }, [form, errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "price") {
      // 숫자만 추출
      let onlyNums = value.replace(/[^0-9]/g, "");
      // 맨 앞 0 제거 (단, 값이 0 하나만 있을 때는 허용)
      if (onlyNums.length > 1) {
        onlyNums = onlyNums.replace(/^0+/, "");
      }
      // 천단위 콤마 추가
      newValue = onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setForm((prev) => ({ ...prev, [name]: newValue }));
      validateField(name, newValue);
    } else {
      setForm((prev) => ({ ...prev, [name]: newValue }));
      validateField(name, newValue);
    }
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "productName") {
      if (!value.trim()) error = "상품명을 입력해주세요";
    } else if (name === "productDesc") {
      if (value.length < 10) error = "10자 이상 입력해주세요";
    } else if (name === "price") {
      // 콤마 제거 후 숫자 체크
      const num = value.replace(/,/g, "");
      if (!/^[0-9]*$/.test(num)) error = "숫자로 입력해주세요";
    } else if (name === "tags") {
      if (value.length > 10) error = "10글자 이내로 입력해주세요";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleTagChange = (tagsArr) => {
    setForm((prev) => ({ ...prev, tags: tagsArr }));
    // 태그 유효성 검사
    if (tagsArr.some((tag) => tag.length > 10)) {
      setErrors((prev) => ({ ...prev, tags: "10글자 이내로 입력해주세요" }));
    } else {
      setErrors((prev) => ({ ...prev, tags: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    // 가격에서 콤마 제거 후 제출
    const submitData = {
      ...form,
      price: form.price.replace(/,/g, ""),
    };
    // 실제 제출 로직 (예: API 호출) 대신 콘솔 출력
    console.log("제출 데이터:", submitData);
    alert("상품이 등록되었습니다!");
    // 폼 초기화
    setForm({ productName: "", productDesc: "", price: "", tags: [] });
  };

  return (
    <form
      className={styles.market__form}
      onSubmit={handleSubmit}
    >
      <div className={styles.market__container}>
        <div className={styles.market__submit}>
          <h2>상품 등록하기</h2>
          <Button
            className={styles.Button}
            type="submit"
            disabled={!isFormValid}
          >
            등록
          </Button>
        </div>
        <div className={styles.market__input}>
          <InputField
            label="상품명"
            name="productName"
            placeholder="상품명을 입력해주세요"
            required
            value={form.productName}
            onChange={handleChange}
            error={errors.productName}
          />
          <InputField
            label="상품소개"
            name="productDesc"
            placeholder="상품 소개를 입력해주세요"
            required
            className={styles.market__description}
            as="textarea"
            value={form.productDesc}
            onChange={handleChange}
            error={errors.productDesc}
          />
          <InputField
            label="판매가격"
            name="price"
            placeholder="판매 가격을 입력해주세요"
            type="text"
            required
            value={form.price}
            onChange={handleChange}
            error={errors.price}
          />
          <TagInput
            label="태그"
            value={form.tags}
            onChange={handleTagChange}
            maxLength={10}
            error={errors.tags}
          />
        </div>
      </div>
    </form>
  );
}
