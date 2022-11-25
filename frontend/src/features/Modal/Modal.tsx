import React, { Children, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function Modal(): JSX.Element {
  const [active, setActive] = useState(false);


  return (
    <>
      <button onClick={() => setActive(true)} type="button">Модалка</button>
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
          <form className="modal_form">
            <h2>Вопрос: Тут какой-то вопрос</h2>
            <textarea className="modal_inpt" name="answer" placeholder="Ваш ответ" />
            <button className="modal_btn" type="submit">Ответить</button>
          </form>
        </div>
      </div>
    </>
  );
}
