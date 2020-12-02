const themePalettes = {
    light: {
        primary: '#1890ff',
        siderBgColor: '#FFF',
        mainBgColor: '#FFF',
        siderExternalLinksColor: 'rgba(0, 0, 0, 0.5)',
        mainTitleColor: 'rgba(0, 0, 0, 0.85)',
        subTitleColor: 'rgba(0,0,0,0.5)',
        textColor: 'rgba(0, 0, 0, 0.85)',
        subTextColor: 'rgba(0,0,0,0.5)',
        cardBodyBackground: '#FFF',
        cardHeaderBackground: '#FAFAFA'
    },
    dark: {
        primary: '#1890ff',
        mainBgColor: '#1f1f1f',
        siderBgColor: '#141414',
        siderExternalLinksColor: 'rgba(255,255,255,0.5)',
        mainTitleColor: '#1890ff',
        subTitleColor: 'rgba(255, 255, 255, 0.5)',
        textColor: 'rgba(255, 255, 255, 0.85)',
        subTextColor: 'rgba(255, 255, 255, 0.5)',
        cardBodyBackground: '#141414',
        cardHeaderBackground: '#0A0A0A'
    }
};

const theme = {
    padding: {
        topSection: '128px'
    }
};

const themeGenerator = (mode) => ({
    ...theme,
    palette: themePalettes[mode]
});

export default themeGenerator;