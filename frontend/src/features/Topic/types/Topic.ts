export default interface Topic {
  id: number;
  name: string;
}

export type TopicId = Topic['id'];

export interface Score {
  id: number;
  answer: string;
}