import "./_bascet.scss";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import deliv from "../../../images/icons/delivery.png";
import ItemBascet from "./itemBascet";
import { zeroTotalPrice } from "../../../Redux/slices/productSlice";
import PaymentCardModal from "../../Card/CardModal/PaymentCardModal";

export default function Bascet() {
  const { bascetBox, totalPrice } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [count, setCount] = useState(bascetBox.length);
  const [activeModal, setActiveModal] = useState(false);
  const [bascetMass, setBascetMass] = useState(bascetBox);
  const [updateBas, setUpdateBas] = useState(true);

  useEffect(() => {
    setCount(bascetBox.length);
    setBascetMass(bascetBox);
    if (bascetBox.length === 0) {
      dispatch(zeroTotalPrice(0));
    }
  }, [bascetBox, dispatch, updateBas]);

  const basActive = () => {
    const bascet = document.querySelector(".box_bascet");
    bascet.classList.toggle("activeBascet");
  };

  const openPaymentCard = () => {
    setActiveModal(true);
  };

  const closes = () => {
    setActiveModal(false);
  };

  const update = () => {
    setUpdateBas(!updateBas);
  };

  return (
    <>
      <div className="box_bascet">
        <div className="bascet">
          <div className="bascet_up_title_box" onClick={basActive}>
            <h3 className="bascet_title">Корзина</h3>
            <div className="bascet_count">{count}</div>
          </div>
          {count != 0 && (
            <div className="box_order">
              <div className="bascet_box">
                {bascetMass.map((item, idx) => (
                  <ItemBascet key={idx} state={item} newBas={update} />
                ))}
              </div>
              <div className="bascet_total_box">
                <p className="bascet_total_title">Итого</p>
                <p className="bascet_total_count">{totalPrice}₽</p>
              </div>
              <button onClick={openPaymentCard} className="bascet_total_btn">
                Оформить заказ
              </button>
              <div className="bascet_footer">
                <img src={deliv} className="bascet_footer_img" />
                <p className="bascet_footer_text">Бесплатная доставка</p>
              </div>
              {activeModal && (
                <>
                  <PaymentCardModal state={closes} />
                </>
              )}
            </div>
          )}
          {count === 0 && (
            <>
              <p className="text">Тут пока пусто</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
