import "@/styles/globals.css";
import { useEffect, useState } from 'react'



import type { AppProps } from "next/app";
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <div>

      <Component {...pageProps} />
    </div>

  );
};
