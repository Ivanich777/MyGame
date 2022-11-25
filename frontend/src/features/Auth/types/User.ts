export interface Res { message:string; user:string}

export default interface User {
  login:string;
  email:string;
  password:string;
  checkedPassword:string;
}
