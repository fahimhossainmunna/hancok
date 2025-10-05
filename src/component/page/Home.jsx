import React from "react";
import Header from "../layouts/Header";
import Banner from "../layouts/Banner";
import About from "../layouts/About";
import Popular from "../layouts/Popular";
import Streming from "../layouts/Streming";
import Sale from "../layouts/Sale";
import Catalog from "../layouts/Catalog";
import Accessorise from "../layouts/Accessorise";
import Meet from "../layouts/Meet";
import QuestionP from "../layouts/QuestionP";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <>
      <Header />

      {/* Each section must have ID to enable scroll */}
      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="game">
        <Popular />
      </section>

      <section id="streamin">
        <Streming />
      </section>
      <section id="sale">
      <Sale/>
      </section>

      
      <Catalog/>
      <Accessorise/>

      <section id="team">
        <Meet />
      </section>

      <section id="faq">
        <QuestionP />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default Home;
