import "/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IntlProvider, MessageFormatElement } from "react-intl";
import chn from "@/languages/chn.json";
import en from "@/languages/en.json";
import fr from "@/languages/fr.json";
import nl_NL from "@/languages/nl-NL.json";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// const messages = {
//   "zh-Hans": zh_Hans,
//   en,
//   fr,
//   "nl-NL": nl_NL,
// };

const messages = {
  chn,
  en,
  "nl-NL": nl_NL,
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { locale } = router;
  const messagesForLocale = messages[locale as keyof typeof messages];

  if (!messagesForLocale) {
    console.error(`No messages found for locale: ${locale}`);
    // Handle the case where there's no matching locale
    // Example: locale = "en";
  }
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <ThemeProvider attribute="class" enableSystem enableColorScheme>
          <IntlProvider
            locale={String(locale)}
            messages={
              messagesForLocale as unknown as
                | Record<string, string>
                | Record<string, MessageFormatElement[]>
            }
          >
            <Component {...pageProps} />
          </IntlProvider>
        </ThemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
