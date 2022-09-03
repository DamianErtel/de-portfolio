import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/utils/layout";
import Main from "../components/sections/main";

const Index = () => (
  <Layout>
    <Main />
  </Layout>
);

export default Index;

export const Head: HeadFC = () => <title>Portfolio</title>;
