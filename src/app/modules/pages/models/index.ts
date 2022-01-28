export namespace PagesModels {
  export namespace User {
    export interface IUser {
      id: number;
      name: string;
      age: number;
      sex: string;
      experience: Array<number>;
      experienceAsTitle: Array<string>;
    }
  }

  export namespace Companies {
    export interface ICompanies {
      id: number,
      title: string
    }
  }

  export namespace Todo {
    export interface ITodo {
      content: string,
      done: boolean
    }
  }
}
