import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useState, useEffect } from "react";

// google
import { GoogleOAuthProvider } from "@react-oauth/google";

// comp
import { Layout } from "@/components";

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
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID!}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleOAuthProvider>
  );
}
