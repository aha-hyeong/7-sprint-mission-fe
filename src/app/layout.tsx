import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import ConditionalLayout from "components/ConditionalLayout";

export const metadata: Metadata = {
  icons: { icon: "/panda_face.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
