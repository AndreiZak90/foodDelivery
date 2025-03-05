import "./_bascet.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTotalPrice,
  delBascetItem,
  minusTotalPrice,
} from "../../../Redux/slices/productSlice";

export default function ItemBascet(state) {
  const item = state.state;

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const countPlus = () => {
    setCount(count + 1);
    dispatch(addTotalPrice(item.price));
  };
  const countMinus = () => {
    setCount(count - 1);
    dispatch(minusTotalPrice(item.price));
  };

  if (count < 1) {
    setCount(1);
    dispatch(delBascetItem(item));
  }

  return (
    <>
      <div className="itemBascet">
        <img src={item.img} alt="фото" className="itemBascet_img" />
        <div className="itemBascet_info">
          <h4 className="itemBascet_info_title">{item.name}</h4>
          <p className="itemBascet_info_netto">{item.weight}г</p>
          <div className="itemBascet_info_price">
            <p className="itemBascet_info_price_sum">{item.price}</p>
            <p className="itemBascet_info_price_valuta">₽</p>
          </div>
        </div>
        <div className="counterBascet">
          <button onClick={countMinus} className="counterBascet_minus">
            -
          </button>
          <div className="counterBascet_number">{count}</div>
          <button onClick={countPlus} className="counterBascet_plus">
            +
          </button>
        </div>
      </div>
    </>
  );
}
