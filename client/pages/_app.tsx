import { Footer, Header } from "@/componants";
import "@/styles/componants/hero.css";
import "@/styles/globals.css";
import "@/styles/componants/footer.css";
import "@/styles/componants/button.css";
import "@/styles/componants/sidebar.css";
import "@/styles/componants/layout.css";
import "@/styles/componants/titles.css";
import "@/styles/tools.css";
import "@/styles/about.css";
import "@/styles/contact.css";
import "@/styles/componants/homeCards.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
