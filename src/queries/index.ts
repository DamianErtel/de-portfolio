import { graphql } from "gatsby";

export const skillQuery = graphql`
  {
    gcms {
      skills {
        id
        name
        value
      }
    }
  }
`;
