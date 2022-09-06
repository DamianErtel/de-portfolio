import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/utils/Layout";
import Main from "../components/sections/Main";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import { LocationContext } from "../components/utils/LocationContext";

const Index = ({ location }: PageProps) => (
  <LocationContext.Provider value={location}>
    <Layout>
      <Main />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  </LocationContext.Provider>
);

export default Index;

export const Head: HeadFC = () => <title>Portfolio</title>;
