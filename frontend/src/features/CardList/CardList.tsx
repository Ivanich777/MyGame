import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import { RootState } from '../reducer/store';

function CardList(): JSX.Element {
  const { cards } = useSelector((state: RootState) => state.cardState);
  const { topics } = useSelector((state: RootState) => state.topicState);
  console.log(topics);

  return (
    <div className="main_container">
      <h1 className="main_title">Привет, USERNAME!</h1>
      <div className="game">
        {topics.map((topic) => <div className="theme">{topic.name}</div>)}
        {/* {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))} */}
      </div>
    </div>
  );
}

export default CardList;
