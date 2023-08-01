import React from "react";
import "../index.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import PopupWithImage from "./PopupWithImage";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }
  return (
  
    <div className="page">
      <Header />
      <Content
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="popupFormProfile"
        title="Редактировать профиль "
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="text"
              name="name"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error popup__input-error_type_name"></span>
            <input
              type="text"
              name="career"
              className="popup__input popup__input_type_career"
              placeholder="Вид деятельности"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error popup__input-error_type_career"></span>
          </>
        }
      />
      <PopupWithForm
        name="popupFormCardAdd"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="text"
              name="place"
              className="popup__input popup__input_type_place"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error popup__input-error_type_place"></span>
            <input
              type="url"
              name="link"
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error popup__input-error_type_link"></span>
          </>
        }
      />
      <PopupWithForm
        name="popupFormAvatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="url"
              name="avatar"
              className="popup__input popup__input_type_avatar"
              placeholder="Ссылка на аватар"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error popup__input-error_type_avatar"></span>
          </>
        }
      />
      <PopupWithForm name="popupDelete" title="Вы уверены?" />
      <PopupWithImage card={selectedCard} onClose={closeAllPopups} />
    </div>
    
  );
}
export default App;
