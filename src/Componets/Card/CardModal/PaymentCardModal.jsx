import "./_paymentCardModal.scss";

import pic from "../../../images/logo/pic.png";
import X from "../../../images/icons/X.png";

import { useState } from "react";

export default function PaymentCardModal(state) {
  const stat = state.state;
  const closes = () => {
    stat();
  };

  const [isSecondCheckedYou, setIsSecondCheckedYou] = useState(true);
  const [isSecondCheckedDeliv, setIsSecondCheckedDeliv] = useState(false);

  const handleSecondCheckboxChange = () => {
    setIsSecondCheckedDeliv(!isSecondCheckedDeliv);
    setIsSecondCheckedYou(!isSecondCheckedYou);
  };
  return (
    <div className="payment">
      <div className="payment_box">
        <div className="payment_box_img_block">
          <img src={pic} alt="пончик" className="payment_box_images" />
        </div>
        <div className="payment_box_information">
          <button className="closed" onClick={closes}>
            <img src={X} alt="X" />
          </button>
          <div className="payment_box_title">Доставка</div>
          <input
            type="text"
            placeholder="Ваше имя"
            className="payment_box_input"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="payment_box_input"
          />
          <div className="payment_box_inputs">
            <label className="payment_box_inputs_label">
              <input
                type="checkbox"
                checked={isSecondCheckedYou}
                onChange={handleSecondCheckboxChange}
              />
              <div className="chekbox_dots"></div>
              <div className="checkbox_text">Самовывоз</div>
            </label>
            <label className="payment_box_inputs_label">
              <input
                type="checkbox"
                checked={isSecondCheckedDeliv}
                onChange={handleSecondCheckboxChange}
              />
              <div className="chekbox_dots"></div>
              <div className="checkbox_text">Доставка</div>
            </label>
            {isSecondCheckedDeliv && (
              <div className="addition">
                <input
                  type="text"
                  className="addition_adrees"
                  placeholder="Улица, дом, квартира"
                />
                <div className="addition_adrees_mini">
                  <input
                    type="number"
                    className="addition_adrees_mini_inp"
                    placeholder="Этаж"
                  />
                  <input
                    type="number"
                    className="addition_adrees_mini_inp"
                    placeholder="Домофон"
                  />
                </div>
              </div>
            )}
          </div>
          <button className="send">Оформить</button>
        </div>
      </div>
    </div>
  );
}
