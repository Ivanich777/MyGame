export default interface Card {
    id: number;
    answer: string;
    question: string;
    cost: number;
    topic_id: number;
    'Topic.name': string;
    'Topic.id': number;
}

export type CardId = Card['id'];
