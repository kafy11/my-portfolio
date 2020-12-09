import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import * as locales from "../src/locales";
import 'antd/dist/antd.less';
import { 
  LightDarkModeProvider, 
  MobileProvider 
} from '../src/providers';

function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter();
  const messages = locales[locale];

  return (
    <MobileProvider>
      <LightDarkModeProvider>
        <IntlProvider
          locale={locale}
          defaultLocale={defaultLocale}
          messages={messages}
        >
          <Component {...pageProps} />
        </IntlProvider>
      </LightDarkModeProvider>
    </MobileProvider>
  );
}

export default MyApp
