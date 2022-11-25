export interface Res { message: string; user: string, points: number }

export default interface User {
  login: string;
  email: string;
  password: string;
  checkedPassword: string;
}

export interface ResScore {
  points: number;
}
