import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useState, useEffect } from "react";

// comp
import { Layout } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
