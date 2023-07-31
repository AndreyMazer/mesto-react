import React from "react";
function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };
  return (
    <div className="element">
      <img
        className="element__gora"
        src={card.link}
        alt={`${card.name}`}
        onClick={handleClick}
      />
      <h2 className="element__title">{card.name}</h2>
      <button type="button" className="element__like"></button>
      <span className="element__like-counter">{card.likes.length}</span>
      <button type="button" className="element__delete"></button>
    </div>
  );
}

export default Card;
