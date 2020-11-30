import 'antd/dist/antd.less';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
