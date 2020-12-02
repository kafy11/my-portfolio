import 'antd/dist/antd.less';
import LightDarkModeProvider from '../src/providers/LightDarkModeProvider';
import MobileProvider from '../src/providers/MobileProvider';

function MyApp({ Component, pageProps }) {
  return (
    <MobileProvider>
      <LightDarkModeProvider>
        <Component {...pageProps} />
      </LightDarkModeProvider>
    </MobileProvider>
  );
}

export default MyApp
