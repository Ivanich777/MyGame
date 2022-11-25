import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyMiddleware } from 'redux';
import Card from '../CardList/types/Card';
import { RootState } from '../reducer/store';
import './Modal.css';
import * as api from '../../App/api';

function CardItem({ card }: { card: Card }): JSX.Element {
  const [active, setActive] = useState(false);
  const [answer, setAnswer] = useState('');
  const { points } = useSelector((state: RootState) =>
    state.userState);
  const dispatch = useDispatch();
  const Logic = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(card.id, '===');
    api.score({ id: card.id, answer }).then((data) => dispatch({ type: 'EDIT', payload: data }));

    setActive(false);
  };

  return (
    <div className="question">
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
          <div className="modal_form">
            <h3>Вопрос: {card.question}</h3>
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="modal_inpt" name="answer" placeholder="Ваш ответ" />
            <button className="modal_btn" onClick={Logic} type="button">Ответить</button>
          </div>
        </div>
      </div>
      <div onClick={() => setActive(true)}>{card.cost}</div>
    </div>

  );
}

export default CardItem;
