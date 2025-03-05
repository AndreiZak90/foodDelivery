import "./_productCard.scss";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import close from "../../../images/icons/X.png";
import { addBascet, addTotalPrice } from "../../../Redux/slices/productSlice";

export default function ProductCardMini(state) {
  const item = state.state;

  const { bascetBox } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModel = () => setIsOpen(false);

  const examination = bascetBox.find((iten) => iten.name === item.name);

  const addInBascet = (i, event) => {
    const parent = event.target.parentElement;
    if (parent.classList.contains("cardMini_btn_stop")) {
      return;
    } else {
      dispatch(addBascet(i));
      dispatch(addTotalPrice(i.price));
    }
  };

  return (
    <>
      <div
        className={
          examination ? "productCardMini cardMini_btn_stop" : "productCardMini"
        }
      >
        <div className="cardMini_img_link" onClick={openModal}>
          <img src={item.img} alt="фото" className="cardMini_img" />
        </div>
        <div className="cardMini_count">{item.price}₽</div>
        <p className="cardMini_nameProduct">{item.name}</p>
        <p className="cardMini_weight">{item.weight}г</p>
        <div onClick={() => addInBascet(item, event)} className="cardMini_btn">
          Добавить
        </div>
        {isOpen && (
          <div className="modalCardBox">
            <div className="modalCard">
              <div className="closeBtn" onClick={closeModel}>
                <img src={close} alt="картинка" />
              </div>
              <h3 className="modalCard_title">{item.name}</h3>
              <div className="modalCard_mainBlock">
                <img src={item.img} alt="фото" className="modalCardMini_img" />
                <div className="modalCard_mainBlock_list">
                  <p className="modalCard_mainBlock_list_text">
                    {item.description}
                  </p>
                  <div className="modalCard_mainBlock_list_compound">
                    Состав:
                    <ul>
                      {item.composition.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="modalCard_mainBlock_list_netto">
                    {item.weight}г, ккал {item.calories}
                  </p>
                </div>
              </div>
              <div className="modalCard_btns">
                <div
                  onClick={() => addInBascet(item, event)}
                  className="cardMini_btn modalCard_btn"
                >
                  Добавить
                </div>
                <div className="modalCard_btns_count">
                  <div className="cardMini_count">{item.price}₽</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
