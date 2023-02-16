// number / boolean / string / null / any / unknown
export type FixMe = any;

let a: number;

// let numArray: number[] = [1,2,3,4]
// let numArray: Array<number> = [1, 2, 3, 4];

// function concat(a: number, str: any): string {
//   return a + str;
// }

// type Admin = {
//   password: string;
// };

// type User = {
//   name: string;
//   age: number;
// };

// interface IUser {
//   name: string;
//   age: number;
// }

// const admin: IUser = {
//   age: 24,
//   name: "John",
// };

// type Item<T> = {
//   prop: T;
// };

// const obj: Item<number> = {
//   prop: 43,
// };

interface IPost {
  id: string;
  title: string;
  name: string;
  isValid: boolean;
}

type A = Partial<IPost>;
type B = Required<IPost>;
type C = Readonly<IPost>;

const book: C = {
  id: "123",
  title: "Big boom",
  name: "Jhon",
  isValid: true,
};

// interface CatInfo {
//   age: number;
//   name: string;
// }

// type CatName = "vaska" | "stepka" | "oleg";

// const cats: Record<CatName, CatInfo> = {
//   vaska: { age: 1, name: "sad" },
//   stepka: { age: 1, name: "sad" },
//   oleg: { age: 1, name: "sad" },
// };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoPreview2 = Omit<Todo, "title" | "completed">;

const todo: TodoPreview2 = {
  //   title: "asd",
  //   completed: false,
  description: "asd",
};
