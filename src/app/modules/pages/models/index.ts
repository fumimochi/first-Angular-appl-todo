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
}
