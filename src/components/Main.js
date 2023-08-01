import React from "react";

import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([resUser, resCard]) => {
        setUserName(resUser.name);
        setUserDescription(resUser.about);
        setUserAvatar(resUser.avatar);
        setCards(resCard);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img
          style={{ backgroundImage: `url(${userAvatar})` }}
          className="profile__avatar"
          alt="Фотография пользователя"
        />
        <button
          onClick={onEditAvatar}
          type="button"
          className="profile__avatar profile__avatar_button"
        ></button>

        <div className="info">
          <h1 className="info__name">{userName}</h1>
          <button
            onClick={onEditProfile}
            type="button"
            className="info__edit"
          ></button>

          <p className="info__career">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add"
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card onCardClick={onCardClick} card={card} key={card._id} />
        ))}
      </section>
    </main>
  );
}

export default Main;
