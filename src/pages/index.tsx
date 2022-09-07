import React, { useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/utils/Layout";
import Main from "../components/sections/Main";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import { LocationContext } from "../components/utils/LocationContext";
import { navLinks } from "../utils/links";

const Index = ({ location }: PageProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const index = window.scrollY / window.innerHeight;
      if (Number.isInteger(index)) {
        // window.location.hash = navLinks[index]?.to;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <Main />
        <Skills />
        <Experience />
        <Contact />
      </Layout>
    </LocationContext.Provider>
  );
};

export default Index;

export const Head: HeadFC = () => <title>Portfolio</title>;
