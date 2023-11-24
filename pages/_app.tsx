import "/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ThemeProvider attribute="class" enableSystem={false} enableColorScheme>
        <Component {...pageProps} />;
      </ThemeProvider>
    </MantineProvider>
  );
}
