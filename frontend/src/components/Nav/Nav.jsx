import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const {
        accueil,
        setAccueil,
        contact,
        setContact,
        royalassets,
        setRoyalassets,
        royalfamily,
        setRoyalfamily,
    } = useContext(CurrentPageContext);

    const goToAccueil = () => {
        setAccueil(true);
        setContact(false);
        setRoyalassets(false);
        setRoyalfamily(false);
    }

    const goToContact = () => {
        setAccueil(false);
        setContact(true);
        setRoyalassets(false);
        setRoyalfamily(false);
    }

    const goToRoyalAssets = () => {
        setAccueil(false);
        setContact(false);
        setRoyalassets(true);
        setRoyalfamily(false);
    }

    const goToRoyalFamily = () => {
        setAccueil(false);
        setContact(false);
        setRoyalassets(false);
        setRoyalfamily(true);
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [openToogle, setOpenToogle] = useState(false);
    const handleToogle = () => {
    setOpenToogle(!openToogle);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="navAndContain">
      {screenWidth < 750 ? (
        <button type="button" className="openToogle" onClick={handleToogle}>
          =
        </button>
      ) : null}

      <nav
        className={
          openToogle || screenWidth > 750 ? "navContainer" : "navContainerOff"
        }
      >
    
        <ul>
            <li>
                <Link 
                  to="/" 
                  className = {accueil ? "navLinkOn" : "navLinkOff"} 
                  onClick={goToAccueil}
            >
                 <h2>Accueil</h2>
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    className = {contact ? "navLinkOn" : "navLinkOff"}
                    onClick={goToContact}
                >   
                    <h2>Contact</h2>
                </Link>
            </li>
            <li>
                <Link
                    to="/royalassets"
                    className = {royalassets ? "navLinkOn" : "navLinkOff"}
                    onClick={goToRoyalAssets}
                >   
                    <h2>Royal Assets</h2>
                </Link>
            </li>
            <li>
                <Link
                    to="/royalfamily"
                    className = {royalfamily ? "navLinkOn" : "navLinkOff"}
                    onClick={goToRoyalFamily}
                >   
                    <h2>Royal Family</h2>
                </Link>
            </li>
        </ul>
      </nav>
    </div>
    );
  }

export default Nav;