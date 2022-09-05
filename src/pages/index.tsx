import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/utils/layout";
import Main from "../components/sections/Main";
import Skills from "../components/sections/Skills";

const Index = () => (
  <Layout>
    <Main />
    <Skills />
  </Layout>
);

export default Index;

export const Head: HeadFC = () => <title>Portfolio</title>;
