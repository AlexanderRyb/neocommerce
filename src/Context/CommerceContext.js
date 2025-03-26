import React, { createContext, useState, useContext } from 'react';
const CommerceContext = createContext();

export const CommerceProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <CommerceContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          {children}
        </CommerceContext.Provider>
      );
    };
    
    export const useCommerce = () => useContext(CommerceContext);