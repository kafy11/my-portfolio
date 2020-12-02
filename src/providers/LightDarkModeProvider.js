import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themeGenerator from '../theme';

export const LightDarkModeContext = React.createContext();

const LightDarkModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const theme = themeGenerator(mode);

    return (
        <LightDarkModeContext.Provider value={{
            mode,
            setMode
        }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </LightDarkModeContext.Provider>
    );
};

export default LightDarkModeProvider;