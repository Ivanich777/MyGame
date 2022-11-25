import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import { RootState } from '../reducer/store';

function CardList(): JSX.Element {
  const { cards } = useSelector((state: RootState) => state.cardState);
  const { topics } = useSelector((state: RootState) => state.topicState);
  const { user, points } = useSelector((state: RootState) =>
    state.userState);

  return (
    <div className="main_container">
      <h1 className="main_title"><strong>Привет, {user}, у тебя {points} рублей</strong></h1>
      <div className="game">
        <div className="topicsdiv">
          {topics.map((topic) => (
            <>
              <div className="theme">{topic.name}</div>
              <div className="themesdiv">
                {cards.filter((el) => el.topic_id === topic.id).map((card) => (
                  <CardItem key={card.id} card={card} />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardList;
