import React, { createContext, useState } from "react";

const CurrentPageContext = createContext();

export function CurrentPageProvider({ children }) {
  const [accueil, setAccueil] = useState(true);
  const [contact, setContact] = useState(false);
  const [royalassets, setRoyalassets] = useState(false);
  const [royalfamily, setRoyalfamily] = useState(false);

  return (
    <CurrentPageContext.Provider
      value={{
        accueil,
        setAccueil,
        contact,
        setContact,
        royalassets,
        setRoyalassets,
        royalfamily,
        setRoyalfamily,
      }}
    >
      {children}
    </CurrentPageContext.Provider>
  );
}