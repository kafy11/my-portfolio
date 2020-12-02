import React, { useEffect, useState } from 'react';

//cria o media query
const mql = process.browser && window.matchMedia(`(min-width: 800px)`);

export const MobileContext = React.createContext();

const MobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (process.browser) {
            setIsMobile(!mql.matches);

            mql.addListener(() => {
                setIsMobile(!mql.matches);
            });
        }
    }, []);

    return (
        <MobileContext.Provider value={isMobile}>
            {children}
        </MobileContext.Provider>
    );
}

export default MobileProvider;