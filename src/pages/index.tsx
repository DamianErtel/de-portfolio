import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/utils/Layout";
import Main from "../components/sections/Main";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import {
  LocationContext,
  LocationContextProps,
} from "../components/utils/LocationContext";

const Index = ({ location }: PageProps) => {
  const [contextValue, setContextValue] = useState<LocationContextProps>({
    location,
    scrollIndex: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const index = window.scrollY / window.innerHeight;
      const roundIndex = Math.round(index);
      if (contextValue?.scrollIndex !== roundIndex) {
        setContextValue({ location, scrollIndex: roundIndex });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, contextValue]);

  return (
    <LocationContext.Provider value={contextValue}>
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
