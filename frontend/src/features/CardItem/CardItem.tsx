import React from 'react';
import Card from '../CardList/types/Card';

function CardItem({ card }: { card: Card }): JSX.Element {
  return (
    <div>{card.id}</div>
  );
}

export default CardItem;
