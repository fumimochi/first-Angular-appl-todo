export class User {
    constructor(
        public id: number,
        public name: string, 
        public age: number, 
        public sex: string,
        public experience: Array<number>,
        public experienceAsTitle: Array<string> 
    ) { }
}

export class Companies {
    constructor(
        public id: number,
        public title: string,
    ) { }
}