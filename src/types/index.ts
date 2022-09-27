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
  value: string;
}

export interface IEmployer extends ID {
  name: string;
  value: string;
}

export interface ISkillQuery {
  gcms: {
    skills: NonEmptyArr<IContent>;
  };
}

export interface IEmployerQuery {
  gcms: {
    employers: NonEmptyArr<IEmployer>;
  };
}

export interface IProjectQuery {
  gcms: {
    projects: NonEmptyArr<IProject>;
  };
}
