export type NonEmptyArr<T> = [T, ...T[]];

export interface IContent {
  name: string;
  value: NonEmptyArr<string>;
}

export const frontendStack: IContent = {
  name: "Frontend",
  value: [
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "React",
    "Gatsby",
    "Styled-Components",
    "Redux",
    "GraphQL",
  ],
};

export const backendStack: IContent = {
  name: "Backend",
  value: [
    "Node.js, Express",
    "GraphQL",
    "ApolloServer",
    "Server-Side-Rendering",
  ],
};

export const otherStack: IContent = {
  name: "Other",
  value: ["Apache", "Linux", "MacOS", "Docker"],
};

export const techStack: NonEmptyArr<IContent> = [
  frontendStack,
  backendStack,
  otherStack,
];
