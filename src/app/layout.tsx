import "./globals.css";
// import { AntdRegistry } from '@ant-design/nextjs-registry';
// import Header from "@/components/header";

// import Link from "next/link";


export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {/* <AntdRegistry> */}
        {children}
        {modal}
        {/* </AntdRegistry> */}
      </body>
    </html>
  );
}
