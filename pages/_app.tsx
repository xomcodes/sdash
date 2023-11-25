import "/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IntlProvider, MessageFormatElement } from "react-intl";
import ar from "@/languages/ar.json";
import en from "@/languages/ar.json";
import fr from "@/languages/ar.json";
import nl_NL from "@/languages/ar.json";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const messages = {
  ar,
  en,
  fr,
  "nl-NL": nl_NL,
};

function getDirection(locale: string) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

const router = useRouter();

const { locale } = router;
const messagesForLocale = messages[locale as keyof typeof messages];

if (!messagesForLocale) {
  console.error(`No messages found for locale: ${locale}`);
  // Handle the case where there's no matching locale
  // Example: locale = "en";
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        {/* <IntlProvider
          locale={String(locale)}
          messages={
            messagesForLocale as
              | Record<string, string>
              | Record<string, MessageFormatElement[]>
              | undefined
          }
        > */}
        <Component {...pageProps} dir={getDirection(String(locale))} />

        <ThemeProvider attribute="class" enableSystem={false} enableColorScheme>
          <Component {...pageProps} />
        </ThemeProvider>
        {/* </IntlProvider> */}
      </MantineProvider>
    </QueryClientProvider>
  );
}
