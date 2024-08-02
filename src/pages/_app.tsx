import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/login.css";
import "@/styles/register.css";
import "@/styles/navbar.css";
import "@/styles/intro.css";
import "@/styles/categories.css";
import "@/styles/footer.css";
import "@/styles/timereport.css";
import "@/styles/timereporttable.css";
import "@/styles/hero.css";
import "@/styles/features.css";
import "@/styles/overview.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
