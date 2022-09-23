import React, { useMemo, useState } from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/utils/Layout";
import Main from "../components/sections/Main";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import {
  LocationContext,
  LocationContextProps,
} from "../components/utils/LocationContext";
import Projects from "../components/sections/Projects";

const Index = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const contextValue = useMemo<LocationContextProps>(
    () => ({ scrollIndex, setScrollIndex }),
    [scrollIndex]
  );

  return (
    <LocationContext.Provider value={contextValue}>
      <Layout>
        <Main />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </LocationContext.Provider>
  );
};

export default Index;

export const Head: HeadFC = () => <title>Portfolio</title>;
