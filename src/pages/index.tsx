import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/utils/layout";
import Main from "../components/sections/Main";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

const Index = () => (
  <Layout>
    <Main />
    <Skills />
    <Experience />
    <Contact />
  </Layout>
);

export default Index;

export const Head: HeadFC = () => <title>Portfolio</title>;
