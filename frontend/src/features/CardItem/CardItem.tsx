import React from 'react';
import Card from '../CardList/types/Card';

function CardItem({ card }: { card: Card }): JSX.Element {

  
  return (
    <>
      <div className='game'>
        <div className='question'>{card.cost}</div>
      </div>
    </>
  );
}

export default CardItem;
