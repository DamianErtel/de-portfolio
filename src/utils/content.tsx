import React from "react";
import { BaseButton } from "../commonStyles";
import { IEmployer, IProject, NonEmptyArr } from "../types";

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
