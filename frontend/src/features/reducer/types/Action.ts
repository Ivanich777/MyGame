import Card from '../../CardList/types/Card';

type Action =
| { type: 'INIT_CARD', payload: Card[] };

export default Action;
