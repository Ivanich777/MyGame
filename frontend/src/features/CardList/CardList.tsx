import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import { RootState } from '../reducer/store';

function CardList():JSX.Element {
  const { cards } = useSelector((state:RootState) => state.cardState);
console.log(cards);
  return (
    <div>

      {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}

    </div>
  );
}

export default CardList;
