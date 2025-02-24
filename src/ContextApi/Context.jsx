
import { createContext } from 'react';

export const EspressoContext = createContext(null);
const Context = ({ children }) => {
    const data = {
        name: "abc"
    }
    return (
        <EspressoContext.Provider value={data}>
            {children}

        </EspressoContext.Provider>
    );
};

export default Context;
