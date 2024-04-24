import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css';
export const metadata: Metadata = {
  title: "Studio",
  description: "Video Calling app",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        layout:{
          socialButtonsVariant:'iconButton'
        },
        
        variables:{
          colorText:'#fff',
          colorPrimary:'#0E78F9',
          colorBackground:'#1c1f2e',
          colorInputBackground:'#252a41',
          colorInputText:'#fff'
        }
      }}>
      <body className={`${inter.className} bg-dark-2 `}>
        {children}
        <Toaster />
        </body>

      </ClerkProvider>
    </html>
  );
}
