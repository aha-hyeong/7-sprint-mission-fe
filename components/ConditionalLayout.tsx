"use client";

import { usePathname } from "next/navigation";
import Header from "components/Header";
import Footer from "components/Footer";
import { ReactNode } from "react";

export default function ConditionalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signUp";

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
