import Card from '../features/CardList/types/Card';

 export const loadCards = async (): Promise< Card[] > => {
    const res = await fetch('http://localhost:4000/api');
    return res.json();
};
// export const addItem = async (item: Card): Promise<Card> => {
//     const res = await fetch('http://localhost:4000/api', {
//       method: 'post',
//       headers: { 'Content-type': 'application/json' },
//       body: JSON.stringify(item),
//     });
//     return res.json();
//   };
