import ScrollToTop from "@/components/common/ScrollToTop";
import "../public/css/style.css";
import { ToastContainer } from "react-toastify";
import { DM_Sans } from "next/font/google";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";
const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
// export const metadata = {
//   title: "Your App Title",
//   description: "Your app description goes here.",
//   icons: {
//     icon: [
//       { url: "/img/general/oritto.png", sizes: "32x32", type: "image/png" },
//       // { url: "/img/general/oritto.png", sizes: "64x64", type: "image/png" },
//     ],
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: "/site.webmanifest",
// };
// const inter = Inter({ subsets: ["latin"] });
if (typeof window !== "undefined") {
  import("bootstrap");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={dmsans.className}>
        <ToastContainer />
        <Wrapper>{children}</Wrapper>
        <ScrollToTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
