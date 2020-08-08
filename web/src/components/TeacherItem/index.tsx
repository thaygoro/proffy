import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/23264147?s=460&u=4e983c8b5d679ece1edb4b325f8fccfe05044412&v=4" alt="Tháygoro Minuzzi"/>
        <div>
          <strong>Tháygoro Minuzzi</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima sit cupiditate vitae cumque iusto harum facilis? Facilis doloribus fuga, harum eveniet ut nam, praesentium eius repellendus neque sunt magnam?
        <br /><br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ea consectetur officia, error odit hic! Dolores fugit, eligendi consequatur quisquam reprehenderit, commodi vel error officia rem ipsam voluptas voluptatibus exercitationem.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;