export default interface Card {
    id: number;
    answer: string;
    question: string;
    cost: number;
    topic_id: number;
}

export type CardId = Card['id'];
