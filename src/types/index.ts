import { ReactNode } from "react";

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

export interface ISkillQuery {
  gcms: {
    skills: NonEmptyArr<IContent>;
  };
}
