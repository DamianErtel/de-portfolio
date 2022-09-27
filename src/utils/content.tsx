import React, { ReactNode } from "react";
import { BaseButton } from "../commonStyles";

export type NonEmptyArr<T> = [T, ...T[]];

export interface ID {
  id: string;
}

export interface IContent extends ID {
  name: string;
  value: string;
}

export interface IProject extends ID {
  name: string;
  value: string | ReactNode;
  link: string;
}

export interface IEmployer extends ID {
  name: string;
  value: ReactNode;
}

const frontendStack: IContent & ID = {
  id: "frontendStack",
  name: "Frontend",
  value:
    "Javascript/Typescript, React, Gatsby, Styled-Components, Redux, MUI, ",
};

const backendStack: IContent = {
  id: "backendStack",
  name: "Backend",
  value: "Node.js, Express, GraphQL, ApolloServer, Server-Side-Rendering",
};

const otherStack: IContent = {
  id: "otherStack",
  name: "Other",
  value: "Apache, Linux, MacOS, Docker",
};

export const techStack: NonEmptyArr<IContent> = [
  frontendStack,
  backendStack,
  otherStack,
];

const affee: IEmployer = {
  id: "affeeEmployer",
  name: "Affee360",
  value: (
    <>
      <h2>
        Fullstack Developer{" "}
        <a href="https://www.affee360.com">
          <span>@ Affee360</span>
        </a>
      </h2>
      <h3>September 2021 - July 2022</h3>
      <ul>
        <li>
          Developing web applications using JavaScript, TypeScript and React.
        </li>
        <li>
          Debugging and extending functionality of company&apos;s Express.js
          API.
        </li>
        <li>Maintaining ubuntu server.</li>
      </ul>
    </>
  ),
};

export const employers: NonEmptyArr<IEmployer> = [affee];
export const projects: NonEmptyArr<IProject> = [
  {
    id: "akademiaProject",
    name: "Akademia",
    value: (
      <>
        <p>
          Website I&apos;ve worked on while working for{" "}
          <a href="https://www.affee360.com">
            <span>Affee360</span>
          </a>
          . Made for managing live events/trainings and on-line webinars, with
          addition of blog functionality
        </p>
        <BaseButton
          as="a"
          href="https://akademia.tytan.com"
          variant="secondary"
        >
          Link
        </BaseButton>
      </>
    ),
    link: "https://www.akademia.tytan.com",
  },
  {
    id: "zzpProject",
    name: "ZZPhuis",
    value: (
      <>
        <p>
          Website I&apos;ve worked on while working for{" "}
          <a href="https://www.affee360.com">
            <span>Affee360</span>
          </a>
          . Website for managing live events/trainings and on-line webinars,
          with addition of blog functionality
        </p>
        <BaseButton as="a" href="https://www.zzphuis.nl" variant="secondary">
          Link
        </BaseButton>
      </>
    ),
    link: "https://www.zzphuis.nl",
  },
  {
    id: "portfolioProject",
    name: "Portfolio",
    value: (
      <>
        <p>This portfolio site made with Gatsby</p>
        <BaseButton as="a" href="#home" variant="secondary">
          Link
        </BaseButton>
      </>
    ),
    link: "#home",
  },
];
