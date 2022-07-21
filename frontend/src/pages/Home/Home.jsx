import React from 'react';
import "./Home.css";
import Nav from '../../components/Nav/Nav';


function Home() {
  return (
    <>
    <Nav />
      <h3>Kingdom of Colchis</h3>
      <div className="contenu" id="fond">
          <h1>
              Welcome to the Royal Kingdom of Colchis
          </h1>
      </div>
  <section>
    <h2>
      About the kingdom
    </h2>
    <p>
      Welcome to the website of the Kingdom of Colchis. This majestic kingdom
      is located by the Black Sea. In addition to its sumptuousness and its
      idyllic setting, the kingdom is rather known for its javelin throwing
      champions. Indeed they are undefeated in this area and frequently offer
      competitions for anyone who wants to rub shoulders with them.
    </p>
  </section>
  </>
  );
}

export default Home;