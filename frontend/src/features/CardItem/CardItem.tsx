import React, { useState } from 'react';
import Card from '../CardList/types/Card';
import './Modal.css';

function CardItem({ card }: { card: Card }): JSX.Element {
  const [active, setActive] = useState(false);
  const [answer, setAnswer] = useState('');

  return (
    <div className="question" onClick={() => setActive(true)}>
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
          <form className="modal_form">
            <h2>Вопрос: {card.question}</h2>
            <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} className="modal_inpt" name="answer" placeholder="Ваш ответ" />
            <button className="modal_btn" type="submit">Ответить</button>
          </form>
        </div>
      </div>
      {card.cost}
    </div>

  );
}

export default CardItem;
