import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useState, useEffect } from "react";

// comp
import { Layout, SessionProvider } from "@/components";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
